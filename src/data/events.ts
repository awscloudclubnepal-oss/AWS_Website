import { EventItem } from '@/interface/IEvent';

export const events: EventItem[] = [
  {
    id: 'student-community-day-2025',
    title: 'AWS Student Community Day Nepal 2025',
    description: 'A flagship gathering of AWS student builders, workshops, talks & networking.',
    date: '2025-10-18',
    startTime: '09:00',
    endTime: '17:30',
    venue: 'Kathmandu (TBA)',
    locationUrl: 'https://maps.google.com/',
    coverImage: '/hero-image.png',
    tags: ['conference','networking','workshops'],
    status: 'upcoming'
  },
  {
    id: 'intro-to-aws-cloud-essentials',
    title: 'Intro to AWS Cloud Essentials',
    description: 'Foundational session covering core AWS services and architecture basics.',
    date: '2025-08-05',
    startTime: '16:00',
    endTime: '18:00',
    venue: 'Online',
    locationUrl: 'https://meet.google.com/',
    coverImage: '/aws.png',
    tags: ['workshop','beginner'],
    status: 'past'
  },
];
