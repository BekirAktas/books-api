import { Schema, model } from 'mongoose';
import Author from './author.interface';

const AuthorSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    country: {
      type: String,
      required: true,
    },

    birth_date: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model<Author>('Author', AuthorSchema);
