import { json } from '@tanstack/react-start'

const API_KEY = process.env.AIRTABLE_API_KEY
const BASE_ID = process.env.VITE_AIRTABLE_BASE_ID
const TABLE_NAME = process.env.VITE_AIRTABLE_TABLE_NAME

export interface FormSubmission {
  name: string
  phone: string
  email?: string
  course: string
  method: string
  message?: string
}

export async function submitToAirtable(data: FormSubmission) {
  if (!API_KEY || !BASE_ID || !TABLE_NAME) {
    throw new Error('Missing Airtable configuration')
  }

  const url = `https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}`

  const payload = {
    records: [
      {
        fields: {
          Name: data.name,
          Phone: data.phone,
          Email: data.email || '',
          Course: data.course,
          'Preferred Contact': data.method,
          Message: data.message || '',
          'Submission Date': new Date().toISOString(),
        },
      },
    ],
  }

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.error?.message || 'Failed to submit form to Airtable')
  }

  return response.json()
}
