interface EventSchemaProps {
  name: string
  description: string
  startDate: string
  endDate: string
  url: string
}

export function EventSchema({ name, description, startDate, endDate, url }: EventSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: name,
    description: description,
    startDate: startDate,
    endDate: endDate,
    eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
    eventStatus: 'https://schema.org/EventScheduled',
    url: url,
    location: {
      '@type': 'VirtualLocation',
      url: url,
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      suppressHydrationWarning
    />
  )
}
