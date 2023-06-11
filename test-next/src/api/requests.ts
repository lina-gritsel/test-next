import axios from 'axios'

const BASE_URL = 'https://test-api.biterika.team/v1/campaigns/'

export const getAllInfo = async () => {
  try {
    const {data} = await axios.get(BASE_URL)

    return data
  } catch (error) {
    console.error(error)
  }
}
