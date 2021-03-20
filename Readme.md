# **NODE CAR DEALERSHIP API**

JSON-based API for a fictional cars dealership website.

### Technologies

- Node
  - Async/Await
- Express.JS
- MongoDB
  - Mongoose

### Models

Users:

- firstName
- lastName
- email
- cars (array of cars)

Cars:

- make
- model
- year
- seller

### API Endpoints

|  Method  |     Routes      | Details                                        |
| :------: | :-------------: | :--------------------------------------------- |
|  `GET`   |     /users      | - lists all users                              |
|  `POST`  |     /users      | - create a new user                            |
|  `GET`   |   /users/:id    | - lists particular user                        |
|  `PUT`   |   /users/:id    | - updates particular user (by replacing)       |
| `PATCH`  |   /users/:id    | - updates particular user (by patching fields) |
| `DELETE` |   /users/:id    | - deletes particular user                      |
|  `GET`   | /users/:id/cars | - lists all cars sold by particular user       |
|  `POST`  | /users/:id/cars | - creates a new car for particular user        |
|  `GET`   |      /cars      | - lists all cars                               |
|  `POST`  |      /cars      | - create a new car (global)                    |
|  `GET`   |   /users/:id    | - lists particular car                         |
|  `PUT`   |   /users/:id    | - updates particular car (by replacing)        |
| `PATCH`  |   /users/:id    | - updates particular car (by patching fields)  |
| `DELETE` |    /cars/:id    | - deletes particular user's car                |
