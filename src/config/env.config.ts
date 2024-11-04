import * as dotenv from 'dotenv';
import * as path from 'path';

// Load environment variables from .env file
dotenv.config({ path: path.resolve(__dirname, '../../.env') });

export const ITEM_MICROSERVICE = process.env.ITEM_MICROSERVICE;
export const PORT = process.env.PORT;