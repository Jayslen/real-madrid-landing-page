 function sortDate(a, b) {
  const dateA = new Date(a.frontmatter.pubDate)
  const dateB = new Date(b.frontmatter.pubDate)
  return dateA - dateB
}

export default sortDate