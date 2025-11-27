"use server"

import { Resend } from "resend"

interface ContactFormData {
  nombre: string
  telefono: string
  email: string
  servicio: string
  mensaje: string
}

export async function submitContactForm(formData: FormData): Promise<{ success: boolean; error?: string }> {
  try {
    const data: ContactFormData = {
      nombre: formData.get("nombre") as string,
      telefono: formData.get("telefono") as string,
      email: formData.get("email") as string,
      servicio: formData.get("servicio") as string,
      mensaje: formData.get("mensaje") as string,
    }

    // Validate required fields
    if (!data.nombre || !data.telefono || !data.email) {
      return { success: false, error: "Por favor complete todos los campos requeridos." }
    }

    const resendApiKey = process.env.RESEND_API_KEY

    if (!resendApiKey) {
      console.error("RESEND_API_KEY is not configured")
      return { success: false, error: "El servicio de correo no está configurado." }
    }

    const resend = new Resend(resendApiKey)
    
    // Send notification email to ASEPRE
    await resend.emails.send({
      from: "ASEPRE Website <onboarding@resend.dev>", // Use your verified domain: contacto@asepre.com
      to: "asepre.srl@gmail.com",
      replyTo: data.email,
      subject: `Nueva Solicitud de Cotización - ${data.servicio}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #8B0000, #1a1a1a); padding: 30px; text-align: center;">
            <h1 style="color: #D4AF37; margin: 0;">ASEPRE</h1>
            <p style="color: #ffffff; margin: 10px 0 0;">Nueva Solicitud de Cotización</p>
          </div>
          
          <div style="padding: 30px; background: #f9f9f9;">
            <h2 style="color: #1a1a1a; border-bottom: 2px solid #D4AF37; padding-bottom: 10px;">
              Datos del Cliente
            </h2>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #666;">Nombre:</td>
                <td style="padding: 10px 0; color: #1a1a1a;">${data.nombre}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #666;">Teléfono:</td>
                <td style="padding: 10px 0; color: #1a1a1a;">
                  <a href="tel:${data.telefono}" style="color: #8B0000;">${data.telefono}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #666;">Email:</td>
                <td style="padding: 10px 0; color: #1a1a1a;">
                  <a href="mailto:${data.email}" style="color: #8B0000;">${data.email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; font-weight: bold; color: #666;">Servicio:</td>
                <td style="padding: 10px 0; color: #1a1a1a;">${data.servicio}</td>
              </tr>
            </table>
            
            <h3 style="color: #1a1a1a; margin-top: 20px;">Mensaje:</h3>
            <div style="background: #ffffff; padding: 15px; border-left: 4px solid #D4AF37; color: #333;">
              ${data.mensaje || "Sin mensaje adicional"}
            </div>
          </div>
          
          <div style="background: #1a1a1a; padding: 20px; text-align: center;">
            <p style="color: #888; margin: 0; font-size: 12px;">
              Este mensaje fue enviado desde el formulario de contacto de asepre.com
            </p>
          </div>
        </div>
      `,
    })

    // Send confirmation email to the customer
    await resend.emails.send({
      from: "ASEPRE <onboarding@resend.dev>", // Use your verified domain: contacto@asepre.com
      to: data.email,
      subject: "Hemos recibido su solicitud - ASEPRE",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #8B0000, #1a1a1a); padding: 30px; text-align: center;">
            <h1 style="color: #D4AF37; margin: 0;">ASEPRE</h1>
            <p style="color: #ffffff; margin: 10px 0 0;">Servicios de Seguridad Privada</p>
          </div>
          
          <div style="padding: 30px; background: #f9f9f9;">
            <h2 style="color: #1a1a1a;">Estimado/a ${data.nombre},</h2>
            
            <p style="color: #333; line-height: 1.6;">
              Gracias por contactar a ASEPRE. Hemos recibido su solicitud de cotización 
              para nuestro servicio de <strong>${data.servicio}</strong>.
            </p>
            
            <p style="color: #333; line-height: 1.6;">
              Uno de nuestros asesores se comunicará con usted a la brevedad posible 
              para brindarle toda la información que necesita.
            </p>
            
            <div style="background: #8B0000; color: white; padding: 20px; text-align: center; margin: 20px 0;">
              <p style="margin: 0; font-size: 14px;">¿Necesita atención inmediata?</p>
              <p style="margin: 10px 0 0; font-size: 18px; font-weight: bold;">
                Llámenos al: (809) 502-8501
              </p>
            </div>
            
            <p style="color: #666; font-size: 14px;">
              Atentamente,<br>
              <strong style="color: #1a1a1a;">Equipo ASEPRE</strong>
            </p>
          </div>
          
          <div style="background: #1a1a1a; padding: 20px; text-align: center;">
            <p style="color: #D4AF37; margin: 0 0 10px; font-weight: bold;">
              "Protegiendo lo que más importa desde 2008"
            </p>
            <p style="color: #888; margin: 0; font-size: 12px;">
              Santo Domingo, República Dominicana
            </p>
          </div>
        </div>
      `,
    })

    return { success: true }
  } catch (error) {
    console.error("Contact form error:", error)
    return { success: false, error: "Error al enviar el mensaje. Por favor intente nuevamente." }
  }
}

// Helper to generate WhatsApp message URL
export async function generateWhatsAppUrl(data: {
  nombre: string
  telefono: string
  email: string
  servicio: string
  mensaje: string
}): Promise<string> {
  const phoneNumber = "18095028501" // ASEPRE phone number
  const message = `*Nueva Solicitud de Cotización*

*Nombre:* ${data.nombre}
*Teléfono:* ${data.telefono}
*Email:* ${data.email}
*Servicio:* ${data.servicio}
*Mensaje:* ${data.mensaje || "N/A"}`

  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
}
