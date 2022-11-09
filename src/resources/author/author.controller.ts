import { Router, Request, Response, NextFunction } from 'express';
import Controller from '@/utils/interfaces/controller.interface';
import HttpException from '@/utils/exceptions/http.exception';
import validationMiddleware from '@/middleware/validation.middleware';
import validate from '@/resources/author/author.validation';
import AuthorService from '@/resources/author/author.service';

class AuthorController implements Controller {
    public path = '/authors';
    public router = Router();
    private AuthorService = new AuthorService();

    constructor() {
        this.initialiseRoutes();
    }

    private initialiseRoutes(): void {
        this.router.post(
            `${this.path}`,
            validationMiddleware(validate.create),
            this.createAuthor
        )

        this.router.get(
            `${this.path}`,
            this.getAll
        )

        this.router.patch(
            `${this.path}/:id`,
            this.updateAuthor
        )
    }

    private createAuthor = async (
        req: Request,
        res: Response,
        next: NextFunction,

    ): Promise<Response | void> => {
        try {
            const { name, country, birth_date } = req.body;

            const author = await this.AuthorService.create(name, country, birth_date);

            res.status(201).json({ author });
        } catch (error) {
            next(new HttpException(400, 'Cannot create author'));
        }
    }

    private getAll = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
        try {
            const authors = await this.AuthorService.getAll();
            
            res.status(200).json({authors});
        } catch (error) {
            next(new HttpException(400, 'Cannot get authors'));
        }
    }

    private updateAuthor = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
        // try {
            const { name, country, birth_date } = req.body;

            const updatedAuthor = await this.AuthorService.update(req.params.id, name, country, birth_date);

            res.status(201).json({ updatedAuthor });

        // } catch (error) {
        //     next(new HttpException(400, 'Cannot get authors'));
        // }
    }
}

export default AuthorController;