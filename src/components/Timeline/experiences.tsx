/* eslint-disable react/jsx-key */
import React from 'react';

const experiences = [
  {
    name: 'PayPal',
    jobTitle: 'Software Engineer Intern',
    startToEndDates: [
      'May 2024 - August 2024',
      'June 2023 - August 2023',
      'May 2022 - August 2022',
    ],
    bullets: [
      [
        'Worked on the Credit Platform team to develop and maintain microservices that are leveraged across all consumer and business credit products.',
        'Successfully consolidated 3 components for the Credit Accounts v2 API, which enables retrieving and managing credit account information, obtaining credit line offers, onboarding account owners, and determining account closure eligibility.',
      ],
      [
        <span>
          Worked on the Credit User Experience team to develop full-stack web applications to
          acquire and service users for the{' '}
          <a
            href="https://www.paypal.com/us/digital-wallet/manage-money/paypal-cashback-mastercard"
            className="link-cultured"
            target="_blank"
            rel="noopener noreferrer"
          >
            PayPal Cashback Mastercard
          </a>{' '}
          and{' '}
          <a
            href="https://www.paypal.com/us/digital-wallet/ways-to-pay/credit-services/paypal-credit"
            className="link-cultured"
            target="_blank"
            rel="noopener noreferrer"
          >
            PayPal Credit
          </a>{' '}
          products.
        </span>,
        'Built Credit Admin, a tool for 200+ PayPal developers and stakeholders to triage and remediate production issues related to credit applications, credit accounts, and associated services, as well as perform administrative functions.',
      ],
      [
        <span>
          Revamped the testing tool for the Credit Application Experience, significantly improving
          data setup speed for developers testing the various user flows.
        </span>,
        "Developed the user interface and service calls for the Choose Your Credit Offers page (presents financing options to users in checkout), furthering the team's ongoing migration effort.",
      ],
    ],
  },
  {
    name: 'QUESTech',
    jobTitle: 'Board Member',
    startToEndDates: ['September 2022 - Present'],
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
          students with emerging technologies in real-world applications.
        </span>,
        'Maintain a comprehensive intranet platform to consolidate program resources and improve access for current students, alumni, and faculty members.',
        'Host annual alumni panel with 10+ speakers to provide insights into data science, software engineering, and product/program management in modern industries.',
        'Prepare and conduct 15-minute presentations on web development and prompt engineering at annual technology fair, encouraging students to build career development skills.',
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
          ($500) for analyzing how Elon Musk&apos;s tweets correlate with Tesla order cancellation.
        </span>,
      ],
    ],
  },
  {
    name: 'Bitcamp',
    jobTitle: 'Logistics Director',
    startToEndDates: ['November 2021 - Present'],
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
          , the largest collegiate hackathon on the east coast that hosts 1,200+ attendees annually.
        </span>,
        'Strategically allocate $175,000 budget to secure necessary logistics contracts and maximize rollover amidst a transition to a new venue.',
        'Manage a team of 11 members to plan and coordinate utilities (power equipment, audio-visual equipment, and wi-fi), personnel (mentors and volunteers), travel reimbursement, food, and computer hardware for the event.',
        'Collaborate daily with 6 other teams and their directors to determine exact requirements and clear safety concerns for weekend-of events.',
      ],
    ],
  },
];

export default experiences;
