import type { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '../../../mongodb';

type Data = string;

export default async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  if (!req.body) {
    res.status(400).json('Bad Request');
  }
  const {email, password} = req.body;
  const db = await connectToDatabase();
  const result = await db?.collection('users').findOne({ email });
  if (result) {
    res.status(200).json('Hello, world!');
  }
  res.status(400).json('user does not exist');
}