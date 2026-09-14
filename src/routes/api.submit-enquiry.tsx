import { submitEnquiryToSupabase } from '@/server/supabase'

export async function POST({ request }: { request: Request }) {
  try {
    const data = await request.json()

    const result = await submitEnquiryToSupabase({
      name: data.name,
      phone: data.phone,
      email: data.email,
      course: data.course,
      method: data.method,
      message: data.message,
    })

    return new Response(JSON.stringify({ success: true, data: result }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to submit enquiry'
    return new Response(JSON.stringify({ success: false, error: message }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}
