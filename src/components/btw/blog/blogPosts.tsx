/* eslint-disable react/jsx-key */
import React from 'react';
import { includes } from 'lodash';

const blogPosts = [
  {
    iconClass: 'fa fa-keyboard',
    title: 'codersthetic',
    month: 'May',
    day: 28,
    year: 2022,
    body: [
      <p>Just wanted to romanticize my workspace for this upcoming summer. I think it&apos;s pretty cool.</p>,
      <img className="rounded-corners shadow mt-4 img-fluid mx-auto d-block" width="450" height="600" src="images/blog/workspace.jpg" alt="Melvin's workspace" />
    ]
  },
  {
    iconClass: 'fas fa-compact-disc',
    title: 'humble beginnings of a vinyl collection',
    month: 'July',
    day: 4,
    year: 2021,
    body: [
      <p>After years of putting it off, I finally got around to buying my first vinyl record and starting a collection.</p>,
      <p>
        A couple of friends and I spent the day walking around Princeton, and as we were about to drive home, we realized that we had parked right next to the Princeton Record Exchange. As we stepped inside the quaint, retro-inspired store, we immediately noticed the aisles of crates packed with vinyls from all different eras and genres of music. I flipped through hundreds of vibrant, colorful records and finally landed on one of my favorite hip-hop releases:{' '}
        <a href="https://open.spotify.com/album/42fyKPanos0Q3woi848ktg?si=l70SrdDYTV-7hOoYjQkn4Q&dl_branch=1" className="link-cultured" target="_blank" rel="noopener noreferrer">
          <em>Imperial</em>
        </a>{' '}
        by Denzel Curry. Spoiler alert: I bought it.
      </p>,
      <p>Now, as I format the &lt;p&gt; tags for what I hope will be a long-term blog, this album is playing in the background. While I’m still in search of the perfect turntable and speakers to hear the “crisp, warm” audio that audiophiles preach comes with vinyl, Spotify will cut it for now.</p>,
      <p>
        In more ways than one, I’ve seen parallels between music and programming. In every CS class that I’ve taken in high school, songs ranging from pop hits to punk rock have served as the backdrop to the meticulous keyboard taps and mouse clicks. Some of the most avid music listeners I know are programmers. But it’s so much more than that. Here’s some insights from Jeff Atwood’s{' '}
        <a href="https://blog.codinghorror.com/the-one-thing-programmers-and-musicians-have-in-common/" className="link-cultured" target="_blank" rel="noopener noreferrer">
          blog
        </a>
        :
      </p>,
      <ul className="fw-bold">
        <li>
          &quot;<em>Creating music and software are simultaneously collaborative and individualistic undertakings.</em>
        </li>
        <li>
          <em>Music is an abstract medium - the printed note requires interpretation and execution. Like the written line of code, there is often much more than meets the eye.</em>
        </li>
        <li>
          <em>Music is a form of self-expression. Many programmers, often to the dismay of corporate managers, try to express themselves through code</em>&quot;
        </li>
      </ul>,
      <p>Interestingly enough, music production and software engineering demand the same attention to detail, abstract thinking, and ability to zoom out, seeing how small changes impact a big project.</p>
    ]
  }
];

type CalendarMonth = {
  month: string,
  year: number
};

const activeMonths:Array<CalendarMonth> = [];

blogPosts.forEach((post) => {
  const currentMonth = {
    month: post.month,
    year: post.year
  };

  if (!includes(activeMonths, currentMonth)) {
    activeMonths.push(currentMonth);
  }
});

export { blogPosts, activeMonths };
