import { type PartnershipInquiry } from "../shared/schema";

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
Contact: ${inquiry.email}
    `.trim();

    const emailHtml = `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #1e40af; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px;">
    New Partnership Inquiry
  </h2>
  
  <div style="background: #f8fafc; padding: 20px; margin: 20px 0; border-left: 4px solid #3b82f6;">
    <h3 style="color: #374151; margin: 0 0 15px 0;">Company Information</h3>
    <p><strong>Company:</strong> ${inquiry.companyName}</p>
    <p><strong>Industry:</strong> ${inquiry.industry}</p>
    <p><strong>Company Size:</strong> ${inquiry.companySize}</p>
    <p><strong>Website:</strong> ${inquiry.website || 'Not provided'}</p>
  </div>

  <div style="background: #f8fafc; padding: 20px; margin: 20px 0; border-left: 4px solid #10b981;">
    <h3 style="color: #374151; margin: 0 0 15px 0;">Contact Information</h3>
    <p><strong>Name:</strong> ${inquiry.firstName} ${inquiry.lastName}</p>
    <p><strong>Title:</strong> ${inquiry.jobTitle}</p>
    <p><strong>Email:</strong> <a href="mailto:${inquiry.email}">${inquiry.email}</a></p>
    <p><strong>Phone:</strong> ${inquiry.phone}</p>
  </div>

  <div style="background: #f8fafc; padding: 20px; margin: 20px 0; border-left: 4px solid #f59e0b;">
    <h3 style="color: #374151; margin: 0 0 15px 0;">Partnership Details</h3>
    <p><strong>Partnership Types:</strong> ${inquiry.partnershipType.join(', ')}</p>
    <p><strong>Budget:</strong> ${inquiry.projectBudget}</p>
    <p><strong>Timeline:</strong> ${inquiry.timeline}</p>
  </div>

  <div style="background: #f8fafc; padding: 20px; margin: 20px 0; border-left: 4px solid #8b5cf6;">
    <h3 style="color: #374151; margin: 0 0 15px 0;">Project Description</h3>
    <p style="white-space: pre-line;">${inquiry.description}</p>
  </div>

  <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; color: #6b7280; font-size: 14px;">
    <p>This inquiry was submitted through the Forillon Technologies partnership form.</p>
    <p>Reply directly to: <a href="mailto:${inquiry.email}">${inquiry.email}</a></p>
  </div>
</div>
    `.trim();

    // Use the direct MailerSend API approach as per official documentation
    // Try multiple sender configurations for trial account compatibility
    
    const senderConfigurations = [
      // Configuration 1: Use trial domain
      {
        email: "info@trial-pxkjn2wn68ol7vyz.mlsender.net",
        name: "Forillon Partnership Form"
      },
      // Configuration 2: Alternative trial domain format
      {
        email: "noreply@trial-pxkjn2wn68ol7vyz.mlsender.net", 
        name: "Forillon Tech"
      },
      // Configuration 3: Simple format
      {
        email: "partnership@trial-pxkjn2wn68ol7vyz.mlsender.net",
        name: "Partnership Team"
      }
    ];

    // Try each sender configuration
    for (let i = 0; i < senderConfigurations.length; i++) {
      const senderConfig = senderConfigurations[i];
      
      const emailPayload = {
        from: senderConfig,
        to: [
          {
            email: "sreddy@forillontech.com",
            name: "Siva Reddy"
          }
        ],
        subject: `Partnership Inquiry from ${inquiry.companyName}`,
        text: emailText,
        html: emailHtml
      };

      console.log(`Attempting MailerSend configuration ${i + 1}:`, senderConfig.email);

      const response = await fetch('https://api.mailersend.com/v1/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.MAILERSEND_API_TOKEN}`,
          'X-Requested-With': 'XMLHttpRequest'
        },
        body: JSON.stringify(emailPayload)
      });

      const result = await response.json();

      if (response.ok) {
        console.log(`✅ MailerSend email sent successfully with configuration ${i + 1}:`, {
          messageId: result['x-message-id'] || result.messageId || 'N/A',
          status: response.status,
          configuration: senderConfig.email
        });
        return true;
      } else {
        console.log(`Configuration ${i + 1} failed:`, {
          status: response.status,
          error: result.message || result.error,
          details: result.errors || {}
        });
        
        // If this is the last configuration and it still fails, log details
        if (i === senderConfigurations.length - 1) {
          console.error('All MailerSend configurations failed. Final error:', {
            status: response.status,
            statusText: response.statusText,
            body: result
          });
        }
      }
    }

    return false;

  } catch (error: any) {
    console.error('MailerSend network error:', error);
    return false;
  }
}