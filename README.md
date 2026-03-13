# TinyWins

TinyWins is a family-friendly web application that turns household chores into a simple and fun point-based competition.

Children can complete tasks to earn points and compete to reach a predefined goal.  
The winner receives a reward defined by the parents.

The application is intentionally designed to be **simple and easy to use** on a shared device such as a tablet or family computer.

---

# Motivation

Many families struggle to motivate children to help with household tasks.

TinyWins introduces light gamification elements to make chores more engaging and rewarding.  
Instead of forcing tasks, the system encourages children to participate by turning chores into a small game.

Parents remain in full control of tasks, rules, and rewards.

---

# Core Concept

The system is based on three main elements.

### Family

Each installation belongs to exactly **one family**.

- The family name is defined once
- No user accounts
- No login system
- Designed for use on a shared device

### Members

Members represent the people within the family.

Each member has:

- Name
- Avatar
- Color (used for UI elements)
- Role (Parent or Child)

### Race

A race represents a single competition round.

Parents define:

- Participating children
- Target points
- Reward

Children complete tasks to collect points.  
The first participant to reach the target points wins the race.

---

# Features (MVP Scope)

### Member Management

- Create members
- Edit members
- Delete members
- Assign colors for UI representation

### Race Management

- Create a race
- Select participants
- Define target points
- Define a reward

### Task Management

- Create tasks
- Assign tasks to a child
- Define point values (1–5)
- Mark tasks as completed

### Progress System

- Points are calculated automatically
- Progress is displayed for each participant
- Winner detection happens automatically

### Race Completion

- Winner announcement
- Race is marked as finished
- A new race can be started
- Previous races remain stored in history

---

# Non Goals

TinyWins is intentionally designed as a **simple family tool**.

The following features are explicitly **not part of the MVP**:

- Multi-device synchronization
- User accounts or authentication systems
- Complex role management
- Cloud deployment
- Realtime updates
- Advanced statistics

---

# Tech Stack

## Frontend

- Vue 3
- TypeScript
- Vuetify 3
- Vue Router
- Vite

## Backend

- Java 17+
- Spring Boot 3
- Spring Data JPA

## Database

- PostgreSQL

## Infrastructure

- Docker
- Docker Compose

---

# Project Structure

The project follows a **monorepo structure** containing the frontend application, backend API, and infrastructure configuration.

``` bash
tinywins
│
├── frontend
│   ├── src
│   │   ├── components     
│   │   ├── views           
│   │   ├── router          
│   │   ├── models          
│   │   ├── state           
│   │   └── plugins         
│   │
│   ├── index.html
│   └── package.json
│
├── backend
│   ├── src
│   │   └── main
│   │       ├── java        
│   │       └── resources   
│   │
│   └── pom.xml
│
├── docker-compose.yml      
└── README.md

```

# Getting Started

## Prerequisites

Make sure the following tools are installed on your system:

- Node.js
- Java 17 or newer
- Docker
- Docker Compose

---

# Running the Frontend

Navigate to the frontend directory and install dependencies:

```bash

cd frontend
npm install
npm run dev

```

The frontend development server will start at:

http://localhost:5173


# Running the Backend

Navigate to the backend directory and start the Spring Boot application:

```bash

cd backend
./mvnw spring-boot:run
```
The backend API will run at:

http://localhost:8080

# Starting the Database

The PostgreSQL database can be started using Docker Compose.

```bash 

docker compose up -d
```
This will start the PostgreSQL container required by the backend.

# Development Status

**Currently implemented:**

•	Frontend project setup

•	Vue + Vuetify UI structure

•	Member management

•	Parent mode with PIN protection

**Planned next features:**

•	Race system

•	Task management

•	Progress calculation

•	Winner logic

•	Race history


# Learning Goals

TinyWins is developed as a learning and portfolio project to explore and practice:

•	Fullstack web development

•	Vue 3 Composition API

•	TypeScript

•	REST API design

•	Backend development with Spring Boot

•	Data modeling using JPA

•	Containerization with Docker


# License

This project is currently developed for educational and portfolio purposes.