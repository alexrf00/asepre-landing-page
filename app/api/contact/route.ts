import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, phone, email, service, message } = body

    // Validate required fields
    if (!name || !phone || !service) {
      return NextResponse.json({ error: "Nombre, teléfono y tipo de servicio son requeridos" }, { status: 400 })
    }

    // Send email to ASEPRE
    const { data, error } = await resend.emails.send({
      from: "ASEPRE Website <onboarding@resend.dev>",
      to: ["asepre.srl@gmail.com"],
      subject: `Nueva Solicitud de ${service} - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #0a0a0a; color: #ffffff;">
          <div style="text-align: center; padding: 20px 0; border-bottom: 2px solid #d4af37;">
            <h1 style="color: #d4af37; margin: 0;">ASEPRE</h1>
            <p style="color: #a3a3a3; margin: 5px 0 0 0;">Agentes de Seguridad Preventiva</p>
          </div>
          
          <div style="padding: 30px 0;">
            <h2 style="color: #dc2626; margin-bottom: 20px;">Nueva Solicitud de Cotización</h2>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #262626; color: #a3a3a3; width: 140px;">Nombre:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #262626; color: #ffffff; font-weight: bold;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #262626; color: #a3a3a3;">Teléfono:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #262626; color: #ffffff; font-weight: bold;">
                  <a href="tel:${phone}" style="color: #d4af37; text-decoration: none;">${phone}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #262626; color: #a3a3a3;">Email:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #262626; color: #ffffff; font-weight: bold;">
                  ${email ? `<a href="mailto:${email}" style="color: #d4af37; text-decoration: none;">${email}</a>` : "No proporcionado"}
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #262626; color: #a3a3a3;">Servicio:</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #262626; color: #dc2626; font-weight: bold;">${service}</td>
              </tr>
            </table>
            
            ${
              message
                ? `
              <div style="margin-top: 25px;">
                <h3 style="color: #d4af37; margin-bottom: 10px;">Mensaje:</h3>
                <div style="background-color: #171717; padding: 15px; border-radius: 8px; border-left: 3px solid #d4af37;">
                  <p style="color: #e5e5e5; margin: 0; line-height: 1.6;">${message}</p>
                </div>
              </div>
            `
                : ""
            }
          </div>
          
          <div style="padding-top: 20px; border-top: 1px solid #262626; text-align: center;">
            <p style="color: #737373; font-size: 12px; margin: 0;">
              Este mensaje fue enviado desde el formulario de contacto del sitio web de ASEPRE
            </p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json({ error: "Error al enviar el mensaje" }, { status: 500 })
    }

    return NextResponse.json({ success: true, id: data?.id })
  } catch (error) {
    console.error("Server error:", error)
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}
