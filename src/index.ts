import 'dotenv/config';
import 'module-alias/register';
import validateEnv from './utils/validateEnv';
import App from './app';
import AuthorController from './resources/author/author.controller';
import BookController from './resources/book/book.controller';

validateEnv();

const app = new App([new AuthorController(), new BookController()], 3000);

app.listen();