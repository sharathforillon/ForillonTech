import sgMail from '@sendgrid/mail';
import { type PartnershipInquiry } from "../shared/schema";

if (!process.env.SENDGRID_API_KEY) {
  console.warn("SENDGRID_API_KEY environment variable is not set");
} else {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

export async function sendPartnershipInquiryViaSendGrid(inquiry: PartnershipInquiry): Promise<boolean> {
  if (!process.env.SENDGRID_API_KEY) {
    console.error('SENDGRID_API_KEY environment variable is not set');
    return false;
  }

  try {
    const msg = {
      to: 'sreddy@forillontech.com',
      from: 'noreply@forillontech.com', // This should be a verified sender
      subject: `Partnership Inquiry from ${inquiry.companyName}`,
      html: `
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
      <div style="color: #374151; line-height: 1.6; white-space: pre-line;">${inquiry.description || 'No specific details provided'}</div>
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
      `,
      text: `
New Partnership Inquiry from ${inquiry.companyName}

Contact: ${inquiry.firstName} ${inquiry.lastName} (${inquiry.jobTitle})
Email: ${inquiry.email}
Phone: ${inquiry.phone}

Company: ${inquiry.companyName}
Industry: ${inquiry.industry}
Company Size: ${inquiry.companySize}
Website: ${inquiry.website || 'Not provided'}

Partnership Types: ${inquiry.partnershipType.join(', ')}
Budget: ${inquiry.projectBudget}
Timeline: ${inquiry.timeline}

Description:
${inquiry.description || 'No specific details provided'}

---
This inquiry was submitted through the Forillon Technologies partnership form.
Reply directly to: ${inquiry.email}
      `
    };

    await sgMail.send(msg);
    console.log('✅ SendGrid email sent successfully');
    return true;

  } catch (error: any) {
    console.error('SendGrid error:', error);
    return false;
  }
}