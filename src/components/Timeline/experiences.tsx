/* eslint-disable react/jsx-key */
import React from 'react';

const experiences = [
  {
    name: 'PayPal',
    jobTitle: 'Software Engineer Intern',
    startToEndDates: ['JUN - AUG 23', 'MAY - AUG 22'],
    bullets: [
      [
        <span>
          Worked on the Credit User Experience team to develop full-stack applications to acquire
          users for the{' '}
          <a
            href="https://www.paypal.com/credit-application/co/landing"
            className="link-cultured"
            target="_blank"
            rel="noopener noreferrer"
          >
            PayPal Cashback Mastercard
          </a>{' '}
          and{' '}
          <a
            href="https://www.paypal.com/us/webapps/mpp/paypal-credit"
            className="link-cultured"
            target="_blank"
            rel="noopener noreferrer"
          >
            PayPal Credit
          </a>{' '}
          products
        </span>,
        'Built Credit Admin, a tool for 100+ PayPal developers and stakeholders to triage and remediate production issues related to credit applications, credit accounts, and associated services, as well as perform administrative functions',
        'Generated a 70% average decrease in the lines of code needed to implement a feature by leveraging Next.js, tRPC, Emotion, and Express with a focus on inner-sourcing and providing a seamless user experience',
      ],
      [
        'Revamped testing tool for the Credit Application Experience, generating a 133% increase in menu-option usability and a 75% improvement in data setup speed',
        'Developed the React user interface and GraphQL service calls for the Choose Your Credit Offers page (presents financing options to users in checkout), utilizing Jest to ensure 100% test coverage of user flows',
      ],
    ],
  },
  {
    name: 'QUESTech',
    jobTitle: 'Board Member',
    startToEndDates: ['SEP 22 ~'],
    bullets: [
      [
        <span>
          Plan events to engage 250+{' '}
          <a
            href="https://www.rhsmith.umd.edu/quest"
            className="link-cultured"
            target="_blank"
            rel="noopener noreferrer"
          >
            QUEST Honors Program
          </a>{' '}
          students with emerging technologies in real-world applications
        </span>,
        'Maintain a comprehensive intranet platform to consolidate program resources and improve access for current students, alumni, and faculty members',
        'Host annual alumni panel with 10+ speakers to provide insights into data science, software engineering, and product/program management in modern industries',
        'Prepare and conduct 15-minute presentation on web development at annual technology fair, teaching how to build a portfolio website for career development',
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
    ],
  },
  {
    name: 'Bitcamp',
    jobTitle: 'Logistics Director',
    startToEndDates: ['NOV 21 ~'],
    bullets: [
      [
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
        'Manage a team of 11 members to strategically plan and coordinate utilities (power equipment, audio-visual equipment, and wi-fi), personnel (mentors and volunteers), travel arrangements, food, and hardware for the event',
        'Negotiate favorable pricing with local vendors, leading to cost savings for equipment-related expenses',
        'Built a digital system on Slack that matched 85+ mentors to participants with a 98% success rate',
      ],
    ],
  },
  {
    name: 'Code Ninjas',
    jobTitle: 'Programming Tutor',
    startToEndDates: ['NOV 19 - AUG 21'],
    bullets: [
      [
        'Taught 80+ students fundamental programming concepts by developing video games with JavaScript',
        'Conducted machine learning workshops in which students applied supervised learning techniques to train a chatbot to perform sentiment analysis',
        'Directed 10-day summer camps on web development (HTML, CSS, JavaScript) and Python for 100+ students',
        'Organized and ran the annual hackathon in which students collaborated to create 20+ custom Scratch games',
      ],
    ],
  },
];

export default experiences;
