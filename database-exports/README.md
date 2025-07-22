# Forillon Technologies Database Export
Generated on: 2025-07-22T07:20:31.925Z

## Files included:
- forillon-schema-2025-07-22T07-20-25-088Z.sql - Database schema only
- forillon-data-2025-07-22T07-20-25-088Z.sql - Data only
- forillon-full-2025-07-22T07-20-25-088Z.sql - Complete database (schema + data)

## To restore:
```bash
# Create new database
createdb forillon_tech_backup

# Restore schema
psql -d forillon_tech_backup -f forillon-schema-2025-07-22T07-20-25-088Z.sql

# Restore data
psql -d forillon_tech_backup -f forillon-data-2025-07-22T07-20-25-088Z.sql

# Or restore complete database
psql -d forillon_tech_backup -f forillon-full-2025-07-22T07-20-25-088Z.sql
```

## Database Info:
- Project: Forillon Technologies Website
- Environment: development
- Export Date: 7/22/2025
- Export Time: 7:20:31 AM
