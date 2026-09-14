import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.VITE_SUPABASE_URL
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase configuration')
}

export const supabase = createClient(supabaseUrl, supabaseKey)

export interface FormSubmission {
  name: string
  phone: string
  email?: string
  course: string
  method: string
  message?: string
}

export async function submitEnquiryToSupabase(data: FormSubmission) {
  try {
    const { data: result, error } = await supabase
      .from('enquiries')
      .insert([
        {
          name: data.name,
          phone: data.phone,
          email: data.email || null,
          course: data.course,
          preferred_contact: data.method,
          message: data.message || null,
          created_at: new Date().toISOString(),
          status: 'new',
        },
      ])
      .select()

    if (error) {
      throw new Error(error.message)
    }

    return result
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to submit enquiry'
    throw new Error(message)
  }
}
