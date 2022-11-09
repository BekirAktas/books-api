import { Document } from 'mongoose';

export default interface Author extends Document {
    name: string;
    country: string;
    birth_date: Date;
}