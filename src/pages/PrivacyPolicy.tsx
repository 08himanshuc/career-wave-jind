import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import BackToTop from '@/components/BackToTop';
import { Shield } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-8 pb-20 md:pb-8">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <Breadcrumb items={[{ label: 'Privacy Policy' }]} />

          {/* Header */}
          <div className="text-center mb-12 mt-8">
            <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Shield className="w-4 h-4 mr-2" />
              Privacy & Security
            </div>
            <h1 className="text-4xl md:text-5xl font-poppins font-bold text-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground">
              Last Updated: January 2025
            </p>
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto prose prose-slate">
            <div className="bg-card rounded-xl p-8 shadow-sm space-y-8">
              <section>
                <h2 className="text-2xl font-poppins font-semibold text-foreground mb-4">
                  Introduction
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Career Wave Academy Jind ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-poppins font-semibold text-foreground mb-4">
                  Information We Collect
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  We may collect the following types of information:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li><strong>Personal Information:</strong> Name, email address, phone number, student details when you inquire about our courses or enroll</li>
                  <li><strong>Academic Information:</strong> Class, board, course preferences, and educational background</li>
                  <li><strong>Usage Data:</strong> Information about how you use our website, including IP address, browser type, and pages visited</li>
                  <li><strong>Communication Data:</strong> Records of your communications with us via phone, email, or WhatsApp</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-poppins font-semibold text-foreground mb-4">
                  How We Use Your Information
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  We use the collected information for:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Processing admission inquiries and course enrollments</li>
                  <li>Communicating about classes, schedules, and academic updates</li>
                  <li>Providing customer support and responding to queries</li>
                  <li>Improving our educational services and website experience</li>
                  <li>Sending important notifications about course updates and academy news</li>
                  <li>Analyzing usage patterns to enhance our offerings</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-poppins font-semibold text-foreground mb-4">
                  Information Sharing
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-3">
                  <li>With your explicit consent</li>
                  <li>To comply with legal obligations or court orders</li>
                  <li>To protect the rights and safety of Career Wave Academy, our students, or others</li>
                  <li>With trusted service providers who assist in operating our academy (under strict confidentiality agreements)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-poppins font-semibold text-foreground mb-4">
                  Data Security
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-poppins font-semibold text-foreground mb-4">
                  Your Rights
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  You have the right to:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Access and receive a copy of your personal information</li>
                  <li>Request correction of inaccurate or incomplete data</li>
                  <li>Request deletion of your personal information (subject to legal requirements)</li>
                  <li>Withdraw consent for data processing where applicable</li>
                  <li>Opt-out of marketing communications at any time</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-poppins font-semibold text-foreground mb-4">
                  Cookies and Tracking
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website may use cookies and similar tracking technologies to enhance user experience, analyze site traffic, and understand user preferences. You can control cookie settings through your browser preferences.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-poppins font-semibold text-foreground mb-4">
                  Children's Privacy
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our services are designed for students of various age groups. When collecting information from minors, we obtain parental or guardian consent as required by applicable laws. Parents/guardians have the right to review, modify, or delete their child's information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-poppins font-semibold text-foreground mb-4">
                  Changes to This Policy
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on this page with an updated "Last Updated" date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-poppins font-semibold text-foreground mb-4">
                  Contact Us
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  If you have any questions or concerns about this Privacy Policy, please contact us:
                </p>
                <div className="bg-muted/50 rounded-lg p-6 space-y-2">
                  <p className="text-foreground">
                    <strong>Career Wave Academy Jind</strong>
                  </p>
                  <p className="text-muted-foreground">
                    1st floor, Punjab & Sindh Bank Building, Opposite D.R.D.A<br />
                    Huda Market, Shiv Colony, Jind, Haryana - 126102
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Phone:</strong> <a href="tel:+919812726612" className="text-primary hover:underline">+91 98127 26612</a>
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Email:</strong> <a href="mailto:info@cwajind.in" className="text-primary hover:underline">info@cwajind.in</a>
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default PrivacyPolicy;

