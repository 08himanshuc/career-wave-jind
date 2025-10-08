import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import MobileCTABar from '@/components/MobileCTABar';
import BackToTop from '@/components/BackToTop';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  Phone, 
  MessageCircle, 
  Clock, 
  Users, 
  BookOpen, 
  Award, 
  CheckCircle2,
  Target,
  Calendar,
  IndianRupee
} from 'lucide-react';
import neetImage from '@/assets/neet-course.jpg';
import iitJeeImage from '@/assets/iit-jee-course.jpg';
import cbseImage from '@/assets/cbse-course.jpg';
import ndaImage from '@/assets/nda-course.jpg';

// Course data
const courseData = {
  neet: {
    id: 'neet',
    title: 'NEET Coaching',
    subtitle: 'Medical Entrance Exam Preparation',
    description: 'Comprehensive NEET preparation program designed to help you crack the medical entrance exam with top ranks. Our expert faculty and proven methodology ensure excellent results.',
    image: neetImage,
    color: 'bg-green-500',
    highlights: [
      'Experienced Medical Faculty',
      'Complete NCERT Coverage',
      'Regular Mock Tests',
      'Doubt Clearing Sessions',
      'Previous Year Questions',
      'Study Material Provided'
    ],
    syllabus: [
      { subject: 'Physics', topics: 'Mechanics, Thermodynamics, Optics, Modern Physics, Electromagnetism' },
      { subject: 'Chemistry', topics: 'Physical Chemistry, Organic Chemistry, Inorganic Chemistry' },
      { subject: 'Biology', topics: 'Botany (Plant Physiology, Genetics), Zoology (Human Physiology, Evolution)' }
    ],
    duration: '1-2 Years',
    batchSize: '25-30 Students',
    schedule: 'Morning & Evening Batches Available',
    eligibility: 'Class 11th, 12th, 12th Pass Students'
  },
  iitjee: {
    id: 'iitjee',
    title: 'IIT-JEE Coaching',
    subtitle: 'Engineering Entrance Exam Preparation',
    description: 'Specialized IIT-JEE preparation for JEE Main and JEE Advanced. Our structured approach helps students master concepts and problem-solving techniques for engineering entrance exams.',
    image: iitJeeImage,
    color: 'bg-blue-500',
    highlights: [
      'IIT Alumni Faculty',
      'JEE Main + Advanced Prep',
      'Conceptual Learning Focus',
      'Weekly Problem Solving',
      'Regular Assessment Tests',
      'Personal Mentoring'
    ],
    syllabus: [
      { subject: 'Physics', topics: 'Classical Mechanics, Waves & Thermodynamics, Electricity & Magnetism, Modern Physics' },
      { subject: 'Chemistry', topics: 'Physical Chemistry, Organic Chemistry, Inorganic Chemistry' },
      { subject: 'Mathematics', topics: 'Calculus, Algebra, Trigonometry, Coordinate Geometry, Vectors & 3D' }
    ],
    duration: '1-2 Years',
    batchSize: '20-25 Students',
    schedule: 'Morning & Evening Batches Available',
    eligibility: 'Class 11th, 12th, 12th Pass Students'
  },
  cbse: {
    id: 'cbse',
    title: 'CBSE & HBSE Classes',
    subtitle: 'Board Exam Preparation (6th to 12th)',
    description: 'Complete board exam preparation for CBSE and HBSE students from Class 6th to 12th. Focus on strong fundamentals, exam techniques, and scoring 95%+ marks.',
    image: cbseImage,
    color: 'bg-purple-500',
    highlights: [
      'NCERT Based Teaching',
      'Chapter-wise Tests',
      'Practical Sessions',
      'Revision Classes',
      'Sample Papers',
      'Previous Year Solutions'
    ],
    syllabus: [
      { subject: 'Science Stream', topics: 'Physics, Chemistry, Mathematics/Biology, English, Optional Subject' },
      { subject: 'Commerce Stream', topics: 'Accountancy, Business Studies, Economics, English, Mathematics' },
      { subject: 'Arts Stream', topics: 'History, Political Science, Economics, English, Optional Subjects' }
    ],
    duration: '1 Academic Year',
    batchSize: '30-35 Students',
    schedule: 'Afternoon & Evening Batches',
    eligibility: 'Students of Class 6th to 12th'
  },
  nda: {
    id: 'nda',
    title: 'NDA Preparation',
    subtitle: 'National Defence Academy Coaching',
    description: 'Comprehensive NDA exam preparation covering Mathematics, General Ability Test, and SSB interview training. Join the academy to serve the nation with pride.',
    image: ndaImage,
    color: 'bg-orange-500',
    highlights: [
      'Mathematics Expert Faculty',
      'GAT Complete Coverage',
      'SSB Interview Prep',
      'Physical Fitness Guidance',
      'Current Affairs Updates',
      'Personality Development'
    ],
    syllabus: [
      { subject: 'Mathematics', topics: 'Algebra, Trigonometry, Calculus, Statistics, Probability, Geometry' },
      { subject: 'General Ability', topics: 'English, Physics, Chemistry, Geography, History, Current Affairs' },
      { subject: 'SSB Preparation', topics: 'Interview Techniques, Group Discussion, Psychological Tests' }
    ],
    duration: '6-12 Months',
    batchSize: '20-25 Students',
    schedule: 'Morning Batches Preferred',
    eligibility: 'Class 12th Pass (Age 16.5-19.5 years)'
  }
};

