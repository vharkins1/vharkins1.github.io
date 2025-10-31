export interface TimelineEvent {
  year: number;
  title: string;
  description: string;
  image: string;
}

export const timelineData: TimelineEvent[] = [
  {
    year: 2021,
    title: 'Event 1',
    description: 'This is the first event on the timeline.',
    image: '/images/event1.jpg',
  },
  {
    year: 2022,
    title: 'Event 2',
    description: 'This is the second event on the timeline.',
    image: '/images/event2.jpg',
  },
  {
    year: 2023,
    title: 'Event 3',
    description: 'This is the third event on the timeline.',
    image: '/images/event3.jpg',
  },
];
