// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = string;

export const hello = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  res.status(200).json('Hello, world!');
}

export default hello;
