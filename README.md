# Books-api
A simple api app built using node.js, Typescript, mongoDB and Docker.

## Api Documentation Usage
To show api documentation
- Go to **./api-documentation/books-api-documentation** folder from terminal
- Type  ``` npx serve -p 5000 ``` command
- Open browser and visit ``` http://localhost:5000/ ```

## Application Usage with Docker

to create image inside project folder run ``` docker build --tag books-rest-api .``` command. ( do not forget to put ' **.** ' (the dot at the end of the command). Then to run that image ``` docker run -p 3000:3000 books-rest-api ``` command. Then container will be up on ``` http://localhost:3000/ ```

## Application Usage

to start application without Docker, inside project folder install packages with ``` npm install ``` command then start the application with ```npm run dev ``` command.