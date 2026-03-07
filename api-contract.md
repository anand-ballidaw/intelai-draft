# API Contract

## Overview

This document defines the API contracts for the Pointbreak project. All API endpoints, request/response formats, and behaviors are specified here before implementation.

**Base URL**: `https://api.pointbreak.com/v1`

**API Version**: v1

**Last Updated**: March 8, 2026

## Table of Contents

- [Authentication](#authentication)
- [Common Headers](#common-headers)
- [Response Format](#response-format)
- [Error Handling](#error-handling)
- [Rate Limiting](#rate-limiting)
- [API Endpoints](#api-endpoints)
- [Data Models](#data-models)
- [Webhooks](#webhooks)

---

## Authentication

### Authentication Methods

**Bearer Token Authentication**

All authenticated requests must include a Bearer token in the Authorization header:

```
Authorization: Bearer <access_token>
```

**API Key Authentication** (Optional)

For service-to-service communication:

```
X-API-Key: <api_key>
```

### Token Lifecycle

- **Access Token**: Valid for 1 hour
- **Refresh Token**: Valid for 30 days
- **Token Refresh Endpoint**: `POST /auth/refresh`

---

## Common Headers

### Request Headers

| Header | Required | Description |
|--------|----------|-------------|
| `Content-Type` | Yes | `application/json` for JSON payloads |
| `Authorization` | For protected routes | Bearer token or API key |
| `X-Request-ID` | No | Unique request identifier for tracing |
| `Accept` | No | Response format (default: `application/json`) |
| `User-Agent` | Recommended | Client identification |

### Response Headers

| Header | Description |
|--------|-------------|
| `Content-Type` | Response content type |
| `X-Request-ID` | Echo of request ID or server-generated |
| `X-RateLimit-Limit` | Maximum requests allowed |
| `X-RateLimit-Remaining` | Remaining requests in current window |
| `X-RateLimit-Reset` | Unix timestamp when limit resets |

---

## Response Format

### Success Response

All successful responses follow this structure:

```json
{
  "success": true,
  "data": {
    // Response payload
  },
  "metadata": {
    "timestamp": "2026-03-08T10:30:00Z",
    "request_id": "req_1234567890"
  }
}
```

### Paginated Response

```json
{
  "success": true,
  "data": [
    // Array of items
  ],
  "pagination": {
    "page": 1,
    "page_size": 20,
    "total_pages": 5,
    "total_items": 100,
    "has_next": true,
    "has_previous": false
  },
  "metadata": {
    "timestamp": "2026-03-08T10:30:00Z",
    "request_id": "req_1234567890"
  }
}
```

---

## Error Handling

### Error Response Format

```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Human-readable error message",
    "details": {
      // Additional error context
    }
  },
  "metadata": {
    "timestamp": "2026-03-08T10:30:00Z",
    "request_id": "req_1234567890"
  }
}
```

### HTTP Status Codes

| Code | Meaning | Usage |
|------|---------|-------|
| 200 | OK | Successful GET, PUT, PATCH requests |
| 201 | Created | Successful POST request creating resource |
| 204 | No Content | Successful DELETE request |
| 400 | Bad Request | Invalid request format or parameters |
| 401 | Unauthorized | Missing or invalid authentication |
| 403 | Forbidden | Authenticated but not authorized |
| 404 | Not Found | Resource does not exist |
| 409 | Conflict | Resource conflict (e.g., duplicate) |
| 422 | Unprocessable Entity | Validation errors |
| 429 | Too Many Requests | Rate limit exceeded |
| 500 | Internal Server Error | Server-side error |
| 503 | Service Unavailable | Temporary unavailability |

### Error Codes

| Error Code | HTTP Status | Description |
|------------|-------------|-------------|
| `VALIDATION_ERROR` | 422 | Request validation failed |
| `UNAUTHORIZED` | 401 | Authentication required |
| `FORBIDDEN` | 403 | Insufficient permissions |
| `NOT_FOUND` | 404 | Resource not found |
| `DUPLICATE_RESOURCE` | 409 | Resource already exists |
| `RATE_LIMIT_EXCEEDED` | 429 | Too many requests |
| `INTERNAL_ERROR` | 500 | Server error |

### Validation Error Example

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Request validation failed",
    "details": {
      "fields": {
        "email": ["Invalid email format"],
        "password": ["Password must be at least 8 characters"]
      }
    }
  },
  "metadata": {
    "timestamp": "2026-03-08T10:30:00Z",
    "request_id": "req_1234567890"
  }
}
```

---

## Rate Limiting

**Default Limits**:
- Authenticated requests: 1000 requests per hour
- Unauthenticated requests: 100 requests per hour
- Burst limit: 50 requests per minute

**Rate Limit Headers**:
```
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1709899800
```

**Rate Limit Exceeded Response** (429):
```json
{
  "success": false,
  "error": {
    "code": "RATE_LIMIT_EXCEEDED",
    "message": "Rate limit exceeded. Please try again later.",
    "details": {
      "limit": 1000,
      "reset_at": "2026-03-08T11:30:00Z"
    }
  }
}
```

---

## API Endpoints

### Authentication

#### POST /auth/register

Register a new user account.

**Authentication**: None

**Request Body**:
```json
{
  "email": "user@example.com",
  "username": "johndoe",
  "password": "SecurePassword123!",
  "first_name": "John",
  "last_name": "Doe"
}
```

**Response** (201 Created):
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "usr_1234567890",
      "email": "user@example.com",
      "username": "johndoe",
      "first_name": "John",
      "last_name": "Doe",
      "created_at": "2026-03-08T10:30:00Z"
    },
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "refresh_token": "rt_abcdefghijk",
    "expires_in": 3600
  }
}
```

**Errors**:
- 400: Invalid request format
- 409: Email or username already exists
- 422: Validation errors

---

#### POST /auth/login

Authenticate user and obtain access token.

**Authentication**: None

**Request Body**:
```json
{
  "email": "user@example.com",
  "password": "SecurePassword123!"
}
```

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "usr_1234567890",
      "email": "user@example.com",
      "username": "johndoe"
    },
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "refresh_token": "rt_abcdefghijk",
    "expires_in": 3600
  }
}
```

**Errors**:
- 401: Invalid credentials
- 422: Validation errors

---

#### POST /auth/refresh

Refresh access token using refresh token.

**Authentication**: Required (Refresh Token)

**Request Body**:
```json
{
  "refresh_token": "rt_abcdefghijk"
}
```

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "expires_in": 3600
  }
}
```

**Errors**:
- 401: Invalid or expired refresh token

---

#### POST /auth/logout

Invalidate current access and refresh tokens.

**Authentication**: Required

**Request Body**:
```json
{
  "refresh_token": "rt_abcdefghijk"
}
```

**Response** (204 No Content)

---

### Users

#### GET /users/{user_id}

Retrieve user profile by ID.

**Authentication**: Required

**Path Parameters**:
- `user_id` (string, required): User identifier

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "id": "usr_1234567890",
    "email": "user@example.com",
    "username": "johndoe",
    "first_name": "John",
    "last_name": "Doe",
    "avatar_url": "https://cdn.example.com/avatars/default.png",
    "bio": "Software developer",
    "created_at": "2026-01-15T08:00:00Z",
    "updated_at": "2026-03-08T10:30:00Z"
  }
}
```

**Errors**:
- 401: Unauthorized
- 404: User not found

---

#### PATCH /users/{user_id}

Update user profile.

**Authentication**: Required (Own profile or Admin)

**Path Parameters**:
- `user_id` (string, required): User identifier

**Request Body** (Partial):
```json
{
  "first_name": "John",
  "last_name": "Smith",
  "bio": "Updated bio"
}
```

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "id": "usr_1234567890",
    "email": "user@example.com",
    "username": "johndoe",
    "first_name": "John",
    "last_name": "Smith",
    "bio": "Updated bio",
    "updated_at": "2026-03-08T10:35:00Z"
  }
}
```

**Errors**:
- 401: Unauthorized
- 403: Forbidden (not own profile)
- 404: User not found
- 422: Validation errors

---

#### DELETE /users/{user_id}

Delete user account.

**Authentication**: Required (Own profile or Admin)

**Path Parameters**:
- `user_id` (string, required): User identifier

**Response** (204 No Content)

**Errors**:
- 401: Unauthorized
- 403: Forbidden
- 404: User not found

---

### Resources (Example Entity)

#### GET /resources

List all resources with pagination and filtering.

**Authentication**: Required

**Query Parameters**:
- `page` (integer, optional, default: 1): Page number
- `page_size` (integer, optional, default: 20, max: 100): Items per page
- `sort_by` (string, optional, default: "created_at"): Sort field
- `sort_order` (string, optional, default: "desc"): "asc" or "desc"
- `status` (string, optional): Filter by status
- `search` (string, optional): Search query

**Example Request**:
```
GET /resources?page=1&page_size=20&status=active&sort_by=name&sort_order=asc
```

**Response** (200 OK):
```json
{
  "success": true,
  "data": [
    {
      "id": "res_1234567890",
      "name": "Resource Name",
      "description": "Resource description",
      "status": "active",
      "created_by": "usr_1234567890",
      "created_at": "2026-03-01T10:00:00Z",
      "updated_at": "2026-03-08T10:30:00Z"
    }
  ],
  "pagination": {
    "page": 1,
    "page_size": 20,
    "total_pages": 5,
    "total_items": 100,
    "has_next": true,
    "has_previous": false
  }
}
```

**Errors**:
- 401: Unauthorized
- 422: Invalid query parameters

---

#### POST /resources

Create a new resource.

**Authentication**: Required

**Request Body**:
```json
{
  "name": "New Resource",
  "description": "Description of the resource",
  "status": "active",
  "metadata": {
    "custom_field": "value"
  }
}
```

**Response** (201 Created):
```json
{
  "success": true,
  "data": {
    "id": "res_9876543210",
    "name": "New Resource",
    "description": "Description of the resource",
    "status": "active",
    "metadata": {
      "custom_field": "value"
    },
    "created_by": "usr_1234567890",
    "created_at": "2026-03-08T10:30:00Z",
    "updated_at": "2026-03-08T10:30:00Z"
  }
}
```

**Errors**:
- 401: Unauthorized
- 422: Validation errors

---

#### GET /resources/{resource_id}

Retrieve a specific resource by ID.

**Authentication**: Required

**Path Parameters**:
- `resource_id` (string, required): Resource identifier

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "id": "res_1234567890",
    "name": "Resource Name",
    "description": "Resource description",
    "status": "active",
    "metadata": {
      "custom_field": "value"
    },
    "created_by": "usr_1234567890",
    "created_at": "2026-03-01T10:00:00Z",
    "updated_at": "2026-03-08T10:30:00Z"
  }
}
```

**Errors**:
- 401: Unauthorized
- 404: Resource not found

---

#### PATCH /resources/{resource_id}

Update an existing resource.

**Authentication**: Required (Owner or Admin)

**Path Parameters**:
- `resource_id` (string, required): Resource identifier

**Request Body** (Partial):
```json
{
  "name": "Updated Resource Name",
  "status": "inactive"
}
```

**Response** (200 OK):
```json
{
  "success": true,
  "data": {
    "id": "res_1234567890",
    "name": "Updated Resource Name",
    "description": "Resource description",
    "status": "inactive",
    "updated_at": "2026-03-08T10:35:00Z"
  }
}
```

**Errors**:
- 401: Unauthorized
- 403: Forbidden
- 404: Resource not found
- 422: Validation errors

---

#### DELETE /resources/{resource_id}

Delete a resource.

**Authentication**: Required (Owner or Admin)

**Path Parameters**:
- `resource_id` (string, required): Resource identifier

**Response** (204 No Content)

**Errors**:
- 401: Unauthorized
- 403: Forbidden
- 404: Resource not found

---

## Data Models

### User Model

```json
{
  "id": "string (UUID)",
  "email": "string (email format)",
  "username": "string (3-50 chars, alphanumeric + underscore)",
  "first_name": "string (optional)",
  "last_name": "string (optional)",
  "avatar_url": "string (URL, optional)",
  "bio": "string (max 500 chars, optional)",
  "is_active": "boolean",
  "created_at": "string (ISO 8601 timestamp)",
  "updated_at": "string (ISO 8601 timestamp)"
}
```

### Resource Model

```json
{
  "id": "string (UUID)",
  "name": "string (required, max 255 chars)",
  "description": "string (optional, max 2000 chars)",
  "status": "enum ['active', 'inactive', 'archived']",
  "metadata": "object (optional, JSON)",
  "created_by": "string (user ID)",
  "created_at": "string (ISO 8601 timestamp)",
  "updated_at": "string (ISO 8601 timestamp)"
}
```

### Pagination Model

```json
{
  "page": "integer (min: 1)",
  "page_size": "integer (min: 1, max: 100)",
  "total_pages": "integer",
  "total_items": "integer",
  "has_next": "boolean",
  "has_previous": "boolean"
}
```

---

## Webhooks

### Webhook Configuration

Webhooks allow you to receive real-time notifications for events.

**Webhook URL Requirements**:
- Must use HTTPS
- Must respond with 200-299 status code within 5 seconds
- Retry logic: 3 attempts with exponential backoff

### Webhook Payload Format

```json
{
  "event": "resource.created",
  "timestamp": "2026-03-08T10:30:00Z",
  "webhook_id": "wh_1234567890",
  "data": {
    // Event-specific payload
  }
}
```

### Webhook Events

| Event | Description |
|-------|-------------|
| `user.created` | New user registered |
| `user.updated` | User profile updated |
| `user.deleted` | User account deleted |
| `resource.created` | New resource created |
| `resource.updated` | Resource updated |
| `resource.deleted` | Resource deleted |

### Webhook Security

All webhooks include a signature header for verification:

```
X-Webhook-Signature: sha256=<signature>
```

Verify using HMAC-SHA256 with your webhook secret.

---

## Versioning

**Current Version**: v1

**Version Strategy**: URL-based versioning (`/v1/`, `/v2/`)

**Deprecation Policy**:
- Deprecated versions supported for minimum 6 months
- Advance notice via email and API response headers
- `X-API-Deprecation` header indicates deprecated endpoints

---

## Best Practices

### Request Guidelines

1. **Always include request IDs** for better tracing and debugging
2. **Use pagination** for list endpoints to avoid large responses
3. **Implement retry logic** with exponential backoff for 5xx errors
4. **Cache responses** where appropriate using ETags
5. **Validate input** on the client side before sending requests

### Performance Optimization

- Use field filtering: `GET /resources?fields=id,name` (if supported)
- Leverage conditional requests with `If-None-Match` header
- Batch operations when available
- Use webhooks instead of polling for real-time updates

---

## Testing

### Test Environments

- **Development**: `https://api.dev.pointbreak.com/v1`
- **Staging**: `https://api.staging.pointbreak.com/v1`
- **Production**: `https://api.pointbreak.com/v1`

