import { type PartnershipInquiry } from "../shared/schema";

// Simple notification system that logs partnership inquiries in a structured way
// This ensures we never lose partnership inquiries even if email fails

export function logPartnershipInquiry(inquiry: PartnershipInquiry): void {
  const timestamp = new Date().toISOString();
  
  console.log('\n' + '='.repeat(80));
  console.log('📧 NEW PARTNERSHIP INQUIRY');
  console.log('='.repeat(80));
  console.log(`Timestamp: ${timestamp}`);
  console.log(`Company: ${inquiry.companyName}`);
  console.log(`Contact: ${inquiry.firstName} ${inquiry.lastName} (${inquiry.jobTitle})`);
  console.log(`Email: ${inquiry.email}`);
  console.log(`Phone: ${inquiry.phone}`);
  console.log(`Company Size: ${inquiry.companySize}`);
  console.log(`Industry: ${inquiry.industry}`);
  console.log(`Website: ${inquiry.website || 'Not provided'}`);
  console.log(`Partnership Types: ${inquiry.partnershipType.join(', ')}`);
  console.log(`Budget: ${inquiry.projectBudget}`);
  console.log(`Timeline: ${inquiry.timeline}`);
  console.log('Description:');
  console.log(inquiry.description);
  console.log('='.repeat(80));
  console.log('⚠️  MANUAL FOLLOW-UP REQUIRED - Email this contact within 24 hours');
  console.log('='.repeat(80) + '\n');
}

// Email template for manual follow-up
export function generateFollowUpEmailTemplate(inquiry: PartnershipInquiry): string {
  return `
Subject: Re: Partnership Inquiry from ${inquiry.companyName}

Dear ${inquiry.firstName},

Thank you for your interest in partnering with Forillon Technologies. We received your partnership inquiry and are excited about the potential collaboration opportunities.

Based on your submission:
- Company: ${inquiry.companyName}
- Partnership Focus: ${inquiry.partnershipType.join(', ')}
- Project Timeline: ${inquiry.timeline}
- Investment Range: ${inquiry.projectBudget}

We would love to discuss how we can work together to achieve your goals. Our team will review your requirements and get back to you within 24 hours to schedule a consultation call.

In the meantime, feel free to reach out if you have any immediate questions.

Best regards,
Siva Reddy
Forillon Technologies
sreddy@forillontech.com
  `.trim();
}