import sgMail from '@sendgrid/mail';
import { type PartnershipInquiry, type CheckboxLead } from "../shared/schema";

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

export async function sendCheckboxLeadNotificationToAdmin(lead: CheckboxLead): Promise<boolean> {
  if (!process.env.SENDGRID_API_KEY) {
    console.error('SENDGRID_API_KEY environment variable is not set');
    return false;
  }

  try {
    const featuresList = Array.isArray(lead.features) 
      ? lead.features.map(f => `<li style="margin-bottom: 8px; color: #374151;">${f}</li>`).join('') 
      : '<li>No features selected</li>';

    const msg = {
      to: ['sreddy@forillontech.com', 'support@forillontech.com'],
      from: 'noreply@forillontech.com',
      subject: `New Checkbox Demo Request from ${lead.company}`,
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
  <div style="background: linear-gradient(135deg, #0B3C5D 0%, #00A4CC 100%); padding: 30px; text-align: center;">
    <h1 style="color: white; margin: 0; font-size: 24px; font-weight: 600;">
      🎉 New Demo Request
    </h1>
    <p style="color: #bfdbfe; margin: 8px 0 0 0; font-size: 16px;">
      Checkbox Platform - White Label Survey Solution
    </p>
  </div>
  
  <div style="padding: 30px;">
    <div style="background: #f0f9ff; padding: 25px; margin: 20px 0; border-radius: 8px; border-left: 4px solid #00A4CC;">
      <h3 style="color: #0B3C5D; margin: 0 0 15px 0; font-size: 18px; font-weight: 600;">Contact Information</h3>
      <div style="margin-bottom: 12px;"><strong style="color: #374151;">Name:</strong> <span style="color: #6b7280;">${lead.name}</span></div>
      <div style="margin-bottom: 12px;"><strong style="color: #374151;">Company:</strong> <span style="color: #6b7280;">${lead.company}</span></div>
      <div style="margin-bottom: 12px;"><strong style="color: #374151;">Email:</strong> <a href="mailto:${lead.email}" style="color: #00A4CC; text-decoration: none;">${lead.email}</a></div>
      <div><strong style="color: #374151;">Phone:</strong> <span style="color: #6b7280;">${lead.phone}</span></div>
    </div>

    <div style="background: #fefbf0; padding: 25px; margin: 20px 0; border-radius: 8px; border-left: 4px solid #FFB400;">
      <h3 style="color: #d97706; margin: 0 0 15px 0; font-size: 18px; font-weight: 600;">Product Interest</h3>
      <div style="margin-bottom: 12px;">
        <strong style="color: #374151;">Product Type:</strong> 
        <span style="background: #FFB400; color: white; padding: 4px 12px; border-radius: 4px; font-size: 12px; font-weight: 600; margin-left: 8px;">
          ${lead.productType || 'Not specified'}
        </span>
      </div>
    </div>

    <div style="background: #f0fdf4; padding: 25px; margin: 20px 0; border-radius: 8px; border-left: 4px solid #17A673;">
      <h3 style="color: #047857; margin: 0 0 15px 0; font-size: 18px; font-weight: 600;">Selected Features (${Array.isArray(lead.features) ? lead.features.length : 0})</h3>
      <ul style="margin: 0; padding-left: 20px; list-style-type: disc;">
        ${featuresList}
      </ul>
    </div>

    <div style="margin-top: 40px; padding-top: 25px; border-top: 2px solid #e5e7eb; text-align: center;">
      <p style="color: #6b7280; font-size: 14px; margin: 0 0 10px 0;">
        This demo request was submitted through the Checkbox landing page.
      </p>
      <a href="mailto:${lead.email}" style="display: inline-block; background: #00A4CC; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 500; margin-top: 10px;">
        Reply to ${lead.name}
      </a>
    </div>
  </div>
</div>
      `,
      text: `
New Checkbox Demo Request from ${lead.company}

Contact: ${lead.name}
Email: ${lead.email}
Phone: ${lead.phone}
Company: ${lead.company}

Product Type: ${lead.productType || 'Not specified'}

Selected Features (${Array.isArray(lead.features) ? lead.features.length : 0}):
${Array.isArray(lead.features) ? lead.features.map(f => `- ${f}`).join('\n') : 'No features selected'}

---
This demo request was submitted through the Checkbox landing page.
Reply directly to: ${lead.email}
      `
    };

    await sgMail.send(msg);
    console.log('✅ Admin notification email sent successfully');
    return true;

  } catch (error: any) {
    console.error('SendGrid error (admin notification):', error);
    return false;
  }
}

export async function sendCheckboxLeadConfirmation(lead: CheckboxLead): Promise<boolean> {
  if (!process.env.SENDGRID_API_KEY) {
    console.error('SENDGRID_API_KEY environment variable is not set');
    return false;
  }

  try {
    const featuresList = Array.isArray(lead.features) 
      ? lead.features.map(f => `<li style="margin-bottom: 8px; color: #374151;">${f}</li>`).join('') 
      : '<li>No features selected</li>';

    const msg = {
      to: lead.email,
      from: 'noreply@forillontech.com',
      subject: 'Thank You for Requesting a Checkbox Platform Demo',
      html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff;">
  <div style="background: linear-gradient(135deg, #0B3C5D 0%, #00A4CC 100%); padding: 30px; text-align: center;">
    <h1 style="color: white; margin: 0; font-size: 24px; font-weight: 600;">
      Thank You, ${lead.name.split(' ')[0]}!
    </h1>
    <p style="color: #bfdbfe; margin: 8px 0 0 0; font-size: 16px;">
      Your demo request has been received
    </p>
  </div>
  
  <div style="padding: 30px;">
    <p style="color: #374151; font-size: 16px; line-height: 1.6; margin-top: 0;">
      We're excited to show you how Checkbox can transform your survey and research operations. Our team will review your requirements and reach out within <strong>24 hours</strong> to schedule a personalized demo.
    </p>

    <div style="background: #f0f9ff; padding: 25px; margin: 30px 0; border-radius: 8px; border-left: 4px solid #00A4CC;">
      <h3 style="color: #0B3C5D; margin: 0 0 15px 0; font-size: 18px; font-weight: 600;">What Happens Next?</h3>
      <ol style="margin: 0; padding-left: 20px; color: #374151; line-height: 1.8;">
        <li>Our solutions team will review your selected features</li>
        <li>We'll reach out to schedule a personalized demo session</li>
        <li>During the demo, we'll showcase features tailored to ${lead.company}'s needs</li>
        <li>You'll receive a customized proposal and implementation timeline</li>
      </ol>
    </div>

    <div style="background: #f0fdf4; padding: 25px; margin: 20px 0; border-radius: 8px; border-left: 4px solid #17A673;">
      <h3 style="color: #047857; margin: 0 0 15px 0; font-size: 18px; font-weight: 600;">Your Selected Features</h3>
      <p style="color: #374151; margin-bottom: 12px;"><strong>Product:</strong> ${lead.productType || 'Custom Solution'}</p>
      <ul style="margin: 0; padding-left: 20px; list-style-type: disc;">
        ${featuresList}
      </ul>
    </div>

    <div style="background: #fefbf0; padding: 25px; margin: 20px 0; border-radius: 8px; border-left: 4px solid #FFB400;">
      <h3 style="color: #d97706; margin: 0 0 15px 0; font-size: 18px; font-weight: 600;">Why Checkbox?</h3>
      <ul style="margin: 0; padding-left: 20px; color: #374151; line-height: 1.8;">
        <li>🇦🇪 <strong>UAE-Hosted & Data Sovereign</strong> - Full compliance with local regulations</li>
        <li>⚡ <strong>Rapid Deployment</strong> - Go live in weeks, not months</li>
        <li>🎨 <strong>Fully Customizable</strong> - White-labeled to match your brand</li>
        <li>🛡️ <strong>Enterprise Security</strong> - ISO 27001 & GDPR compliant</li>
      </ul>
    </div>

    <div style="margin-top: 40px; padding-top: 25px; border-top: 2px solid #e5e7eb; text-align: center;">
      <p style="color: #6b7280; font-size: 14px; margin: 0 0 15px 0;">
        Have questions in the meantime?
      </p>
      <a href="mailto:sreddy@forillontech.com" style="display: inline-block; background: #00A4CC; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: 500;">
        Contact Us
      </a>
    </div>

    <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; text-align: center;">
      <p style="color: #9ca3af; font-size: 12px; margin: 0;">
        Forillon Technologies × Mindsbourg<br>
        Enterprise Survey & Research Solutions
      </p>
    </div>
  </div>
</div>
      `,
      text: `
Thank You, ${lead.name.split(' ')[0]}!

Your demo request has been received. We're excited to show you how Checkbox can transform your survey and research operations.

Our team will review your requirements and reach out within 24 hours to schedule a personalized demo.

What Happens Next?
1. Our solutions team will review your selected features
2. We'll reach out to schedule a personalized demo session
3. During the demo, we'll showcase features tailored to ${lead.company}'s needs
4. You'll receive a customized proposal and implementation timeline

Your Selected Features:
Product: ${lead.productType || 'Custom Solution'}
${Array.isArray(lead.features) ? lead.features.map(f => `- ${f}`).join('\n') : 'No features selected'}

Why Checkbox?
- UAE-Hosted & Data Sovereign - Full compliance with local regulations
- Rapid Deployment - Go live in weeks, not months
- Fully Customizable - White-labeled to match your brand
- Enterprise Security - ISO 27001 & GDPR compliant

Have questions? Contact us at sreddy@forillontech.com

---
Forillon Technologies × Mindsbourg
Enterprise Survey & Research Solutions
      `
    };

    await sgMail.send(msg);
    console.log('✅ Lead confirmation email sent successfully');
    return true;

  } catch (error: any) {
    console.error('SendGrid error (lead confirmation):', error);
    return false;
  }
}