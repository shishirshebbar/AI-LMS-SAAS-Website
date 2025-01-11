import dotenv from 'dotenv';
dotenv.config({ path: './.env.local' });

import { defineConfig } from 'drizzle-kit';


export default defineConfig({
  dialect: 'postgresql',
  schema: './utils/dbschema.js',
  dbCredentials: {
    url: process.env.NEXT_PUBLIC_DATABASE
  },
});