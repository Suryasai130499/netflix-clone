// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import instance from './utils/axios';
import Requests from './utils/requests';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await instance.get(Requests.fetchNetflixOriginals);
  if (response.data.success === false) {
    return res.status(400).json({
      success: false,
      message: response.data.status_message,
    });
  }
  res.status(200).json({
    success: true,
    data: response.data.results,
  });
}
