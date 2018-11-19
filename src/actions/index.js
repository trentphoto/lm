import axios from 'axios'

export const GET_EPISODES = 'GET_EPISODES'

export const getEpisodes = () => async dispatch => {
  const res = await axios.get('https://brightsaltmedialabs.com/buildingoneanotheradmin/wp-json/wp/v2/episode?per_page=99&_embed')
  // generate an object with only the data that we need
  const a = res.data.map(i => ({
    title: i.acf.title,
    id: i.acf.number,
    notes: i.acf.notes,
    letter: i.acf.letter,
    url: i.acf.url,
    excerpt: i.acf.excerpt,
    image: i._embedded ? 'http://brightsaltmedialabs.com' + i._embedded['wp:featuredmedia'][0].source_url : null,
  }))
  dispatch({
    type: GET_EPISODES,
    payload: a
  })
}
