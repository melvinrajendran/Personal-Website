/* eslint-disable react/jsx-key */
import React from 'react';

const experiences = [
  {
    name: 'PayPal',
    jobTitle: 'Software Engineer Intern',
    startToEndDate: 'MAY 22 - AUG 22, AUG 23 ~',
    bullets: [
      'Worked on an agile development team to deliver credit acquisition products and achieve one-year migration, focusing on mobile-first design and web accessibility',
      'Revamped testing tool for the Credit Application Experience in four weeks, ensuring 100% usability of menu options and improved testing speed',
      'Developed the user interface and back-end service calls for the Choose Your Credit Offers page (Presents financing options to users applying for PayPal Credit during checkout) over six weeks',
      'Utilized React, Node, TypeScript, GraphQL, Git, Unix, and Jira extensively',
    ],
  },
  {
    name: 'QUESTech',
    jobTitle: 'Board Member',
    startToEndDate: 'SEP 22 ~',
    bullets: [
      <span>
        Plan events to teach 250+{' '}
        <a
          href="https://www.rhsmith.umd.edu/quest"
          className="link-cultured"
          target="_blank"
          rel="noopener noreferrer"
        >
          QUEST Honors Program
        </a>{' '}
        students about new and innovative technology
      </span>,
      'Host online alumni panel with 5+ speakers to provide insights into data science, software engineering, and product/program management in modern industries',
      'Prepare and conduct 15-minute presentation at technology fair, introducing web development, leading an activity on impressive user interfaces, and providing additional learning resources',
      <span>
        Won 1st place at{' '}
        <a
          href="https://blog.umd.edu/questpress/2023/03/17/the-quest-for-data-highlights-from-quests-annual-datathon/"
          className="link-cultured"
          target="_blank"
          rel="noopener noreferrer"
        >
          2023 QUESTech Datathon
        </a>{' '}
        ($500) for analyzing how Elon Musk&apos;s tweets correlate with Tesla order cancellation
      </span>,
    ],
  },
  {
    name: 'Bitcamp',
    jobTitle: 'Logistics Organizer',
    startToEndDate: 'NOV 21 ~',
    bullets: [
      <span>
        Organize{' '}
        <a
          href="https://bit.camp/"
          className="link-cultured"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bitcamp
        </a>
        , the University of Maryland&apos;s 36-hour hackathon that hosts 1,200+ attendees annually
      </span>,
      'Scheduled shifts for 100+ volunteers and mentors to assist participants, serve food, and run workshops',
      'Built digital system that matched mentors to volunteers with a 98% success rate',
      'Communicated with local vendors to secure power equipment for the event',
      'Designed Xfinity Center floor plans to align with university social distancing measures',
      'Operated A/V equipment throughout the event to host speakers and make announcements',
    ],
  },
  {
    name: 'Code Ninjas',
    jobTitle: 'Programming Tutor',
    startToEndDate: 'NOV 19 - AUG 21',
    bullets: [
      'Taught 80+ students fundamental programming concepts by developing video games with JavaScript',
      'Conducted machine learning workshops in which students applied supervised learning techniques to train a chatbot to perform sentiment analysis',
      'Directed 10-day summer camps on web development (HTML, CSS, JavaScript) and Python for 100+ students',
      'Organized and ran annual hackathon in which students collaborated to create 20+ custom Scratch games',
    ],
  },
];

export default experiences;
