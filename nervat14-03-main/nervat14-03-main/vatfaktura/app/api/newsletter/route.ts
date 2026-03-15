import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json()

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Nieprawidłowy adres email' },
        { status: 400 }
      )
    }

    // W przyszłości można podłączyć tutaj Mailchimp, ConvertKit, itp.
    // Na razie zapisujemy do bazy danych (możesz dodać sobie integrację)
    
    console.log(`[v0] Newsletter signup: ${email}`)

    // Placeholder - zastąp swoim dostawcą email marketingu
    // Przykład z Mailchimp:
    /*
    const mailchimpResponse = await fetch('https://us1.api.mailchimp.com/3.0/lists/YOUR_LIST_ID/members', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.MAILCHIMP_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email_address: email,
        status: 'pending',
      }),
    })

    if (!mailchimpResponse.ok) {
      return NextResponse.json(
        { error: 'Nie udało się zapisać email' },
        { status: 500 }
      )
    }
    */

    return NextResponse.json(
      { message: 'Dziękujemy za subskrypcję!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('[v0] Newsletter error:', error)
    return NextResponse.json(
      { error: 'Błąd serwera' },
      { status: 500 }
    )
  }
}
