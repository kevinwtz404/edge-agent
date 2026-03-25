# connector setup: Supabase mirror

## goal
Use a Supabase mirror as the pilot data source instead of direct CRM API access.

## why
- faster pilot integration
- clear read-only SQL access model
- CRM-agnostic approach

## steps
1. Create/read-only database role for agent access.
2. Identify schemas/tables that contain revenue pipeline data.
3. Map required fields to the agent data contract.
4. Add deny-zones for restricted schemas/fields.
5. Add Supabase connection values to `.env`.

## how to discover table names
Run in SQL editor:
```sql
select table_schema, table_name
from information_schema.tables
where table_type = 'BASE TABLE'
order by table_schema, table_name;
```

## recommended contract fields
- opportunity_id
- account_id
- owner_id
- stage
- amount
- close_date
- last_activity_at
- created_at
- updated_at
- loss_reason (if available)

## notes
This approach works with any CRM as long as the mirror maps equivalent fields.
