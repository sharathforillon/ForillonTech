import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";
import { type PartnershipInquiry } from "../shared/schema";
import { sendPartnershipInquiryViaSendGrid } from "./sendgrid-email";

// Initialize MailerSend with API key using the official pattern
const mailerSend = new MailerSend({
  apiKey: "mlsn.be28d4ebcd49c4d9e6a3c60f4e2fc18c1bfe95f1a4b54de89f4589160a19f485",
});

export async function sendPartnershipInquiry(inquiry: PartnershipInquiry): Promise<boolean> {
  // Try MailerSend first, then fallback to SendGrid
  const mailerSendResult = await sendPartnershipInquiryViaMailerSend(inquiry);
  if (mailerSendResult) {
    return true;
  }
  
  console.log('MailerSend failed, trying SendGrid as fallback...');
  const sendGridResult = await sendPartnershipInquiryViaSendGrid(inquiry);
  console.log('SendGrid result:', sendGridResult);
  return sendGridResult;
}

async function sendPartnershipInquiryViaMailerSend(inquiry: PartnershipInquiry): Promise<boolean> {
  try {
    const sentFrom = new Sender("info@domain.com", "Forillon Partnership Team");
    
    const recipients = [
      new Recipient("sreddy@forillontech.com", "Siva Reddy")
    ];

    const personalization = [
      {
        email: "sreddy@forillontech.com",
        data: {
          company_name: inquiry.companyName,
          contact_name: `${inquiry.firstName} ${inquiry.lastName}`,
          contact_email: inquiry.email,
          contact_phone: inquiry.phone,
          job_title: inquiry.jobTitle,
          company_size: inquiry.companySize,
          industry: inquiry.industry,
          website: inquiry.website || 'Not provided',
          partnership_types: inquiry.partnershipType.join(', '),
          description: inquiry.description || 'No description provided',
          inquiry_date: new Date().toLocaleDateString()
        }
      }
    ];

    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setReplyTo(sentFrom)
      .setSubject(`Partnership Inquiry from ${inquiry.companyName}`)
      .setTemplateId('k68zxl2edeklj905')
      .setPersonalization(personalization);

    // Send the email using the official SDK pattern
    const response = await mailerSend.email.send(emailParams);
    
    console.log('✅ MailerSend email sent successfully:', response);
    return true;

  } catch (error: any) {
    console.error('MailerSend error:', error);
    
    // Log the inquiry details for manual follow-up
    console.log('Partnership inquiry details (for manual follow-up):', {
      company: inquiry.companyName,
      contact: `${inquiry.firstName} ${inquiry.lastName}`,
      email: inquiry.email,
      phone: inquiry.phone,
      partnershipType: inquiry.partnershipType,
      description: inquiry.description ? inquiry.description.substring(0, 100) + '...' : 'No description provided'
    });
    
    return false;
  }
}