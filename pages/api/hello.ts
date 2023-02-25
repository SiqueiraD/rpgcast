// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios, { AxiosResponse } from 'axios'

type Data = {
  statusCode: number
  body: any
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const response = await axios
      .request({
        url: `https://api.agify.io?name=michael`,
        method: 'get',
      })
      .then((resp: AxiosResponse) => ({
        statusCode: resp.status,
        body: resp.data,
      }))
      .catch((error: any) => ({
        statusCode: error.response.status,
        body: error.response.data,
      }))

  res.status(200).json(response)
}
