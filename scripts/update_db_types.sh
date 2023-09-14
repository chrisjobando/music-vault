#!/bin/sh

source .env

echo "Updating database types..."
bunx supabase gen types typescript --project-id $PUBLIC_DATABASE_ID --schema public > src/DatabaseDefinitions.ts
echo "Done!"