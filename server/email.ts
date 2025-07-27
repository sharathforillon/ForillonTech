import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";
import { type PartnershipInquiry } from "../shared/schema";

// Initialize MailerSend with API key
const mailerSend = new MailerSend({
  apiKey: process.env.MAILERSEND_API_TOKEN || '',
});

export async function sendPartnershipInquiry(inquiry: PartnershipInquiry): Promise<boolean> {
  if (!process.env.MAILERSEND_API_TOKEN) {
    console.error('MAILERSEND_API_TOKEN environment variable is not set');
    return false;
  }

  try {
    const emailText = `
New Partnership Inquiry from Forillon Technologies Website

Company Information:
- Company Name: ${inquiry.companyName}
- Industry: ${inquiry.industry}
- Company Size: ${inquiry.companySize}
- Website: ${inquiry.website || 'Not provided'}

Contact Information:
- Name: ${inquiry.firstName} ${inquiry.lastName}
- Job Title: ${inquiry.jobTitle}
- Email: ${inquiry.email}
- Phone: ${inquiry.phone}

Partnership Details:
- Partnership Types: ${inquiry.partnershipType.join(', ')}
- Project Budget: ${inquiry.projectBudget}
- Timeline: ${inquiry.timeline}

Project Description:
${inquiry.description}

---
This inquiry was submitted through the Forillon Technologies partnership form.
Reply directly to: ${inquiry.email}
    `.trim();

    const emailHtml = `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
  <div style="background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%); padding: 30px; text-align: center;">
    <h1 style="color: white; margin: 0; font-size: 24px; font-weight: 600;">
      New Partnership Inquiry
    </h1>
    <p style="color: #bfdbfe; margin: 8px 0 0 0; font-size: 16px;">
      Forillon Technologies Partnership Form
    </p>
  </div>
  
  <div style="padding: 30px;">
    <div style="background: #f8fafc; padding: 25px; margin: 20px 0; border-radius: 8px; border-left: 4px solid #3b82f6;">
      <h3 style="color: #1e40af; margin: 0 0 15px 0; font-size: 18px; font-weight: 600;">Company Information</h3>
      <div style="margin-bottom: 12px;"><strong style="color: #374151;">Company:</strong> <span style="color: #6b7280;">${inquiry.companyName}</span></div>
      <div style="margin-bottom: 12px;"><strong style="color: #374151;">Industry:</strong> <span style="color: #6b7280;">${inquiry.industry}</span></div>
      <div style="margin-bottom: 12px;"><strong style="color: #374151;">Company Size:</strong> <span style="color: #6b7280;">${inquiry.companySize}</span></div>
      <div><strong style="color: #374151;">Website:</strong> <span style="color: #6b7280;">${inquiry.website || 'Not provided'}</span></div>
    </div>

    <div style="background: #f0fdf4; padding: 25px; margin: 20px 0; border-radius: 8px; border-left: 4px solid #10b981;">
      <h3 style="color: #047857; margin: 0 0 15px 0; font-size: 18px; font-weight: 600;">Contact Information</h3>
      <div style="margin-bottom: 12px;"><strong style="color: #374151;">Name:</strong> <span style="color: #6b7280;">${inquiry.firstName} ${inquiry.lastName}</span></div>
      <div style="margin-bottom: 12px;"><strong style="color: #374151;">Title:</strong> <span style="color: #6b7280;">${inquiry.jobTitle}</span></div>
      <div style="margin-bottom: 12px;"><strong style="color: #374151;">Email:</strong> <a href="mailto:${inquiry.email}" style="color: #3b82f6; text-decoration: none;">${inquiry.email}</a></div>
      <div><strong style="color: #374151;">Phone:</strong> <span style="color: #6b7280;">${inquiry.phone}</span></div>
    </div>

    <div style="background: #fefbf0; padding: 25px; margin: 20px 0; border-radius: 8px; border-left: 4px solid #f59e0b;">
      <h3 style="color: #d97706; margin: 0 0 15px 0; font-size: 18px; font-weight: 600;">Partnership Details</h3>
      <div style="margin-bottom: 12px;"><strong style="color: #374151;">Partnership Types:</strong> <span style="color: #6b7280;">${inquiry.partnershipType.join(', ')}</span></div>
      <div style="margin-bottom: 12px;"><strong style="color: #374151;">Budget:</strong> <span style="color: #6b7280;">${inquiry.projectBudget}</span></div>
      <div><strong style="color: #374151;">Timeline:</strong> <span style="color: #6b7280;">${inquiry.timeline}</span></div>
    </div>

    <div style="background: #faf5ff; padding: 25px; margin: 20px 0; border-radius: 8px; border-left: 4px solid #8b5cf6;">
      <h3 style="color: #7c3aed; margin: 0 0 15px 0; font-size: 18px; font-weight: 600;">Project Description</h3>
      <div style="color: #374151; line-height: 1.6; white-space: pre-line;">${inquiry.description}</div>
    </div>

    <div style="margin-top: 40px; padding-top: 25px; border-top: 2px solid #e5e7eb; text-align: center;">
      <p style="color: #6b7280; font-size: 14px; margin: 0 0 10px 0;">
        This inquiry was submitted through the Forillon Technologies partnership form.
      </p>
      <a href="mailto:${inquiry.email}" style="display: inline-block; background: #3b82f6; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 500; margin-top: 10px;">
        Reply to ${inquiry.firstName}
      </a>
    </div>
  </div>
</div>
    `.trim();

    // Try different sender configurations for trial account compatibility
    const senderConfigurations = [
      // Use trial domain as per MailerSend documentation
      "info@trial-pxkjn2wn68ol7vyz.mlsender.net",
      "noreply@trial-pxkjn2wn68ol7vyz.mlsender.net",
      "partnership@trial-pxkjn2wn68ol7vyz.mlsender.net"
    ];

    for (let i = 0; i < senderConfigurations.length; i++) {
      const senderEmail = senderConfigurations[i];
      
      try {
        console.log(`Attempting MailerSend SDK configuration ${i + 1}: ${senderEmail}`);

        const sentFrom = new Sender(senderEmail, "Forillon Partnership Team");
        const recipients = [new Recipient("sreddy@forillontech.com", "Siva Reddy")];

        const emailParams = new EmailParams()
          .setFrom(sentFrom)
          .setTo(recipients)
          .setSubject(`Partnership Inquiry from ${inquiry.companyName}`)
          .setText(emailText)
          .setHtml(emailHtml);

        const response = await mailerSend.email.send(emailParams);
        
        console.log(`✅ MailerSend SDK email sent successfully with configuration ${i + 1}:`, {
          response: response,
          senderEmail: senderEmail
        });
        
        return true;

      } catch (configError: any) {
        console.log(`Configuration ${i + 1} failed:`, {
          senderEmail: senderEmail,
          error: configError.message || configError.toString(),
          details: configError.body || configError.response || {}
        });

        // Continue to next configuration
        if (i === senderConfigurations.length - 1) {
          console.error('All MailerSend SDK configurations failed.');
        }
      }
    }

    return false;

  } catch (error: any) {
    console.error('MailerSend SDK error:', {
      message: error.message || error.toString(),
      body: error.body || {},
      response: error.response || {}
    });
    return false;
  }
}