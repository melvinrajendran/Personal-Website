/* eslint-disable react/jsx-key */
import React from 'react';

const aboutMeItems = [
  {
    text: "I'm fascinated by large-scale, impactful products and learning how they're built.",
    iconClass: 'fas fa-globe',
  },
  {
    text: "I've contributed to industry-leading services and applications that serve millions of users.",
    iconClass: 'fas fa-users',
  },
  {
    text: (
      <span>
        I&apos;m currently pursuing a Bachelor of Science in Computer Science at the{' '}
        <a
          href="https://www.cs.umd.edu/"
          target="_blank"
          rel="noopener noreferrer"
          className="link-cultured"
        >
          University of Maryland
        </a>
        .
      </span>
    ),
    iconClass: 'fas fa-graduation-cap',
  },
  {
    text: "In my free time, you'll find me lifting weights, trying out new recipes, or listening to Kendrick Lamar.",
    iconClass: 'fas fa-headphones-alt',
  },
];

export default aboutMeItems;
