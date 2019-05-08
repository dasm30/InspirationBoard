const mainUri = 'https://3dsoto.dropmark.com/'

export async function fetchCollection(id) {
  const response = await fetch(`${mainUri}${id}.json`).catch(e => e)
  switch (response.name) {
    case 'FetchError': return {}
  }
  const json = await response.json()
  return json
}
export async function fetchAll(ids = [
  '667378',
  '667430',
  '667390',
  // '667386', //throws error
  '667384',
  '667382',
]) {
  const response = await Promise.all(ids.map(endpoint =>
    fetch(`${mainUri}${endpoint}.json`).then(
      (response) => response.json()
    ))
  ).catch(e => e)
  switch (response.name) {
    case 'FetchError': return []
  }
  return response
}
