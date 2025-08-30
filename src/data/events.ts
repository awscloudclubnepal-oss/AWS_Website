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
    locationUrl: 'https://www.meetup.com/aws-cloud-club-at-tribhuvan-university/events/310674609/?utm_medium=referral&utm_campaign=share-btn_savedevents_share_modal&utm_source=link&utm_version=v2',
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
    locationUrl: '',
    coverImage: '/aws.png',
    tags: ['workshop','beginner'],
    status: 'past'
  },
];
