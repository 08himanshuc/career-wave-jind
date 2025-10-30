export interface AcademyDetail {
  name: string;
  address: string;
  phone: string;
  email?: string;
  locationNote?: string;
  timings?: string;
  scheduleNote?: string;
  eligibilitySummary?: string;
  batchSizePolicy?: string;
  facilities?: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
  source?: string;
}

export interface AcademyInfo {
  details: AcademyDetail;
  faqs: FaqItem[];
}

export const ACADEMY_INFO: AcademyInfo = {
  details: {
    name: 'Career Wave Academy Jind',
    address:
      '1st floor, Punjab & Sindh Bank Building, Opposite D.R.D.A, Huda Market, Shiv Colony, Jind, Haryana - 126102',
    phone: '+91 98127 26612',
    email: 'info@cwajind.in',
    locationNote: 'Opposite DRDA, near Jeevan Deep Hospital (easily accessible).',
    timings: 'Mon–Sun: 8:00 AM – 5:30 PM (as per Justdial listing)',
    scheduleNote: 'Morning & Afternoon batches (no evening).',
    eligibilitySummary:
      'Core focus on Classes 9th–12th and 12th pass/drop year; NDA from Class 11.',
    batchSizePolicy: 'Max 50 students per batch; avoid overcrowding to ensure attention.',
    facilities: [
      'Digital LED smart classes',
      'Air-conditioned classrooms',
      'CCTV-enabled premises',
      'Books/study material provided',
      'Monthly course-pattern tests (NEET/JEE/Board/NDA)',
      'Progress reports shared with parents'
    ]
  },
  faqs: [
    {
      question: 'Where is Career Wave Academy located in Jind?',
      answer:
        'We are located opposite DRDA, near Jeevan Deep Hospital in Shiv Colony. The institute is easily accessible from all parts of Jind city.',
      source:
        'https://www.justdial.com/Jind/Career-Wave-Academy-Opposite-Drda-Near-Jeevan-Deep-Hospital-Jind-Ho/9999P1681-1681-181103112714-W2F7_BZDET'
    },
    {
      question: 'What are the class timings?',
      answer:
        'As per the Justdial listing: Monday to Sunday, 8:00 AM – 5:30 PM. Our operational model is morning & afternoon batches (no evening).',
      source:
        'https://www.justdial.com/Jind/Career-Wave-Academy-Opposite-Drda-Near-Jeevan-Deep-Hospital-Jind-Ho/9999P1681-1681-181103112714-W2F7_BZDET'
    },
    {
      question: 'Do you provide study material/books?',
      answer:
        'Yes. We provide books and essential study material for preparation across courses (NEET, JEE, Board, NDA).',
      source:
        'https://www.justdial.com/Jind/Career-Wave-Academy-Opposite-Drda-Near-Jeevan-Deep-Hospital-Jind-Ho/9999P1681-1681-181103112714-W2F7_BZDET'
    },
    {
      question: 'What is the batch size policy?',
      answer:
        'We avoid overcrowding and keep batches to a maximum of 50 students to ensure attention and better outcomes. Batches may be divided based on demand and availability.',
      source:
        'https://www.justdial.com/Jind/Career-Wave-Academy-Opposite-Drda-Near-Jeevan-Deep-Hospital-Jind-Ho/9999P1681-1681-181103112714-W2F7_BZDET'
    },
    {
      question: 'Which classes/courses are the main focus?',
      answer:
        'Our main focus is Classes 9th–12th (all streams) and drop year students, with dedicated NEET, IIT-JEE, Board, and NDA coaching. NDA eligibility typically starts from Class 11.',
    },
    {
      question: 'How do you track student progress?',
      answer:
        'We conduct monthly pattern-based tests (NEET/JEE/Board/NDA), provide books, and share detailed progress reports with parents.',
    },
    {
      question: 'What classroom facilities are available?',
      answer:
        'Digital LED smart classes for conceptual clarity, air-conditioned classrooms, and CCTV for student safety.',
    },
    {
      question: 'Do you offer one-on-one classes?',
      answer:
        'Most sessions are in small to medium batches. For specific needs, please contact the academy to discuss individual attention options.',
      source:
        'https://www.justdial.com/Jind/Career-Wave-Academy-Opposite-Drda-Near-Jeevan-Deep-Hospital-Jind-Ho/9999P1681-1681-181103112714-W2F7_BZDET'
    }
  ]
};
