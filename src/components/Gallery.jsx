import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from './ArrowRight'
import { ArrowLeft } from './ArrowLeft'
import { Arrow } from './ArrowContainer'
import { CloseIcon } from './CloseIcon'

export function Gallery({ images = [] }) {
  const [selectedImage, setSelectedImage] = useState(0)

  const previousImage = () => {
    if (selectedImage === 1) return
    setSelectedImage((prev) => prev - 1)
  }
  const nextImage = () => {
    if (selectedImage === images.length) return
    setSelectedImage((prev) => prev + 1)
  }
  const closeGallery = () => {
    setSelectedImage(null)
  }

  useEffect(() => {
    if (selectedImage) document.body.style.overflow = 'hidden'
    const controlGallery = (e) => {
      if (e.code === 'ArrowRight') nextImage()
      if (e.code === 'ArrowLeft') previousImage()
      if (e.code === 'Escape') closeGallery()
    }

    window.addEventListener('keyup', controlGallery)

    return () => {
      window.removeEventListener('keyup', controlGallery)
      document.body.style.overflow = 'auto'
    }
  })

  return (
    <>
      <h2 className="text-[#29395a] text-4xl">Imagenes</h2>
      <div className="grid grid-cols-3 gap-2.5 my-4">
        {images.slice(0, 9).map(({ image, alt }, index) => {
          return (
            <motion.img
              src={image}
              alt={alt}
              key={index}
              layoutId={index + 1}
              className="rounded-md cursor-pointer h-40 w-full"
              onClick={() => {
                setSelectedImage(index + 1)
              }}
            />
          )
        })}
      </div>

      <AnimatePresence mode="wait">
        {selectedImage && (
          <section className="h-screen w-screen fixed bg-black bg-opacity-60 top-0 left-0 grid place-content-center z-10">
            <div className="w-[850px] h-[550px] z-20 relative">
              <motion.img
                src={images[selectedImage - 1].image}
                alt={images[selectedImage - 1].alt}
                layoutId={selectedImage}
                className="rounded-md object-cover w-full h-full"
              />
              <div
                className="absolute p-3 top-2 right-2 bg-white rounded-full bg-opacity-60 hover:bg-opacity-80 hover:scale-95 cursor-pointer text-red-500"
                onClick={closeGallery}
              >
                <CloseIcon />
              </div>

              {selectedImage !== 1 && (
                <Arrow callback={previousImage}>
                  <ArrowLeft />
                </Arrow>
              )}
              {selectedImage !== images.length && (
                <Arrow callback={nextImage} position={'right'}>
                  <ArrowRight />
                </Arrow>
              )}
            </div>
          </section>
        )}
      </AnimatePresence>
    </>
  )
}
