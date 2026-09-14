# Supabase Setup Guide

## Database Table Creation

To set up your Supabase database, you need to create an `enquiries` table with the following columns:

### In Supabase SQL Editor, run:

```sql
CREATE TABLE enquiries (
  id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  course TEXT NOT NULL,
  preferred_contact TEXT NOT NULL,
  message TEXT,
  status TEXT DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index for faster queries
CREATE INDEX idx_enquiries_created_at ON enquiries(created_at DESC);
CREATE INDEX idx_enquiries_status ON enquiries(status);
```

## Table Schema

| Column | Type | Required | Description |
|--------|------|----------|-------------|
| id | BIGINT | ✓ | Auto-generated primary key |
| name | TEXT | ✓ | Student's full name |
| phone | TEXT | ✓ | Contact phone number |
| email | TEXT | | Email address |
| course | TEXT | ✓ | Selected course |
| preferred_contact | TEXT | ✓ | Preferred contact method (Phone Call, WhatsApp, Email) |
| message | TEXT | | Additional message/inquiry details |
| status | TEXT | | Enquiry status (new, contacted, enrolled, etc.) |
| created_at | TIMESTAMP | ✓ | Submission timestamp |
| updated_at | TIMESTAMP | | Last update timestamp |

## Row Level Security (RLS)

For security, enable RLS on the `enquiries` table:

```sql
ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;

-- Allow anonymous users to insert (for form submissions)
CREATE POLICY "Allow anonymous insert"
ON enquiries FOR INSERT
WITH CHECK (true);

-- Allow authenticated users to read all enquiries
CREATE POLICY "Allow authenticated read"
ON enquiries FOR SELECT
TO authenticated
USING (true);

-- Allow authenticated users to update enquiries
CREATE POLICY "Allow authenticated update"
ON enquiries FOR UPDATE
TO authenticated
USING (true);
```

## Environment Variables

Your `.env.local` file already has:
- `VITE_SUPABASE_URL` - Your Supabase project URL
- `VITE_SUPABASE_ANON_KEY` - Your anonymous API key

These are used for form submissions and authentication.

## Testing

1. Navigate to your contact form at `http://localhost:8081#contact`
2. Fill out the enquiry form with test data
3. Submit the form
4. Check your Supabase dashboard → SQL Editor → `SELECT * FROM enquiries` to verify the data was saved

## Authentication (Optional)

To add user authentication for admin access:

1. Enable Email authentication in Supabase
2. Create an admin dashboard to view enquiries
3. Use Supabase Auth to protect the dashboard

For more details, visit: https://supabase.com/docs
