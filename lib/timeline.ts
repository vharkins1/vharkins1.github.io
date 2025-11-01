export interface TimelineEvent {
  year: string;
  date: string;
  title: string;
  description: string;
  images: {
    src: string;
    alt: string;
    shape?: 'circle' | 'squircle';
  }[];
}

export const timelineData: TimelineEvent[] = [
  {
    year: '2021',
    date: 'March 2021',
    title: 'First Coding Project',
    description: 'Built a small application that sparked my interest in software development.',
    images: [{ src: 'https://placehold.co/100x100/3b82f6/ffffff?text=Code', alt: 'First Coding Project', shape: 'circle' }],
  },
  {
    year: '2021',
    date: 'September 2021',
    title: 'Started University',
    description: 'Began my Computer Science degree. Dived deep into algorithms and data structures.',
    images: [{ src: 'https://placehold.co/100x100/3b82f6/ffffff?text=Uni', alt: 'Started University', shape: 'squircle' }],
  },
  {
    year: '2022',
    date: 'June 2022',
    title: 'Internship',
    description: 'Gained real-world experience working with a team of talented engineers.',
    images: [
      { src: 'https://placehold.co/100x100/8b5cf6/ffffff?text=Team', alt: 'Internship photo 1' },
      { src: 'https://placehold.co/100x100/8b5cf6/ffffff?text=Code', alt: 'Internship photo 2' },
    ],
  },
  {
    year: '2022',
    date: 'December 2022',
    title: 'Graduation',
    description: 'Completed my degree with honors. A proud moment marking the end of one chapter.',
    images: [{ src: 'https://placehold.co/100x100/8b5cf6/ffffff?text=Grad', alt: 'Graduation', shape: 'squircle' }],
  },
  {
    year: '2023',
    date: 'February 2023',
    title: 'Joining Lab',
    description: 'Joined a research lab focusing on artificial intelligence. Exploring new frontiers.',
    images: [{ src: 'https://placehold.co/100x100/d946ef/ffffff?text=Lab', alt: 'Joining Research Lab', shape: 'circle' }],
  },
  {
    year: '2023',
    date: 'October 2023',
    title: 'First Conference',
    description: 'Presented my research at an international conference. An amazing experience.',
    images: [{ src: 'https://placehold.co/100x100/d946ef/ffffff?text=Conf', alt: 'First Conference', shape: 'squircle' }],
  },
  {
    year: '2024',
    date: 'May 2024',
    title: 'Lead Project',
    description: 'Took the lead on a new project, managing a small team and the development lifecycle.',
    images: [
      { src: 'https://placehold.co/100x100/ec4899/ffffff?text=Plan', alt: 'Lead Project photo 1' },
      { src: 'https://placehold.co/100x100/ec4899/ffffff?text=Team', alt: 'Lead Project photo 2' },
      { src: 'https://placehold.co/100x100/ec4899/ffffff?text=Launch', alt: 'Lead Project photo 3' },
    ],
  },
  {
    year: '2025',
    date: 'Present Day',
    title: 'Today',
    description: 'Continuing my journey, always learning and building new things. Excited for the future!',
    images: [{ src: 'https://placehold.co/100x100/f97316/ffffff?text=Today', alt: 'Today', shape: 'squircle' }],
  },
  {
    year: '2026',
    date: '2026',
    title: 'Mentorship',
    description: 'Started mentoring junior developers, sharing knowledge and helping them grow.',
    images: [{ src: 'https://placehold.co/100x100/ef4444/ffffff?text=Mentor', alt: 'Mentorship', shape: 'circle' }],
  },
  {
    year: '2027',
    date: '2027',
    title: 'New Chapter',
    description: 'Looking forward to new challenges and opportunities on the horizon.',
    images: [{ src: 'https://placehold.co/100x100/b91c1c/ffffff?text=Future', alt: 'New Chapter', shape: 'squircle' }],
  },
];
