import sgMail from '@sendgrid/mail';

if (!process.env.SENDGRID_API_KEY) {
  throw new Error("SENDGRID_API_KEY environment variable must be set");
}

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

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

    const msg = {
      to: 'sreddy@forillontech.com',
      from: 'noreply@forillontech.com', // This should be a verified sender in SendGrid
      subject: `New Partnership Inquiry from ${inquiry.companyName}`,
      text: emailContent,
      html: emailContent.replace(/\n/g, '<br>'),
    };

    await sgMail.send(msg);
    console.log('Partnership inquiry email sent successfully');
    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    return false;
  }
}