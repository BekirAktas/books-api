import BookModel from '@/resources/book/book.model';
import Book from '@/resources/book/book.interface';
import Author from '@/resources/author/author.interface';

class BookService {
    private book = BookModel;

    /**
     *  Create a new author
     */
    public async create(
        title: string, 
        author: Author, 
        price: number, ISBN: string, 
        language: string, 
        number_of_pages: number, 
        publisher: string
        ): Promise<Book> {
        try {
            const book = await this.book.create(
                {title, author, price, ISBN, language, number_of_pages, publisher});

            return book
        } catch (error) {
            throw new Error('unable to create book');
        }
    }

    public async getAll() {
        try {
            const books = await this.book.find();

            return books
        } catch (error) {
            throw new Error('unable to get books');
        }
    }

    public async showBook(id: string) {
        try {
            const book = await this.book.findById(id);
            
            return book;
        } catch (error) {
            throw new Error('unable to find book');
        }
    }

    public async deleteBook(id: string) {
        try {
            const isDeleted = await this.book.deleteOne({ _id: id });
            return (isDeleted.deletedCount === 0 ? false : true);
        } catch (error) {
            throw new Error("unable to delete book");
        }
    }

    public async updateBook(
        id: string,
        title: string, 
        author: Author, 
        price: number, ISBN: string, 
        language: string, 
        number_of_pages: number, 
        publisher: string
    ) {
        try {
            const updatedBook = await this.book.findByIdAndUpdate(id, 
                { "$set": {'title': title, 'author': author, 'price': price, 
                'language': language, 'number_of_pages': number_of_pages, 'publisher': publisher}});

                return updatedBook;
        } catch (error) {
            throw new Error("unable to update book");
        }
    }
}

export default BookService;