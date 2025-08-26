# Airline Booking System (MVC Architecture)

This project is a modular Airline Booking System built using the Model-View-Controller (MVC) architecture. It is designed to be scalable, maintainable, and easy to extend. The system is divided into multiple services, each responsible for a specific domain, such as user management, flight management, booking, and notifications.

## Project Structure

```
Airline-Booking/
├── Api-Gateway/
├── Base-Node-Project-Template/
├── flight/
├── Noti-Api/
```

### 1. Api-Gateway

- **Purpose:** Acts as the entry point for all client requests, handling authentication, routing, and aggregation of responses from other services.
- **Key Folders:**
  - `controllers/` — Handles incoming requests and business logic.
  - `middlewares/` — Authentication and request validation.
  - `models/` — Sequelize models for database tables.
  - `repositories/` — Data access layer.
  - `routes/` — API route definitions.
  - `services/` — Business logic and service orchestration.
  - `utils/` — Helper functions and utilities.

### 2. Base-Node-Project-Template

- **Purpose:** Template for microservices, used here for the Booking Service.
- **Key Folders:**
  - `controllers/` — Booking and info controllers.
  - `models/` — Booking model.
  - `repositories/` — Booking data access.
  - `services/` — Booking business logic.

### 3. flight

- **Purpose:** Manages flight, airplane, airport, and city data.
- **Key Folders:**
  - `controllers/` — Handles flight-related requests.
  - `middlewares/` — Validates and processes flight data.
  - `models/` — Flight, airplane, airport, and city models.
  - `repositories/` — Data access for flight-related entities.
  - `services/` — Flight business logic.

### 4. Noti-Api

- **Purpose:** Handles notifications (e.g., email, SMS) for the system.
- **Key Folders:**
  - `controllers/` — Notification logic.
  - `models/` — Notification models.
  - `services/` — Notification sending logic.

## Features

- User authentication and role management
- Flight search and management
- Booking creation and management
- Notification service for booking updates
- Modular microservices architecture
- Sequelize ORM for database management
- Centralized logging and configuration

## Getting Started

### Prerequisites

- Node.js (v14+ recommended)
- npm or yarn
- A running database (e.g., PostgreSQL, MySQL)

### Installation

1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd Airline-Booking
   ```
2. Install dependencies for each service:
   ```bash
   cd Api-Gateway && npm install
   cd ../Base-Node-Project-Template && npm install
   cd ../flight && npm install
   cd ../Noti-Api && npm install
   ```
3. Configure environment variables and database settings in each service's `config/` folder.

### Running the Services

Start each service individually (in separate terminals):

```bash
cd Api-Gateway && npm start
cd ../Base-Node-Project-Template && npm start
cd ../flight && npm start
cd ../Noti-Api && npm start
```

## Database Migrations & Seeders

- Each service contains its own migrations and seeders under the `migrations/` and `seeders/` folders.
- Use Sequelize CLI or npm scripts to run migrations and seeders as needed.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


---

**Note:** This project follows the MVC pattern and is structured for easy extension and maintenance. Each service is independent and communicates via REST APIs or message queues (if implemented).
