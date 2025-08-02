import React, { useState, useEffect } from 'react';
import { Shield, ArrowLeft, Mail, MessageSquare, Github, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
         try {
       const result = await emailjs.send(
         'service_yhfw0n4', // Your service ID
         'template_bvjhvrs', // Your template ID
         {
           from_name: formData.name,
           from_email: formData.email,
           subject: formData.subject,
           message: formData.message,
         },
         'aCQirRTtXKeTwLmWd' // Your public key
       );
      
      if (result.status === 200) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setError('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
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
            <h1 className="text-2xl sm:text-3xl font-bold">Contact Us</h1>
          </div>
          <p className="text-gray-400 text-sm sm:text-base">Get in touch with our team for support, feedback, or questions</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="bg-gray-800 border border-gray-600 rounded-lg p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-semibold text-green-400 mb-4 sm:mb-6">Send us a Message</h2>
            
            {isSubmitted ? (
              <div className="text-center py-6 sm:py-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="h-6 w-6 sm:h-8 sm:w-8 text-green-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-green-400 mb-2">Message Sent!</h3>
                <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
                  Thank you for contacting us. We'll get back to you within 48 hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-4 sm:px-6 py-2 bg-gradient-to-r from-green-400 to-blue-400 text-black font-semibold rounded-lg hover:from-green-300 hover:to-blue-300 transition-all duration-300 text-sm sm:text-base"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-green-400 focus:outline-none transition-colors text-sm sm:text-base"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-green-400 focus:outline-none transition-colors text-sm sm:text-base"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-green-400 focus:outline-none transition-colors text-sm sm:text-base"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="feedback">Feedback</option>
                    <option value="bug">Bug Report</option>
                    <option value="feature">Feature Request</option>
                    <option value="privacy">Privacy Concern</option>
                    <option value="legal">Legal Question</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-green-400 focus:outline-none transition-colors resize-none text-sm sm:text-base"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                                 {error && (
                   <div className="text-red-400 text-sm text-center py-2">
                     {error}
                   </div>
                 )}
                 
                 <button
                   type="submit"
                   disabled={isSubmitting}
                   className="w-full py-2 sm:py-3 bg-gradient-to-r from-green-400 to-blue-400 text-black font-semibold rounded-lg hover:from-green-300 hover:to-blue-300 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 text-sm sm:text-base"
                 >
                   {isSubmitting ? (
                     <>
                       <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                       <span>Sending...</span>
                     </>
                   ) : (
                     <>
                       <Send className="h-4 w-4 sm:h-5 sm:w-5" />
                       <span>Send Message</span>
                     </>
                   )}
                 </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-green-400 mb-4 sm:mb-6">Get in Touch</h2>
              <p className="text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base">
                Have a question, feedback, or need support? We're here to help. 
                Choose the best way to reach us below.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">Email Support</h3>
                  <p className="text-gray-300 mb-1 sm:mb-2 text-sm sm:text-base">For general inquiries and support</p>
                                     <a href="mailto:pranav16022016@gmail.com" className="text-green-400 hover:text-green-300 transition-colors text-sm sm:text-base">
                     pranav16022016@gmail.com
                   </a>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MessageSquare className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">Live Chat</h3>
                  <p className="text-gray-300 mb-1 sm:mb-2 text-sm sm:text-base">Available during business hours</p>
                  <p className="text-gray-400 text-sm sm:text-base">Mon-Fri: 9AM-6PM EST</p>
                </div>
              </div>

              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Github className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">GitHub</h3>
                  <p className="text-gray-300 mb-1 sm:mb-2 text-sm sm:text-base">View the project source code</p>
                  <a href="https://github.com/Pranavfr" target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 transition-colors text-sm sm:text-base">
                    github.com/Pranavfr
                  </a>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-gray-800 border border-gray-600 rounded-lg p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Frequently Asked Questions</h3>
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <h4 className="text-green-400 font-medium mb-1 sm:mb-2 text-sm sm:text-base">How accurate are the breach results?</h4>
                  <p className="text-gray-300 text-xs sm:text-sm">
                    Our breach data comes from publicly available sources and is updated regularly. 
                    However, we cannot guarantee 100% accuracy of all results.
                  </p>
                </div>
                <div>
                  <h4 className="text-green-400 font-medium mb-1 sm:mb-2 text-sm sm:text-base">Is my data stored when I use the service?</h4>
                  <p className="text-gray-300 text-xs sm:text-sm">
                    No, we do not permanently store your search queries or personal information. 
                    All data is processed in memory and discarded immediately.
                  </p>
                </div>
                <div>
                  <h4 className="text-green-400 font-medium mb-1 sm:mb-2 text-sm sm:text-base">How long does it take to get a response?</h4>
                  <p className="text-gray-300 text-xs sm:text-sm">
                    We aim to respond to all inquiries within 48 hours during business days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default ContactUs; 