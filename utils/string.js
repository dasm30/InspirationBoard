export const removeEndpoints = str => {
  const i = str.indexOf('.com')
  return str.substring(0, i + 4)
}
