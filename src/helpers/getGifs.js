

export const getGifs = async (category) => {
  const API_KEY = process.env.REACT_APP_API_KEY_GIPHY || 'your_api_key';
  const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=`
  const res = await fetch(`${url}${API_KEY}`)  
  const {data} = await res.json()
  const gifs = data.map(gif => {
    return {
      id: gif.id,
      title: gif.title,
      url: gif.images?.downsized_medium.url
    }
  })
  return gifs
}
