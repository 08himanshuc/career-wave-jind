import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import MobileCTABar from '@/components/MobileCTABar';
import BackToTop from '@/components/BackToTop';
import { FileText } from 'lucide-react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-8 pb-20 md:pb-8">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <Breadcrumb items={[{ label: 'Terms & Conditions' }]} />

          {/* Header */}
          <div className="text-center mb-12 mt-8">
            <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <FileText className="w-4 h-4 mr-2" />
              Legal Terms
            </div>
            <h1 className="text-4xl md:text-5xl font-poppins font-bold text-foreground mb-4">
              Terms & Conditions
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
                  Agreement to Terms
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  By enrolling in Career Wave Academy Jind or using our services, you agree to be bound by these Terms and Conditions. Please read them carefully before proceeding with admission or enrollment.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-poppins font-semibold text-foreground mb-4">
                  Admission and Enrollment
                </h2>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Admissions are subject to availability and eligibility criteria for each course</li>
                  <li>All information provided during admission must be accurate and complete</li>
                  <li>The academy reserves the right to verify documents and reject applications if found inaccurate</li>
                  <li>Limited seats are available per batch on a first-come, first-served basis</li>
                  <li>Enrollment is confirmed only after fee payment and submission of required documents</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-poppins font-semibold text-foreground mb-4">
                  Fee Structure and Payment
                </h2>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Course fees must be paid as per the agreed schedule</li>
                  <li>Fees once paid are non-refundable except as per our refund policy</li>
                  <li>Late payment may result in temporary suspension from classes until dues are cleared</li>
                  <li>Fee structure is subject to change with prior notice</li>
                  <li>Installment plans are available and must be adhered to strictly</li>
                  <li>All payments should be made through authorized channels only</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-poppins font-semibold text-foreground mb-4">
                  Attendance and Conduct
                </h2>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Students are expected to maintain regular attendance (minimum 75% recommended)</li>
                  <li>Punctuality is mandatory; late arrivals may not be permitted in certain classes</li>
                  <li>Students must maintain discipline and respectful behavior in the academy premises</li>
                  <li>Any form of misconduct, cheating, or disruption may lead to dismissal without refund</li>
                  <li>Students must comply with academy rules and faculty instructions</li>
                  <li>Mobile phones should be switched off or on silent mode during classes</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-poppins font-semibold text-foreground mb-4">
                  Academic Responsibilities
                </h2>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Students must complete assignments and tests as per the schedule</li>
                  <li>Study materials provided are for personal use only and should not be shared or reproduced</li>
                  <li>Students are responsible for their own learning and preparation</li>
                  <li>The academy provides guidance and support but does not guarantee specific exam results</li>
                  <li>Participation in mock tests and practice sessions is strongly encouraged</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-poppins font-semibold text-foreground mb-4">
                  Course Modifications and Cancellations
                </h2>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>The academy reserves the right to modify course schedules, faculty, or curriculum as needed</li>
                  <li>Students will be notified in advance of any significant changes</li>
                  <li>In case of course cancellation by the academy, full refund will be provided</li>
                  <li>Batch timings may be adjusted based on student requirements and availability</li>
                  <li>Holiday schedules and class cancellations will be communicated in advance</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-poppins font-semibold text-foreground mb-4">
                  Withdrawal and Refund Policy
                </h2>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Students may withdraw from courses by submitting a written request</li>
                  <li>Refunds (if applicable) will be processed as per the refund policy terms</li>
                  <li>No refunds will be provided after 30 days of course commencement</li>
                  <li>Admission fees and registration charges are non-refundable</li>
                  <li>Study materials once provided are non-refundable</li>
                  <li>Refund processing may take 15-30 working days</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-poppins font-semibold text-foreground mb-4">
                  Intellectual Property
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  All study materials, content, videos, notes, and resources provided by Career Wave Academy Jind are proprietary and protected by copyright laws. Unauthorized copying, distribution, or sharing of academy materials is strictly prohibited and may result in legal action.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-poppins font-semibold text-foreground mb-4">
                  Liability Disclaimer
                </h2>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>The academy is not liable for personal belongings lost or damaged on premises</li>
                  <li>Students participate in activities at their own risk</li>
                  <li>The academy does not guarantee specific exam results or ranks</li>
                  <li>We are not responsible for external exam changes, postponements, or policies</li>
                  <li>Success depends on individual effort, dedication, and preparation</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-poppins font-semibold text-foreground mb-4">
                  Parent/Guardian Responsibilities
                </h2>
                <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                  <li>Parents/guardians must ensure students attend classes regularly</li>
                  <li>Monitoring student progress and participating in parent-teacher meetings is encouraged</li>
                  <li>Parents must inform the academy of any health issues or special requirements</li>
                  <li>Cooperation with academy staff in maintaining discipline is expected</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-poppins font-semibold text-foreground mb-4">
                  Dispute Resolution
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Any disputes arising from these terms shall be resolved through mutual discussion. If unresolved, the matter shall be subject to the jurisdiction of courts in Jind, Haryana.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-poppins font-semibold text-foreground mb-4">
                  Changes to Terms
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Career Wave Academy Jind reserves the right to modify these Terms and Conditions at any time. Students and parents will be notified of significant changes. Continued enrollment constitutes acceptance of updated terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-poppins font-semibold text-foreground mb-4">
                  Contact Information
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  For any questions regarding these Terms and Conditions, please contact us:
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
                    <strong>Phone:</strong> <a href="tel:+918460597155" className="text-primary hover:underline">+91 84605 97155</a>
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
      <MobileCTABar />
      <BackToTop />
    </div>
  );
};

export default Terms;

