import React, { useEffect } from 'react';
import { Shield, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
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
          <h1 className="text-2xl sm:text-3xl font-bold">Privacy Policy</h1>
        </div>
        <p className="text-gray-400 text-sm sm:text-base">Last updated: January 2025</p>
      </div>

      {/* Content */}
      <div className="space-y-6 sm:space-y-8">
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-green-400 mb-3 sm:mb-4">1. Information We Collect</h2>
          <div className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base">
            <p>
              Where's My Data? is committed to protecting your privacy. We collect minimal information to provide our services:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2 sm:ml-4 text-sm sm:text-base">
              <li><strong>Search Queries:</strong> When you check for breaches, we temporarily process your email address or username to search our databases.</li>
              <li><strong>Usage Data:</strong> We collect anonymous usage statistics to improve our service.</li>
              <li><strong>Technical Information:</strong> Basic browser and device information for service optimization.</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-green-400 mb-3 sm:mb-4">2. How We Use Your Information</h2>
          <div className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base">
            <p>We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-2 ml-2 sm:ml-4 text-sm sm:text-base">
              <li>Provide breach checking services</li>
              <li>Improve our website functionality</li>
              <li>Analyze usage patterns to enhance user experience</li>
              <li>Ensure service security and prevent abuse</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-green-400 mb-3 sm:mb-4">3. Data Storage and Security</h2>
          <div className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base">
            <p>
              <strong>No Permanent Storage:</strong> We do not store your search queries or personal information permanently. 
              All data is processed in memory and discarded immediately after use.
            </p>
            <p>
              <strong>Security Measures:</strong> We implement industry-standard security practices including:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-2 sm:ml-4 text-sm sm:text-base">
              <li>HTTPS encryption for all data transmission</li>
              <li>Secure server infrastructure</li>
              <li>Regular security audits</li>
              <li>Access controls and monitoring</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-green-400 mb-3 sm:mb-4">4. Third-Party Services</h2>
          <div className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base">
            <p>We may use third-party services for:</p>
            <ul className="list-disc list-inside space-y-2 ml-2 sm:ml-4 text-sm sm:text-base">
              <li><strong>Analytics:</strong> Anonymous usage statistics to improve our service</li>
              <li><strong>Hosting:</strong> Secure cloud infrastructure for reliable service</li>
              <li><strong>Security:</strong> Protection against malicious attacks</li>
            </ul>
            <p>
              All third-party services are carefully selected and configured to respect your privacy.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-green-400 mb-3 sm:mb-4">5. Your Rights</h2>
          <div className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base">
            <p>You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 ml-2 sm:ml-4 text-sm sm:text-base">
              <li><strong>Access:</strong> Request information about what data we have about you</li>
              <li><strong>Rectification:</strong> Correct any inaccurate information</li>
              <li><strong>Erasure:</strong> Request deletion of your data</li>
              <li><strong>Portability:</strong> Receive your data in a portable format</li>
              <li><strong>Objection:</strong> Object to processing of your data</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-green-400 mb-3 sm:mb-4">6. Cookies and Tracking</h2>
          <div className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base">
            <p>
              We use minimal cookies necessary for website functionality. We do not use tracking cookies 
              or third-party advertising cookies. You can control cookie settings through your browser.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-green-400 mb-3 sm:mb-4">7. Children's Privacy</h2>
          <div className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base">
            <p>
              Our service is not intended for children under 13. We do not knowingly collect personal 
              information from children under 13. If you believe we have collected such information, 
              please contact us immediately.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-green-400 mb-3 sm:mb-4">8. Changes to This Policy</h2>
          <div className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base">
            <p>
              We may update this Privacy Policy from time to time. We will notify users of any material 
              changes by posting the new policy on this page and updating the "Last updated" date.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-green-400 mb-3 sm:mb-4">9. Contact Information</h2>
          <div className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base">
            <p>If you have any questions about this Privacy Policy, please contact us:</p>
            <ul className="list-disc list-inside space-y-2 ml-2 sm:ml-4 text-sm sm:text-base">
              <li><strong>Email:</strong> privacy@wheresmydata.com</li>
              <li><strong>Address:</strong> [Your Business Address]</li>
              <li><strong>Response Time:</strong> We aim to respond within 48 hours</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 