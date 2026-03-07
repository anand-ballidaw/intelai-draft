# Data Model

## Overview

This document describes the data model and database schema for the Pointbreak project.

## Database Architecture

**Database Type**: [PostgreSQL / MySQL / MongoDB / etc.]

**ORM/ODM**: [SQLAlchemy / Prisma / Mongoose / etc.]

## Entity Relationship Diagram

```
[Add ERD diagram here]
```

## Core Entities

### Entity 1: User

**Description**: Represents a user in the system.

**Table/Collection Name**: `users`

| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| id | UUID/Integer | PRIMARY KEY | Unique identifier |
| email | String(255) | UNIQUE, NOT NULL | User email address |
| username | String(100) | UNIQUE, NOT NULL | User display name |
| password_hash | String(255) | NOT NULL | Hashed password |
| created_at | Timestamp | NOT NULL | Account creation date |
| updated_at | Timestamp | NOT NULL | Last update date |
| is_active | Boolean | DEFAULT TRUE | Account status |

**Relationships**:
- One-to-Many with `posts`
- Many-to-Many with `roles`

**Indexes**:
- `idx_users_email` on `email`
- `idx_users_username` on `username`

---

### Entity 2: [Entity Name]

**Description**: Brief description of this entity.

**Table/Collection Name**: `table_name`

| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| id | UUID/Integer | PRIMARY KEY | Unique identifier |
| name | String(255) | NOT NULL | Entity name |
| description | Text | NULLABLE | Description |
| created_at | Timestamp | NOT NULL | Creation date |
| updated_at | Timestamp | NOT NULL | Last update date |

**Relationships**:
- [Relationship type] with `[other_entity]`

**Indexes**:
- `idx_[table]_[field]` on `[field]`

---

### Entity 3: [Entity Name]

**Description**: Brief description of this entity.

**Table/Collection Name**: `table_name`

| Field | Type | Constraints | Description |
|-------|------|-------------|-------------|
| id | UUID/Integer | PRIMARY KEY | Unique identifier |
| foreign_key_id | UUID/Integer | FOREIGN KEY, NOT NULL | Reference to parent |
| status | Enum | NOT NULL | Status value |
| data | JSON/JSONB | NULLABLE | Additional data |
| created_at | Timestamp | NOT NULL | Creation date |
| updated_at | Timestamp | NOT NULL | Last update date |

**Relationships**:
- [Relationship type] with `[other_entity]`

**Indexes**:
- `idx_[table]_[field]` on `[field]`

---

## Relationships

### One-to-Many

- **User → Posts**: A user can have multiple posts
- **Category → Items**: A category contains multiple items

### Many-to-Many

- **Users ↔ Roles**: Users can have multiple roles, roles can be assigned to multiple users
- **Posts ↔ Tags**: Posts can have multiple tags, tags can be on multiple posts

### One-to-One

- **User → Profile**: Each user has one profile

## Data Types Reference

### Common Field Types

| Type | Database Type | Description | Example |
|------|---------------|-------------|---------|
| UUID | UUID/CHAR(36) | Unique identifier | `550e8400-e29b-41d4-a716-446655440000` |
| String | VARCHAR | Variable-length text | `"Hello World"` |
| Text | TEXT | Long-form text | `"Long description..."` |
| Integer | INTEGER | Whole numbers | `42` |
| Float | FLOAT/DECIMAL | Decimal numbers | `3.14159` |
| Boolean | BOOLEAN | True/false values | `true` / `false` |
| Timestamp | TIMESTAMP | Date and time | `2026-03-08T10:30:00Z` |
| JSON | JSON/JSONB | Structured data | `{"key": "value"}` |
| Enum | ENUM/VARCHAR | Predefined values | `"active"` / `"inactive"` |

### Enumerations

#### UserStatus
- `active`: User account is active
- `inactive`: User account is inactive
- `suspended`: User account is suspended
- `deleted`: User account is marked for deletion

#### Role
- `admin`: System administrator
- `user`: Regular user
- `moderator`: Content moderator

## Constraints and Validation

### Business Rules

1. **Email Uniqueness**: Each email address must be unique across all users
2. **Username Format**: Usernames must be 3-50 characters, alphanumeric and underscores only
3. **Cascading Deletes**: When a user is deleted, all associated posts are also deleted
4. **Soft Deletes**: Use `deleted_at` timestamp instead of hard deletes for audit trail

### Database Constraints

- Foreign key constraints enforce referential integrity
- Check constraints validate data ranges and formats
- Unique constraints prevent duplicate entries
- NOT NULL constraints ensure required fields

## Indexes and Performance

### Primary Indexes

All tables have a primary key index on the `id` field.

### Secondary Indexes

| Table | Index Name | Columns | Purpose |
|-------|------------|---------|---------|
| users | idx_users_email | email | Fast email lookup |
| users | idx_users_username | username | Fast username lookup |
| posts | idx_posts_user_id | user_id | User's posts query |
| posts | idx_posts_created_at | created_at | Chronological sorting |

### Composite Indexes

- `idx_posts_user_status` on (`user_id`, `status`) for filtered user queries

## Migrations

### Migration Strategy

- Use incremental migrations for schema changes
- Never modify existing migrations
- Always include rollback steps
- Test migrations on staging before production

### Migration Files Location

`/migrations/` or as configured in ORM

## Data Lifecycle

### Creation
- Timestamps: `created_at` is set automatically on insert
- Default values are applied as defined in schema

### Updates
- Timestamps: `updated_at` is updated automatically on modification
- Version tracking (if applicable)

### Deletion
- **Soft Delete**: Mark records with `deleted_at` timestamp
- **Hard Delete**: Permanently remove records (use with caution)
- Cascade rules apply to related entities

## Sample Queries

### Get User with Posts

```sql
SELECT u.*, p.*
FROM users u
LEFT JOIN posts p ON u.id = p.user_id
WHERE u.id = ?;
```

### Create New Record

```sql
INSERT INTO users (id, email, username, password_hash, created_at, updated_at)
VALUES (?, ?, ?, ?, NOW(), NOW());
```

### Update Record

```sql
UPDATE users
SET email = ?, updated_at = NOW()
WHERE id = ?;
```

## Data Seeding

### Development Data

Location: `/seeds/dev/`

Purpose: Sample data for local development

### Test Data

Location: `/seeds/test/`

Purpose: Consistent data for automated tests

## Backup and Recovery

- **Backup Frequency**: [Daily/Weekly]
- **Retention Policy**: [30 days/90 days]
- **Recovery Time Objective (RTO)**: [Target time]
- **Recovery Point Objective (RPO)**: [Acceptable data loss]

## Related Documentation

- [API Documentation](api.md)
- [Architecture Overview](architecture.md)
- [Database Setup Guide](setup.md)
