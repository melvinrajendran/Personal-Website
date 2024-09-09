import React from 'react';

const projects = [
  {
    imageURL: 'images/projects/Emerald.png',
    imageAlt: 'Emerald',
    projectURL: 'https://emerald.money',
    title: 'Emerald',
    date: 'June 2024 - Present',
    text: (
      <span>
        A personal finance app that leverages NLP to simplify budgeting and wealth management.
      </span>
    ),
    technologies: <span>React Native, TypeScript, Expo</span>,
  },
  {
    imageURL: 'images/projects/BitTorrentClient.png',
    imageAlt: 'BitTorrent Client',
    title: 'BitTorrent Client',
    date: 'December 2023 - January 2024',
    text: (
      <span>
        A full-featured BitTorrent v1.0 client with support for downloading and uploading files.
      </span>
    ),
    codeURL: 'https://github.com/melvinrajendran/BitTorrent-Client',
    technologies: (
      <span>
        Go,{' '}
        <a
          href="https://github.com/marksamman/bencode"
          className="link-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bencode
        </a>
      </span>
    ),
  },
  {
    imageURL: 'images/projects/SP500StockPriceAnalysis.png',
    imageAlt: 'S&P Stock Price Analysis',
    projectURL: 'https://melvinrajendran.github.io/SP500-Stock-Price-Analysis/',
    title: 'S&P Stock Price Analysis',
    date: 'May 2023',
    text: (
      <span>
        A data science tutorial analyzing stocks on the S&P 500. Uses LSTM modeling to predict stock
        prices.
      </span>
    ),
    codeURL: 'https://github.com/melvinrajendran/SP500-Stock-Price-Analysis',
    technologies: <span>Python, Keras, Scikit-Learn</span>,
  },
  {
    imageURL: 'images/projects/QUESTechDatathon.png',
    imageAlt: 'QUESTech Datathon',
    title: 'QUESTech Datathon',
    date: 'March 2023',
    text: (
      <span>
        A Jupyter notebook analyzing how Elon Musk&apos;s tweets correlate with Tesla order
        cancellation.
      </span>
    ),
    codeURL: 'https://github.com/melvinrajendran/QUESTech-Datathon',
    technologies: <span>Python, NLTK</span>,
  },
  {
    imageURL: 'images/projects/Convertify.png',
    imageAlt: 'Convertify',
    projectURL: 'https://convertify.onrender.com',
    title: 'Convertify',
    date: 'December 2022 - January 2023',
    text: (
      <span>
        A web application that enables Spotify users to quickly convert their playlists between
        explicit and clean.
      </span>
    ),
    codeURL: 'https://github.com/melvinrajendran/Convertify',
    technologies: (
      <span>
        React,{' '}
        <a
          href="https://developer.spotify.com/documentation/web-api/"
          className="link-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          Spotify Web API
        </a>
      </span>
    ),
  },
];

export default projects;
