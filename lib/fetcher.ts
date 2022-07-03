import axios from 'axios'

const fetcher: any = (url: string) => {
  const headers: any = { 'Content-Type': 'application/json', Accept: 'application/json' }

  return axios.get(url, { headers }).then((res: any) => res.data)
}

export { fetcher }
