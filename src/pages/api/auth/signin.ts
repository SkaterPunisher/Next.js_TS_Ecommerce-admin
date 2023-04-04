import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import validator from 'validator';
import bcrypt from 'bcrypt';
import * as jose from 'jose';
import { setCookie } from 'cookies-next';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    // Create error's array
    const errors: String[] = [];

    // Validation rules
    const validationSchema = [
      {
        valid: validator.isEmail(email),
        errorMessage: 'Email is invalid',
      },
      {
        valid: validator.isLength(password, {
          min: 1,
        }),
        errorMessage: 'Password is invalid',
      },
    ];

    // Check on errors
    validationSchema.forEach((check) => {
      if (!check.valid) {
        errors.push(check.errorMessage);
      }
    });

    // If error -> get status 400
    if (errors.length) {
      return res.status(400).json({ errorMessage: errors[0] });
    }

    // Find user with this email in db
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    // If in db not found this email -> get status 401
    if (!user) {
      return res
        .status(401)
        .json({ errorMessage: 'Email or password is invalid' });
    }

    // Compare password with user.password
    const isMatch = await bcrypt.compare(password, user.password);

    // If in db not match user.password with this password -> get status 401
    if (!isMatch) {
      return res
        .status(401)
        .json({ errorMessage: 'Email or password is invalid' });
    }

    // Create JWT
    const alg = 'HS256'; // Algorithm hashing

    const secret = new TextEncoder().encode(process.env.JWT_SECRET); // Get secret code on .env file

    const token = await new jose.SignJWT({
      email: user,
    })
      .setProtectedHeader({ alg })
      .setExpirationTime('24h')
      .sign(secret);

    // Set on LocalStorage JWT for 6 days
    setCookie('jwt', token, { req, res, maxAge: 60 * 6 * 24 });

    // review on browser
    return res.status(200).json({
      firstName: user.first_name,
      lastName: user.last_name,
      email: user.email,
      phone: user.phone,
      city: user.city,
    });
  }

  return res.status(404).json('Unknown endpoint');
}
