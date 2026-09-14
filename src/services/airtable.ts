export interface FormSubmission {
  name: string;
  phone: string;
  email?: string;
  course: string;
  method: string;
  message?: string;
}

export async function submitFormToAirtable(data: FormSubmission) {
  const response = await fetch("/api/submit-enquiry", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Failed to submit form to Airtable");
  }

  return response.json();
}
