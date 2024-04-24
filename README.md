[this project is from](https://github.com/wkrzywiec/kanban-board.git/)
# Kanban Board Application

This repository contains the source code for a simple implementation of a Kanban Board application. It consists of three separate Docker containers holding:

- PostgreSQL database
- Java backend (Spring Boot)
- Angular frontend

## Overview

A Kanban Board is a tool used to visualize and manage work, originating from the Toyota automotive industry and now widely used in software development. The board typically consists of columns representing different stages of work, such as "To Do," "In Progress," and "Done," with tasks represented as cards within each column.

### Functionality

The application allows users to:

- Create, update, and delete Kanban boards
- Create, update, and delete tasks within each Kanban board
- Visualize tasks on the Kanban board and move them between columns to represent their status

## How to Run

To run the application, you need to have Docker and Docker Compose installed on your system.

### Prerequisites

- [Docker Installation Guide](https://docs.docker.com/get-docker/)
- [Docker Compose Installation Guide](https://docs.docker.com/compose/install/)

### Running the Application

Navigate to the root directory of the project containing the `docker-compose.yml` file and run the following command in your terminal:

```bash
docker-compose up -d
```

This command will start the PostgreSQL database, Java backend, and Angular frontend containers. The application will be accessible at `http://localhost:4200`.

To stop the application, run:

```bash
docker-compose down
```

## Project Structure

- `kanban-app`: Contains the Java backend (Spring Boot) code.
- `kanban-ui`: Contains the Angular frontend code.
- `docker-compose.yml`: Docker Compose configuration file for running the entire application stack.
- `README.md`: Project documentation and instructions.

## Resources

- [GitHub Repository](https://github.com/wkrzywiec/kanban-board)
- [Medium Blog Post](https://medium.com/@wkrzywiec/how-to-run-database-backend-and-frontend-in-a-single-click-with-docker-compose-4bcda66f6de)

## Notes

- The PostgreSQL database contains a single schema with tables for Kanban boards and tasks.
- The Java backend exposes REST endpoints for CRUD operations on Kanban boards and tasks. Swagger UI is available at `http://localhost:8080/api/swagger-ui.html`.
- The Angular frontend provides the user interface for interacting with Kanban boards and tasks.

Enjoy organizing your work with the Kanban Board application!
```
