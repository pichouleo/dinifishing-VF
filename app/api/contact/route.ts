import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { from_name, from_email, phone, subject, stay_type, persons, period, message } = body

    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'api-key': process.env.BREVO_API_KEY!,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        sender: { name: 'Dini Fishing Website', email: 'leoinfluenceagency@gmail.com' },
        to: [{ email: 'leoinfluenceagency@gmail.com', name: 'Dini Fishing' }],
        replyTo: { email: from_email, name: from_name },
        subject: `Nouvelle demande - ${subject}`,
        htmlContent: `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f5f5f5; padding: 20px;">
    <div style="background: #0A0A0A; padding: 24px; text-align: center; margin-bottom: 0;">
      <h1 style="color: #C0392B; font-size: 28px; margin: 0; letter-spacing: 4px;">DINI FISHING</h1>
      <p style="color: #F5F0E8; margin: 4px 0 0; font-size: 12px; letter-spacing: 2px;">NOUVELLE DEMANDE DE CONTACT</p>
    </div>
    <div style="background: #ffffff; padding: 32px;">
      <table style="width: 100%; border-collapse: collapse;">
        <tr style="border-bottom: 1px solid #eee;">
          <td style="padding: 12px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; width: 40%;">Nom</td>
          <td style="padding: 12px 0; color: #0A0A0A; font-weight: bold;">${from_name}</td>
        </tr>
        <tr style="border-bottom: 1px solid #eee;">
          <td style="padding: 12px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Email</td>
          <td style="padding: 12px 0; color: #C0392B;">${from_email}</td>
        </tr>
        <tr style="border-bottom: 1px solid #eee;">
          <td style="padding: 12px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Téléphone</td>
          <td style="padding: 12px 0; color: #0A0A0A;">${phone || 'Non renseigné'}</td>
        </tr>
        <tr style="border-bottom: 1px solid #eee;">
          <td style="padding: 12px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Objet</td>
          <td style="padding: 12px 0; color: #0A0A0A;">${subject}</td>
        </tr>
        <tr style="border-bottom: 1px solid #eee;">
          <td style="padding: 12px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Type de séjour</td>
          <td style="padding: 12px 0; color: #0A0A0A;">${stay_type || 'Non renseigné'}</td>
        </tr>
        <tr style="border-bottom: 1px solid #eee;">
          <td style="padding: 12px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Personnes</td>
          <td style="padding: 12px 0; color: #0A0A0A;">${persons || 'Non renseigné'}</td>
        </tr>
        <tr style="border-bottom: 1px solid #eee;">
          <td style="padding: 12px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Période</td>
          <td style="padding: 12px 0; color: #0A0A0A;">${period || 'Non renseigné'}</td>
        </tr>
      </table>
      <div style="margin-top: 24px; background: #f9f9f9; border-left: 3px solid #C0392B; padding: 16px;">
        <p style="color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px;">Message</p>
        <p style="color: #0A0A0A; margin: 0; line-height: 1.6;">${message}</p>
      </div>
      <div style="margin-top: 24px; text-align: center;">
        <a href="mailto:${from_email}" style="background: #C0392B; color: white; padding: 12px 32px; text-decoration: none; font-weight: bold; letter-spacing: 2px; font-size: 13px;">RÉPONDRE À ${from_name}</a>
      </div>
    </div>
    <div style="background: #0A0A0A; padding: 16px; text-align: center;">
      <p style="color: #444; font-size: 11px; margin: 0;">Dini Fishing · Valdecaballeros, Extremadura, Espagne</p>
    </div>
  </div>
`,
      }),
    })

    if (!response.ok) {
      const error = await response.json()
      console.error('Brevo error:', error)
      return NextResponse.json({ error: 'Erreur envoi email' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json({ error: 'Erreur serveur' }, { status: 500 })
  }
}