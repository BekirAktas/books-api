import { Schema, model } from 'mongoose';
import Book from '../book/book.interface';

const BookSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },

        author: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'Author',
        },

        price: {
            type: Number,
            required: true,
        },

        ISBN: {
            type: String,
            required: true,
        },

        language: {
            type: String,
            required: true,
        },

        number_of_pages: {
            type: Number,
            required: true,
        },

        publisher: {
            type: String,
            required: true
        }
    },
        {
            timestamps : true
        }
);

export default model<Book>('Book', BookSchema);