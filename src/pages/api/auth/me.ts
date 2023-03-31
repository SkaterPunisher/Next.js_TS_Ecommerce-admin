import { NextApiRequest, NextApiResponse } from 'next';
import jwt from 'jsonwebtoken';
import { PrismaClient, User } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const bearerToken = req.headers['authorization'] as string;

  const token = bearerToken.split(' ')[1];

  // Decoding token and get only email
  const payload = jwt.decode(token) as { email: User };

  if (!payload.email) {
    return res.status(401).json({ errorMessage: 'Unauthorized request ' });
  }

  // Get in db user with this email
  const user = await prisma.user.findUnique({
    where: {
      email: payload.email.email,
    },
    select: {
      id: true,
      first_name: true,
      last_name: true,
      email: true,
      city: true,
      phone: true,
    },
  });

  if (!user) {
    return res.status(401).json({
      errorMessage: 'User not found',
    });
  }

  return res.json({
    id: user.id,
    firstName: user.first_name,
    lastName: user.last_name,
    phone: user.phone,
    city: user.city,
  });
}
