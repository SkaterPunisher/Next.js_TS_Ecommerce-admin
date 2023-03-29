import { NextApiRequest, NextApiResponse } from 'next';
import validator from 'validator';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import * as jose from 'jose';

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { firstName, lastName, email, city, phone, password } = req.body;

    // Create error's array
    const errors: string[] = [];

    // Validation rules
    const validationSchema = [
      {
        valid: validator.isLength(firstName, {
          min: 1,
          max: 20,
        }),
        errorMessage: 'First name is invalid',
      },
      {
        valid: validator.isLength(lastName, {
          min: 1,
          max: 20,
        }),
        errorMessage: 'Last name is invalid',
      },
      {
        valid: validator.isEmail(email),
        errorMessage: 'Email is invalid',
      },
      {
        valid: validator.isMobilePhone(phone),
        errorMessage: 'Phone number is invalid',
      },
      {
        valid: validator.isLength(city, {
          min: 1,
        }),
        errorMessage: 'City is invalid',
      },
      {
        valid: validator.isStrongPassword(password),
        errorMessage: 'Password is not strong enough',
      },
    ];

    // Set rules validation
    validationSchema.forEach((check) => {
      if (!check.valid) {
        errors.push(check.errorMessage);
      }
    });

    // Check for any errors
    if (errors.length) {
      return res.status(400).json({ errorMessage: errors[0] });
    }

    // Get all email's user
    const userWithEmail = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    // Check email on db for dublicate
    if (userWithEmail) {
      return res
        .status(400)
        .json({ errorMessage: 'Email is associated with another account' });
    }

    // Hashing password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user in db
    const user = await prisma.user.create({
      data: {
        first_name: firstName,
        last_name: lastName,
        password: hashedPassword,
        city,
        phone,
        email,
      },
    });

    // Create JWT
    const alg = 'HS256'; // Algorithm hashing

    const secret = new TextEncoder().encode(process.env.JWT_SECRET); // Get secret code on .env file

    const token = await new jose.SignJWT({
      email: user.email,
    })
      .setProtectedHeader({ alg })
      .setExpirationTime('24h')
      .sign(secret);

    // review on browser
    res.status(200).json({
      token: token,
    });
  }

  return res.status(404).json('Unknown endpoint');
}