const CourseDetail = () => {
  const { courseId } = useParams();
  const course = courseData[courseId as keyof typeof courseData];

  if (!course) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Course Not Found</h1>
          <Link to="/#courses">
            <Button>View All Courses</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-8 pb-20 md:pb-8">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <Breadcrumb items={[
            { label: 'Courses', href: '/#courses' },
            { label: course.title }
          ]} />

          {/* Hero Section */}
          <div className="mt-8 mb-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Content */}
              <div>
                <div className={`inline-flex items-center ${course.color} text-white px-4 py-2 rounded-full text-sm font-medium mb-4`}>
                  <Award className="w-4 h-4 mr-2" />
                  {course.subtitle}
                </div>
                <h1 className="text-4xl md:text-5xl font-poppins font-bold text-foreground mb-4">
                  {course.title}
                </h1>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {course.description}
                </p>
                
                {/* Quick Info */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-5 h-5 text-primary" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Users className="w-5 h-5 text-primary" />
                    <span>{course.batchSize}</span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="btn-primary flex items-center gap-2"
                    onClick={() => window.location.href = 'tel:+918460597155'}
                  >
                    <Phone className="w-4 h-4" />
                    Enroll Now
                  </Button>
                  <Button 
                    variant="outline"
                    className="flex items-center gap-2"
                    onClick={() => window.open('https://wa.me/918460597155?text=Hi!%20I%20want%20to%20know%20more%20about%20' + course.title, '_blank')}
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp Inquiry
                  </Button>
                </div>
              </div>

              {/* Image */}
              <div className="relative">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>

          {/* Course Details */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Course Highlights */}
              <Card className="p-8">
                <h2 className="text-2xl font-poppins font-semibold text-foreground mb-6 flex items-center gap-2">
                  <Target className="w-6 h-6 text-primary" />
                  Course Highlights
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {course.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Syllabus */}
              <Card className="p-8">
                <h2 className="text-2xl font-poppins font-semibold text-foreground mb-6 flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-primary" />
                  Course Syllabus
                </h2>
                <div className="space-y-4">
                  {course.syllabus.map((item, index) => (
                    <div key={index} className="border-l-4 border-primary pl-4">
                      <h3 className="font-semibold text-foreground mb-2">{item.subject}</h3>
                      <p className="text-muted-foreground text-sm">{item.topics}</p>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Course Info Card */}
              <Card className="p-6 sticky top-24">
                <h3 className="font-poppins font-semibold text-foreground mb-4">
                  Course Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Schedule</p>
                      <p className="text-sm text-muted-foreground">{course.schedule}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Batch Size</p>
                      <p className="text-sm text-muted-foreground">{course.batchSize}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Duration</p>
                      <p className="text-sm text-muted-foreground">{course.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Eligibility</p>
                      <p className="text-sm text-muted-foreground">{course.eligibility}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground mb-4">
                    For fee details and admission, contact us:
                  </p>
                  <Button 
                    className="w-full btn-primary"
                    onClick={() => window.location.href = 'tel:+918460597155'}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call +91 84605 97155
                  </Button>
                </div>
              </Card>

              {/* CTA Card */}
              <Card className="p-6 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
                <h3 className="font-poppins font-semibold text-foreground mb-2">
                  Ready to Join?
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Limited seats available. Enroll now to secure your spot!
                </p>
                <Link to="/#contact">
                  <Button variant="outline" className="w-full">
                    Contact Us
                  </Button>
                </Link>
              </Card>
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

export default CourseDetail;

