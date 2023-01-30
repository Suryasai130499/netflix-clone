import type { NextApiRequest, NextApiResponse } from 'next';
import instance from '../axios';
import Requests from '../requests';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await instance.get(Requests.fetchTrending);
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
