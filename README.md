
 ![Screenshot 2025-01-28 154634](https://github.com/user-attachments/assets/0333a82d-668c-47f9-876c-ed43882bd43b)

# Doctor Service API

URL: https://doctorservice-cgghevcrcrdvh5cx.canadacentral-01.azurewebsites.net

---

## Introduction

The **Doctor Service API** provides authentication endpoints for doctor registration and login. It manages doctor credentials and issues JWT tokens for secure access.

## Features

- **Doctor Authentication:** Register and login functionality for doctors
- **JWT Token Generation:** Secure token generation with 1-hour validity
- **Role-based Access:** Specific doctor role assignment

## API Documentation

### Endpoints

#### 1. Login

- **URL:** `/auth/login`
- **Method:** `POST`
- **Description:** Authenticates a doctor and returns a JWT token
- **Request Body:**
  ```json
  {
    "username": "emreutkan",
    "password": "password123"
  }
  ```
- **Responses:**
  - **200 OK**
    ```json
    {
      "message": "Login successful",
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      "role": "doctor"
    }
    ```
  - **404 Not Found**
    ```json
    {
      "message": "Invalid username or password"
    }
    ```

#### 2. Register

- **URL:** `/auth/register`
- **Method:** `POST`
- **Description:** Registers a new doctor in the system
- **Request Body:**
  ```json
  {
    "username": "emreutkan",
    "email": "emreutkan@example.com",
    "password": "password123"
  }
  ```
- **Responses:**
  - **201 Created**
    ```json
    {
      "message": "Doctor registered successfully",
      "role": "doctor"
    }
    ```
  - **500 Error**
    ```json
    {
      "message": "Error registering doctor",
      "error": "ValidationError: email already exists"
    }
    ```

## Security

- Authentication using Bearer JWT tokens
- Tokens valid for 1 hour after login
