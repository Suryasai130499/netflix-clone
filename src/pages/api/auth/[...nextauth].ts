import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { MongoClient } from 'mongodb';
import { compare } from 'bcryptjs';

const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      name: 'credentials',
      authorize: async (credentials, req) => {
        const { email, password } = credentials;
        const client = await MongoClient.connect(
          process.env.MONGO_URI ? process.env.MONGO_URI : ''
        ).then((clt) => clt);

        const users = client.db().collection('users');

        const user = await users.findOne({ email });

        if (!user) {
          throw new Error('User not found');
        }

        const isMatch = await compare(password, user.password);

        if (!isMatch) {
          throw new Error('Password is incorrect');
        }

        return user;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
