import React, { useEffect } from 'react';
import { Shield, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsOfService: React.FC = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors mb-4 sm:mb-6 text-sm sm:text-base"
          >
            <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
            <span>Back to Home</span>
          </Link>
          
          <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
            <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-green-400" />
            <h1 className="text-2xl sm:text-3xl font-bold">Terms of Service</h1>
          </div>
          <p className="text-gray-400 text-sm sm:text-base">Last updated: January 2025</p>
        </div>

        {/* Content */}
        <div className="space-y-6 sm:space-y-8">
          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-green-400 mb-3 sm:mb-4">1. Acceptance of Terms</h2>
            <div className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base">
              <p>
                By accessing and using Where's My Data? ("the Service"), you accept and agree to be bound by 
                the terms and provision of this agreement. If you do not agree to abide by the above, please 
                do not use this service.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-green-400 mb-3 sm:mb-4">2. Description of Service</h2>
            <div className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base">
              <p>
                Where's My Data? provides privacy and security checking tools including:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2 sm:ml-4 text-sm sm:text-base">
                <li>Data breach checking for email addresses and usernames</li>
                <li>Password strength analysis and security recommendations</li>
                <li>Domain reputation checking for website safety</li>
                <li>IP address information and security assessment</li>
                <li>Security tips and educational content</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-green-400 mb-3 sm:mb-4">3. Use License</h2>
            <div className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base">
              <p>
                Permission is granted to temporarily use the Service for personal, non-commercial transitory 
                viewing only. This is the grant of a license, not a transfer of title, and under this license 
                you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2 sm:ml-4 text-sm sm:text-base">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on the Service</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-green-400 mb-3 sm:mb-4">4. User Responsibilities</h2>
            <div className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base">
              <p>When using our Service, you agree to:</p>
              <ul className="list-disc list-inside space-y-2 ml-2 sm:ml-4 text-sm sm:text-base">
                <li>Provide accurate and truthful information</li>
                <li>Use the Service only for lawful purposes</li>
                <li>Not attempt to gain unauthorized access to our systems</li>
                <li>Not use the Service to harm others or their privacy</li>
                <li>Respect the intellectual property rights of others</li>
                <li>Not use automated tools to access the Service excessively</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-green-400 mb-3 sm:mb-4">5. Disclaimer</h2>
            <div className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base">
              <p>
                <strong>Educational Purpose Only:</strong> The Service is provided for educational and 
                informational purposes only. We are not affiliated with HaveIBeenPwned or any security organizations.
              </p>
              <p>
                <strong>No Guarantees:</strong> While we strive to provide accurate information, we cannot 
                guarantee the completeness, accuracy, or reliability of any information provided through the Service.
              </p>
              <p>
                <strong>Security Recommendations:</strong> Any security recommendations provided are general 
                in nature and should not be considered as professional security advice.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-green-400 mb-3 sm:mb-4">6. Limitations</h2>
            <div className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base">
              <p>
                In no event shall Where's My Data? or its suppliers be liable for any damages (including, 
                without limitation, damages for loss of data or profit, or due to business interruption) 
                arising out of the use or inability to use the Service, even if we have been notified 
                orally or in writing of the possibility of such damage.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-green-400 mb-3 sm:mb-4">7. Privacy and Data Protection</h2>
            <div className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base">
              <p>
                Your privacy is important to us. Please review our Privacy Policy, which also governs your 
                use of the Service, to understand our practices regarding the collection and use of your information.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-green-400 mb-3 sm:mb-4">8. Service Availability</h2>
            <div className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base">
              <p>
                We strive to maintain the Service's availability, but we do not guarantee uninterrupted access. 
                The Service may be temporarily unavailable due to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2 sm:ml-4 text-sm sm:text-base">
                <li>Scheduled maintenance</li>
                <li>Technical issues</li>
                <li>Server problems</li>
                <li>Network connectivity issues</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-green-400 mb-3 sm:mb-4">9. Modifications to Terms</h2>
            <div className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base">
              <p>
                We reserve the right to modify these terms at any time. Changes will be effective immediately 
                upon posting on the Service. Your continued use of the Service after any changes constitutes 
                acceptance of the new terms.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-green-400 mb-3 sm:mb-4">10. Termination</h2>
            <div className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base">
              <p>
                We may terminate or suspend your access to the Service immediately, without prior notice or 
                liability, for any reason whatsoever, including without limitation if you breach the Terms.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-green-400 mb-3 sm:mb-4">11. Governing Law</h2>
            <div className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base">
              <p>
                These Terms shall be interpreted and governed by the laws of [Your Jurisdiction], without 
                regard to its conflict of law provisions.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl sm:text-2xl font-semibold text-green-400 mb-3 sm:mb-4">12. Contact Information</h2>
            <div className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base">
              <p>If you have any questions about these Terms of Service, please contact us:</p>
              <ul className="list-disc list-inside space-y-2 ml-2 sm:ml-4 text-sm sm:text-base">
                <li><strong>Email:</strong> legal@wheresmydata.com</li>
                <li><strong>Address:</strong> [Your Business Address]</li>
                <li><strong>Response Time:</strong> We aim to respond within 48 hours</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    );
  };

export default TermsOfService; 