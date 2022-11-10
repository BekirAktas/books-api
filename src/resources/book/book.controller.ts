import { Router, Request, Response, NextFunction } from 'express';
import Controller from '../../utils/interfaces/controller.interface';
import HttpException from '../../utils/exceptions/http.exception';
import validationMiddleware from '../../middleware/validation.middleware';
import validate from '../book/book.validation';
import BookService from '../book/book.service';

class BookController implements Controller {
  public path = '/books';
  public router = Router();
  private BookService = new BookService();

  constructor() {
    this.initialiseRoutes();
  }

  private initialiseRoutes(): void {
    this.router.post(
      `${this.path}`,
      validationMiddleware(validate.create),
      this.createBook
    );

    this.router.get(`${this.path}`, this.getAll);

    this.router.get(`${this.path}/:id`, this.showBook);

    this.router.delete(`${this.path}/:id`, this.deleteBook);

    this.router.patch(
      `${this.path}/:id`,
      validationMiddleware(validate.create), //same fields as create are required to update. because of it uses the same validation.
      this.updateBook
    );
  }

  private createBook = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> => {
    try {
      const {
        title,
        author,
        price,
        ISBN,
        language,
        number_of_pages,
        publisher,
      } = req.body;

      const book = await this.BookService.create(
        title,
        author,
        price,
        ISBN,
        language,
        number_of_pages,
        publisher
      );

      res.status(201).json({ book });
    } catch (error) {
      next(new HttpException(400, 'Cannot create book'));
    }
  };

  private getAll = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> => {
    try {
      const books = await this.BookService.getAll();

      res.status(200).json({ books });
    } catch (error) {
      next(new HttpException(400, 'Cannot get books'));
    }
  };

  private deleteBook = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> => {
    try {
      const isDeleted = await this.BookService.deleteBook(req.params.id);

      if (isDeleted) {
        res.status(200).json({ isDeleted });
      } else {
        res.status(404).json({ message: 'book not found' });
      }
    } catch (error) {
      next(new HttpException(400, 'Cannot delete book'));
    }
  };

  private showBook = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> => {
    try {
      const book = await this.BookService.showBook(req.params.id);

      res.status(200).json({ book });
    } catch (error) {
      next(new HttpException(400, 'Cannot show book'));
    }
  };

  private updateBook = async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<Response | void> => {
    try {
      const {
        title,
        author,
        price,
        ISBN,
        language,
        number_of_pages,
        publisher,
      } = req.body;

      const book = await this.BookService.updateBook(
        req.params.id,
        title,
        author,
        price,
        ISBN,
        language,
        number_of_pages,
        publisher
      );

      res.status(200).json({ book });
    } catch (error) {
      next(new HttpException(400, 'cannot update book'));
    }
  };
}

export default BookController;
