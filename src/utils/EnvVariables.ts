import dotenv from 'dotenv';

dotenv.config();

export abstract class EnvVariables {
  static readonly DB_HOST = process.env.DB_HOST as string;
  static readonly DB_USER = process.env.DB_USER as string;
  static readonly DB_PASSWORD = process.env.DB_PASSWORD as string;
  static readonly DB_NAME = process.env.DB_NAME as string;
}