### Sample API Keys

Development environment test keys:
```
Test User: test_sk_1234567890abcdef
Test Admin: test_sk_admin_abcdef1234567890
```

**Note**: Use test keys only in development environment.

---

## Support

### API Status

Check API status: `https://status.pointbreak.com`

### Contact

- **API Support**: api-support@pointbreak.com
- **Documentation**: https://docs.pointbreak.com
- **Issue Tracker**: https://github.com/pointbreak/api/issues

---

## Changelog

### v1.0.0 (2026-03-08)

- Initial API contract definition
- Authentication endpoints
- User management endpoints
- Resource CRUD operations
- Pagination and filtering support
- Webhook support

---

## Appendix

### Example cURL Requests

**Register User**:
```bash
curl -X POST https://api.pointbreak.com/v1/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "username": "johndoe",
    "password": "SecurePassword123!"
  }'
```

**Get Resource with Authentication**:
```bash
curl -X GET https://api.pointbreak.com/v1/resources/res_123 \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." \
  -H "Content-Type: application/json"
```

**Create Resource**:
```bash
curl -X POST https://api.pointbreak.com/v1/resources \
  -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." \
  -H "Content-Type: application/json" \
  -d '{
    "name": "New Resource",
    "description": "Description",
    "status": "active"
  }'
```
