export function Arrow({ children, callback, position }) {
  return (
    <div
      className={`text-white absolute top-1/2 -translate-y-1/2 ${
        position === 'right' ? 'right-3' : 'left-3'
      } rounded-full bg-black bg-opacity-60 p-4 cursor-pointer transition-all hover:bg-opacity-80 hover:scale-95`}
      onClick={callback}
    >
      {children}
    </div>
  )
}
