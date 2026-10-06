import { site } from './site.config'

export type ContactRequest = keyof typeof site.contact.requests

// Lien e-mail d'un type de demande, avec objet et corps préremplis.
export function mailtoFor(request: ContactRequest): string {
  const { subject, body } = site.contact.requests[request]
  const query = `subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  return `mailto:${site.contact.email}?${query}`
}
