import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Privacy Policy
          </h1>
          
          <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
            <p className="text-sm text-gray-500 mb-8">
              Last updated: January 2024
            </p>
            
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
              <p>
                At Forillon Technologies, we collect information you provide directly to us, 
                such as when you create an account, use our services, or contact us for support.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
              <p>
                We use the information we collect to provide, maintain, and improve our services, 
                process transactions, send communications, and comply with legal obligations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information Sharing</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as described in this policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your 
                personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
              <p>
                You have the right to access, update, or delete your personal information. 
                You may also opt out of certain communications from us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-4">
                <p>Email: privacy@forillontech.com</p>
                <p>Phone: +1 647 564 8494</p>
                <p>Address: Toronto, Ontario, Canada</p>
              </div>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}