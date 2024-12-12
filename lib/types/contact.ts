export interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  city: string
  state: string
  zipCode: string
  businessName: string
}

export type ContactFormErrors = Partial<Record<keyof ContactFormData, string>>