# Books-api
A simple api app built using node.js, Typescript, mongoDB and Docker.

## Api Documentation Usage
To show api documentation
- Go to **./api-documentation/books-api-documentation** folder from terminal
- Type  ``` npx serve -p 5000 ``` command
- Open browser and visit ``` http://localhost:5000/ ```

## Application Usage with Docker

You can call ``` docker compose up ``` command to up project. Then container will be up on ``` http://localhost:3000/ ```

## Application Usage

to start application without Docker, inside project folder install packages with ``` npm install ``` command then start the application with ```npm run dev ``` command.

## END POINTS

### AUTHOR 
| Method | URL | fields |
| --------------- | --------------- | --------------- |
| GET | /api/authors | - |
| POST | /api/authors | name*, country*, birh_date* |
| PATCH | /authors/:authorId | name*, country*, birh_date* |

### BOOKS

| Method | URL | fields |
| --------------- | --------------- | --------------- |
| GET | /api/books | - |
| POST | /api/books | title*, author*, price*, ISBN*, language*, number_of_pages*, publisher* |
| PATCH | /api/books/:bookId | title*, author*, price*, ISBN*, language*, number_of_pages*, publisher* |
| GET | /api/books/:bookId | - |
| DELETE | /api/books/:bookId | - |

*fields are required