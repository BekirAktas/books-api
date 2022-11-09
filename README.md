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

### Request Samples
1. CREATE BOOK: POST /api/books
```
// keep in mind you should create author first because of the reference

{
	"title" : "TEST NAME",
	"author" : "author_id",
	"price" : 1,
	"ISBN" : "1",
	"language" : "TR",
	"number_of_pages" : 1,
	"publisher" : "TEST PUBLISHER NAME"
}

//SAMPLE RESPONSE

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

2. CREATE AUTHOR: POST /api/authors
```
{
	"name" : "TEST NAME",
	"country" : "TEST COUNTRY",
	"birth_date" : "2019-01-22 08:55:59"
}

//SAMPLE RESPONSE

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

3. UPDATE AUTHOR: PATCH /api/authors/:authorId
```
{
	"name" : "TEST NAME2",
	"country" : "TEST COUNTRY2",
	"birth_date" : "2019-01-22 08:55:59"
}

//SAMPLE RESPONSE

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