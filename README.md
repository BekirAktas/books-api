# books-api

A simple REST API written in Node.js, TypeScript using MongoDB as the database and runs on Docker.

## Starting the project

### Docker

You can call `compose up` command to launch the project. Container will listen requests on port `3000`, `http://localhost:3000/`

```
docker compose up
```

### Manual

Install project dependencies.

```
npm install
```

Then, start the development build of the application with:

```
npm run dev
```

## API Documentation Web UI

To show the API documentation web UI. Install the dependencies and run the following command inside the project folder.

```
npm run docs
```

Then, you can access the documentation web UI on port `5000`, `http://localhost:5000/`.

## Usage

## Endpoints

### Author

| Method | URL                | fields                       |
| ------ | ------------------ | ---------------------------- |
| GET    | /api/authors       | -                            |
| POST   | /api/authors       | name*, country*, birh_date\* |
| PATCH  | /authors/:authorId | name*, country*, birh_date\* |

### Books

| Method | URL                | fields                                                                   |
| ------ | ------------------ | ------------------------------------------------------------------------ |
| GET    | /api/books         | -                                                                        |
| POST   | /api/books         | title*, author*, price*, ISBN*, language*, number_of_pages*, publisher\* |
| PATCH  | /api/books/:bookId | title*, author*, price*, ISBN*, language*, number_of_pages*, publisher\* |
| GET    | /api/books/:bookId | -                                                                        |
| DELETE | /api/books/:bookId | -                                                                        |

\* fields are required.

## Examples

### Create Book

> POST: /api/books

Keep in mind you should create an author first because of the reference.

#### Request

```
{
  "title" : "TEST NAME",
  "author" : "author_id",
  "price" : 1,
  "ISBN" : "1",
  "language" : "TR",
  "number_of_pages" : 1,
  "publisher" : "TEST PUBLISHER NAME"
}
```

#### Response

```
{
  "book": {
    "title": "TEST NAME",
    "author": "author_id",
    "price": 1,
    "ISBN": "1",
    "language": "TR",
    "number_of_pages": 1,
    "publisher": "TEST PUBLISHER NAME",
    "_id": "636c12b9fe99a043414b8ed8",
    "createdAt": "2022-11-09T20:51:05.653Z",
    "updatedAt": "2022-11-09T20:51:05.653Z",
    "__v": 0
  }
}
```

### Create Author

> POST /api/authors

#### Request

```
{
  "name" : "TEST NAME",
  "country" : "TEST COUNTRY",
  "birth_date" : "2019-01-22 08:55:59"
}
```

#### Response

```
{
  "author": {
    "name": "TEST NAME",
    "country": "TEST COUNTRY",
    "birth_date": "2019-01-22T08:55:59.000Z",
    "_id": "id",
    "createdAt": "2022-11-09T20:50:39.599Z",
    "updatedAt": "2022-11-09T20:50:39.599Z",
    "__v": 0
  }
}
```

### Update Author

> PATCH /api/authors/:authorId

#### Request

```
{
  "name" : "TEST NAME2",
  "country" : "TEST COUNTRY2",
  "birth_date" : "2019-01-22 08:55:59"
}
```

#### Response

```
{
  "updatedAuthor": {
    "_id": "author_id",
    "name": "TEST NAME",
    "country": "TEST COUNTRY",
    "birth_date": "2019-01-22T05:55:59.000Z",
    "createdAt": "2022-11-09T19:40:29.486Z",
    "updatedAt": "2022-11-09T19:40:29.486Z",
    "__v": 0
  }
}
```
