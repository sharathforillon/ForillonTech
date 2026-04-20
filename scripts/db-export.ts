import { exec } from 'child_process';
import { promisify } from 'util';
import * as fs from 'fs';
import * as path from 'path';

const execAsync = promisify(exec);

async function exportDatabase() {
  try {
    const exportDir = path.join(process.cwd(), 'database-exports');
    
    // Create exports directory if it doesn't exist
    if (!fs.existsSync(exportDir)) {
      fs.mkdirSync(exportDir, { recursive: true });
    }

    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const schemaFile = path.join(exportDir, `forillon-schema-${timestamp}.sql`);
    const dataFile = path.join(exportDir, `forillon-data-${timestamp}.sql`);
    const fullFile = path.join(exportDir, `forillon-full-${timestamp}.sql`);

    console.log('🗄️  Exporting Forillon Technologies database...');

    // Export schema only
    await execAsync(`pg_dump --schema-only --no-owner --no-privileges "${process.env.DATABASE_URL}" > "${schemaFile}"`);
    console.log(`✅ Schema exported to: ${schemaFile}`);

    // Export data only
    await execAsync(`pg_dump --data-only --no-owner --no-privileges "${process.env.DATABASE_URL}" > "${dataFile}"`);
    console.log(`✅ Data exported to: ${dataFile}`);

    // Export complete database
    await execAsync(`pg_dump --no-owner --no-privileges "${process.env.DATABASE_URL}" > "${fullFile}"`);
    console.log(`✅ Full database exported to: ${fullFile}`);

    // Create a README file with export info
    const readmeContent = `# Forillon Technologies Database Export
Generated on: ${new Date().toISOString()}

## Files included:
- forillon-schema-${timestamp}.sql - Database schema only
- forillon-data-${timestamp}.sql - Data only
- forillon-full-${timestamp}.sql - Complete database (schema + data)

## To restore:
\`\`\`bash
# Create new database
createdb forillon_tech_backup

# Restore schema
psql -d forillon_tech_backup -f forillon-schema-${timestamp}.sql

# Restore data
psql -d forillon_tech_backup -f forillon-data-${timestamp}.sql

# Or restore complete database
psql -d forillon_tech_backup -f forillon-full-${timestamp}.sql
\`\`\`

## Database Info:
- Project: Forillon Technologies Website
- Environment: ${process.env.NODE_ENV || 'development'}
- Export Date: ${new Date().toLocaleDateString()}
- Export Time: ${new Date().toLocaleTimeString()}
`;

    fs.writeFileSync(path.join(exportDir, 'README.md'), readmeContent);
    console.log(`📄 README created with restoration instructions`);

    console.log('\n🎉 Database export completed successfully!');
    console.log(`📁 Files available in: ${exportDir}`);
    
    return {
      exportDir,
      files: [schemaFile, dataFile, fullFile, path.join(exportDir, 'README.md')]
    };

  } catch (error) {
    console.error('❌ Database export failed:', error);
    throw error;
  }
}

// Run export if called directly
if (process.argv[1] === new URL(import.meta.url).pathname) {
  exportDatabase().catch(console.error);
}

export { exportDatabase };