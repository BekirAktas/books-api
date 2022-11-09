import AuthorModel from '@/resources/author/author.model';
import Author from '@/resources/author/author.interface';

class AuthorService {
    private author = AuthorModel;

    /**
     *  Create a new author
     */
    public async create(name: string, country:string, birth_date:string): Promise<Author> {
        try {
            const author = await this.author.create({name, country, birth_date });

            return author
        } catch (error) {
            throw new Error('unable to create author');
        }
    }

    public async getAll() {
        try {
            const authors = await this.author.find();

            return authors
        } catch (error) {
            throw new Error('unable to get authors');
        }
    }

    public async update(id: string, name: string, country:string, birth_date: Date) {
        try {
            const updatedAuthor = await this.author.findByIdAndUpdate(id, {"$set": {
                'name': name,
                'country':country,
                'birth_date': birth_date
            }});

            return updatedAuthor;
        } catch (error) {
            throw new Error("unable to update authors");
        }
    }
}

export default AuthorService;