import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Terms of Service
          </h1>
          
          <div className="prose prose-lg max-w-none text-gray-600 space-y-8">
            <p className="text-sm text-gray-500 mb-8">
              Last updated: January 2024
            </p>
            
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Acceptance of Terms</h2>
              <p>
                By accessing and using Forillon Technologies services, you accept and agree to be 
                bound by the terms and provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Use License</h2>
              <p>
                Permission is granted to temporarily use our services for personal, non-commercial 
                transitory viewing only. This is the grant of a license, not a transfer of title.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Service Description</h2>
              <p>
                Forillon Technologies provides AI consulting, digital transformation, and enterprise 
                architecture services to businesses and organizations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">User Responsibilities</h2>
              <p>
                Users are responsible for maintaining the confidentiality of their account 
                information and for all activities that occur under their account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Limitation of Liability</h2>
              <p>
                In no event shall Forillon Technologies be liable for any damages arising from 
                the use or inability to use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Modifications</h2>
              <p>
                Forillon Technologies may revise these terms of service at any time without notice. 
                By using this service, you are agreeing to be bound by the current version of these terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="mt-4">
                <p>Email: legal@forillontech.com</p>
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