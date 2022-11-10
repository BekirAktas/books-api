import { Document } from 'mongoose';
import Author from '../author/author.interface';

export default interface Book extends Document {
    title: string;
    author: number;
    price: number;
    ISBN: string;
    language: string;
    number_of_pages: number;
    publisher: string;
}