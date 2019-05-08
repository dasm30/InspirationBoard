export const openInNewTab = url => e => {
  e.preventDefault()
  window.open(url, '_blank')
}
