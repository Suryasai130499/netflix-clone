import type { NextApiRequest, NextApiResponse } from 'next';
import instance from './utils/axios';
import Requests from './utils/requests';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await instance.get(Requests.fetchTopRated);
  if (response.data.success === false) {
    return res.status(400).json({
      success: false,
      message: response.data.status_message,
    });
  }
  res.status(200).json({
    success: true,
    data: response.data.results,
    pages: response.data.total_pages,
  });
}
