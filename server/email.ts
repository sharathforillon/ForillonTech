import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

if (!process.env.MAILERSEND_API_TOKEN) {
  throw new Error("MAILERSEND_API_TOKEN environment variable must be set");
}

const mailerSend = new MailerSend({
  apiKey: process.env.MAILERSEND_API_TOKEN,
});

interface PartnershipInquiry {
  // Contact Information
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  jobTitle: string;
  
  // Company Information
  companyName: string;
  companySize: string;
  industry: string;
  website?: string;
  
  // Partnership Details
  partnershipType: string[];
  projectBudget: string;
  timeline: string;
  description: string;
}

export async function sendPartnershipInquiry(inquiry: PartnershipInquiry): Promise<boolean> {
  try {
    const emailContent = `
New Partnership Inquiry from ${inquiry.companyName}

CONTACT INFORMATION:
Name: ${inquiry.firstName} ${inquiry.lastName}
Email: ${inquiry.email}
Phone: ${inquiry.phone}
Job Title: ${inquiry.jobTitle}

COMPANY INFORMATION:
Company: ${inquiry.companyName}
Company Size: ${inquiry.companySize}
Industry: ${inquiry.industry}
Website: ${inquiry.website || 'Not provided'}

PARTNERSHIP DETAILS:
Partnership Types: ${inquiry.partnershipType.join(', ')}
Project Budget: ${inquiry.projectBudget}
Timeline: ${inquiry.timeline}

PROJECT DESCRIPTION:
${inquiry.description}

---
This inquiry was submitted through the Forillon Technologies partnership form.
    `.trim();

    const sentFrom = new Sender("noreply@forillontech.com", "Forillon Technologies");
    const recipients = [new Recipient("sreddy@forillontech.com", "Siva Reddy")];

    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setSubject(`New Partnership Inquiry from ${inquiry.companyName}`)
      .setText(emailContent)
      .setHtml(emailContent.replace(/\n/g, '<br>'));

    await mailerSend.email.send(emailParams);
    console.log('Partnership inquiry email sent successfully via MailerSend');
    return true;
  } catch (error) {
    console.error('MailerSend email error:', error);
    return false;
  }
}