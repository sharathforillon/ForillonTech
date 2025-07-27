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
Contact: ${inquiry.email}
    `.trim();

    // For MailerSend trial accounts, let's try using a verified trial domain
    // Trial accounts typically get a subdomain like this
    const sentFrom = new Sender("ms-trial@trial-pxkjn2wn68ol7vyz.mlsender.net", "Forillon Partnership Form");
    const recipients = [new Recipient("sreddy@forillontech.com", "Siva Reddy")];

    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setSubject(`Partnership Inquiry - ${inquiry.companyName} (${inquiry.firstName} ${inquiry.lastName})`)
      .setText(emailContent)
      .setHtml(`<pre>${emailContent.replace(/\n/g, '<br>')}</pre>`);

    const response = await mailerSend.email.send(emailParams);
    console.log('Partnership inquiry email sent successfully via MailerSend', response);
    return true;
  } catch (error) {
    console.error('MailerSend email error:', error);
    
    // For trial account limitations, we'll log the inquiry details for manual follow-up
    console.log('Partnership inquiry details (for manual follow-up):', {
      company: inquiry.companyName,
      contact: `${inquiry.firstName} ${inquiry.lastName}`,
      email: inquiry.email,
      phone: inquiry.phone,
      partnershipType: inquiry.partnershipType,
      description: inquiry.description.substring(0, 100) + '...'
    });
    
    // Still return false to indicate email wasn't sent
    return false;
  }
}