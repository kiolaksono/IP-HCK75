# Rental Vehicle API Documentation

[Previous sections remain unchanged]

## Endpoints:

List of available endpoints:

- `POST /register`
- `POST /login`
- `POST /auth/google`

Routes that need authentication:
- `GET /customers`
- `GET /customers/profile`

[Other endpoints remain unchanged]

## 1. POST /register

Request:
- body:
```json
{
  "fullName": "string",
  "email": "string",
  "password": "string",
  "avatar": "string"
}
```

_Response (201 - Created)_
```json
{
  "message": "New account with email <email> has created"
}
```

_Response (400 - Bad Request)_
```json
{
  "message": "Email is required"
}
OR
{
  "message": "Password is required"
}
```

## 2. POST /login

Request:
- body:
```json
{
  "email": "string",
  "password": "string"
}
```

_Response (200 - OK)_
```json
{
  "accessToken": "string"
}
```

_Response (400 - Bad Request)_
```json
{
  "message": "Email is required"
}
OR
{
  "message": "Password is required"
}
```

_Response (401 - Unauthorized)_
```json
{
  "message": "Invalid username/password"
}
```

## 3. POST /auth/google

Request:
- body:
```json
{
  "googleToken": "string"
}
```

_Response (200 - OK)_ or _(201 - Created)_
```json
{
  "access_token": "string"
}
```

_Response (500 - Internal Server Error)_
```json
{
  "message": "Internal server error"
}
```

## 4. GET /customers

Description: Get all customers (requires authentication)

Request:
- headers:
```json
{
  "Authorization": "Bearer <access_token>"
}
```

_Response (200 - OK)_
```json
[
  {
    "id": "integer",
    "fullName": "string",
    "email": "string",
    "avatar": "string",
    "createdAt": "date",
    "updatedAt": "date"
  },
  ...
]
```

## 5. GET /customers/profile

Description: Get the profile of the currently logged-in customer

Request:
- headers:
```json
{
  "Authorization": "Bearer <access_token>"
}
```

_Response (200 - OK)_
```json
{
  "id": "integer",
  "fullName": "string",
  "email": "string",
  "avatar": "string",
  "createdAt": "date",
  "updatedAt": "date"
}
```

_Response (404 - Not Found)_
```json
{
  "message": "Customer not found"
}
```

[Other sections remain unchanged]

## Global Error

_Response (400 - Bad Request)_
```json
{
  "message": "Email is required"
}
OR
{
  "message": "Password is required"
}
```

_Response (401 - Unauthorized)_
```json
{
  "message": "Invalid Token"
}
OR
{
  "message": "Invalid username/password"
}
```

_Response (404 - Not Found)_
```json
{
  "message": "Customer not found"
}
```

_Response (500 - Internal Server Error)_
```json
{
  "message": "Internal Server Error"
}
```
