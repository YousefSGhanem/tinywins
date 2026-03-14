# Software Architecture


## 1. System Overview

TinyWins is a family-focused web application designed to be used on a shared device such as a tablet or family computer.

Parents manage members, tasks, races, and rewards, while children use the application to view tasks and track their progress.
The system stores all application data in a PostgreSQL database.

![System Overview](docs/architecture/system-overview.png)

<br>


## 2. High Level Architecture

TinyWins follows a classic client-server architecture.

The frontend is implemented as a Vue 3 single-page application running in the browser.

The frontend communicates with a Spring Boot backend through REST APIs over HTTP.  
The backend contains the business logic and persists data in a PostgreSQL database using JPA.

![High Level Architecture](docs/architecture/high-level-architecture.png)

<br>

## 3. Frontend Architecture

The frontend is organized around routing, page-level views, reusable UI components, shared reactive state, model types, and service modules.

The router resolves navigation and renders the matched view.  
Views compose reusable components and coordinate user interaction.

Views read from and update shared state, use model types for typing, and call service modules for backend communication.  
Some components also read shared state directly and use model types for props and internal typing.

The UI framework is provided by Vuetify, which is used by both views and components.

![Frontend Architecture](docs/architecture/frontend-architecture.png)

<br>


## 4. Backend Architecture

The backend follows a layered architecture that separates API handling, business logic, persistence, and object mapping.

The frontend sends HTTP requests to REST controllers, which delegate application use cases to the service layer.  
Services contain the core business logic and use repositories for data access.

Repositories provide data access and interact with the PostgreSQL database using JPA. 
Mappers are used to transform data between DTOs and entities, allowing the API layer to remain separated from the persistence model.

![Backend Architecture](docs/architecture/backend-architecture.png)

<br>

## 5. Domain Model

The domain model is centered around a single family installation.

A family contains multiple members and multiple races.  
Each race contains selected participants and assigned tasks.

Race participants connect members to a race, while tasks are assigned to individual members and contribute points toward the race target.

The model reflects the core business structure of TinyWins and forms the basis of the backend persistence layer.

![Domain Model](docs/architecture/domain-model.png)