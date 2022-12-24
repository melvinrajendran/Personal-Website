/* eslint-disable react/jsx-key */
import React from 'react';

const experiences = [
  {
    name: 'QUESTech',
    jobTitle: 'Board Member',
    startToEndDate: 'SEP 22 ~',
    bullets: [
      <span>
        Plans events to teach 250+{' '}
        <a
          href="https://www.rhsmith.umd.edu/quest"
          className="link-cultured"
          target="_blank"
          rel="noopener noreferrer"
        >
          QUEST Honors Program
        </a>{' '}
        members about new and innovative technology
      </span>,
      'Hosts online alumni panel with 5+ speakers to provide insights into data science, software engineering, and product/program management in modern businesses',
      'Prepares and conducts 15-minute presentation at technology fair, introducing web development and providing learning resources',
      'Organizes mini-events in which students get hands-on experience with fun technology, connect with others, and de-stress',
    ],
  },
  {
    name: 'Bitcamp',
    jobTitle: 'Logistics Organizer',
    startToEndDate: 'NOV 21 ~',
    bullets: [
      <span>
        Organizes{' '}
        <a
          href="https://bit.camp/"
          className="link-cultured"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bitcamp
        </a>
        , the University of Maryland&apos;s 36-hour hackathon that hosts 1,200+ campers annually
      </span>,
      'Schedules shifts for volunteers and mentors to assist campers, serve food, and run workshops',
      'Communicates with local vendors to secure power equipment for the event',
      'Designs Xfinity Center floor plans to align with university social distancing measures',
      'Operates A/V equipment throughout the event to host speakers and make announcements to campers',
    ],
  },
  {
    name: 'PayPal',
    jobTitle: 'Software Engineer Intern',
    startToEndDate: 'MAY 22 - AUG 22',
    bullets: [
      'Worked on an Agile development team to deliver credit acquisition products',
      'Utilized React, Node, TypeScript, GraphQL, and Git extensively',
      'Collaborated frequently with other engineers to problem-solve, review and test code, showcase product demos, and reflect on every development cycle',
      'Networked with company execs through intern program-wide events to learn more about the company, its mission, and ongoing innovations',
      'Presented to the larger credit organization on my internship project, summer experience, and takeaways',
    ],
  },
  {
    name: 'Code Ninjas',
    jobTitle: 'Programming Tutor',
    startToEndDate: 'NOV 19 - AUG 21',
    bullets: [
      'Taught children ages 7 to 14 fundamental programming concepts in the context of game development',
      'Organized and ran annual hackathon',
      'Conducted machine learning workshops in which students gained exposure to sentiment analysis and supervised learning',
      'Directed 2-month summer camps on Web Development, Python, and JavaScript',
    ],
  },
];

export default experiences;
