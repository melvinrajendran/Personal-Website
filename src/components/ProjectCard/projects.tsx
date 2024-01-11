import React from 'react';

const projects = [
  {
    imageURL: 'images/projects/BitTorrentClient.png',
    imageAlt: 'BitTorrent Client',
    title: 'BitTorrent Client',
    date: 'DEC 23 - JAN 24',
    text: (
      <span>
        Full-featured BitTorrent v1.0 client with support for downloading and uploading files.
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
    date: 'MAY 23',
    text: (
      <span>
        A data science tutorial analyzing stocks on the S&P 500. Uses LSTM modeling to predict stock
        prices.
      </span>
    ),
    codeURL: 'https://github.com/melvinrajendran/SP500-Stock-Price-Analysis',
    technologies: <span>Python, Jupyter, Keras, Scikit-Learn</span>,
  },
  {
    imageURL: 'images/projects/QUESTechDatathon.png',
    imageAlt: 'QUESTech Datathon',
    title: 'QUESTech Datathon',
    date: 'MAR 23',
    text: (
      <span>
        A Jupyter notebook analyzing how Elon Musk&apos;s tweets correlate with Tesla order
        cancellation.
      </span>
    ),
    codeURL: 'https://github.com/melvinrajendran/QUESTech-Datathon',
    technologies: <span>Python, Jupyter, NLTK</span>,
  },
  {
    imageURL: 'images/projects/Convertify.png',
    imageAlt: 'Convertify',
    projectURL: 'https://convertify.onrender.com',
    title: 'Convertify',
    date: 'DEC 22 - JAN 23',
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
