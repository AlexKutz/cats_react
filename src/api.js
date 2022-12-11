export const CATS_IMAGE_API_URL = 'https://cataas.com'

export async function loadTags () {
  let response
  try {
    response = await fetch(`${CATS_IMAGE_API_URL}/api/tags`)
  } catch (e) {
    console.log(e)
  }
  return await response.json()
}

export async function getCats (tags) {
  let response
  const url = new URL('/api/cats', CATS_IMAGE_API_URL)
  if (tags) {
    url.searchParams.set('tags', tags)
  }
  try {
    response = await fetch(url.href)
  } catch (e) {
    console.log(e)
  }
  const json = await response.json()
  return json
}
