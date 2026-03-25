# CRM mapping contract (vendor-agnostic)

## objective
Support any CRM by mapping source fields into a common analysis contract.

## required entities
- opportunities
- accounts
- owners/users
- activities

## minimal required fields
### opportunities
- id
- account_id
- owner_id
- stage
- amount
- created_at
- updated_at
- close_date
- last_activity_at

### accounts
- id
- name
- segment (optional but recommended)

### owners
- id
- name
- manager_id (optional)

### activities
- id
- opportunity_id
- activity_type
- activity_time

## implementation pattern
1. keep raw CRM schema untouched
2. create view/mapping layer for agent contract
3. run deterministic metrics on mapped contract

## result
Agent runtime remains CRM-agnostic while preserving deterministic output quality.
