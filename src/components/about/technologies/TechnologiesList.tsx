import React from 'react';

const TechnologiesList = (props) => {
  return (
    <ul className="h2 fw-normal">
      {props.list.map((technology, index) => {
        return (
          <>
            <li key={index}>
              <p>{technology}</p>
            </li>
          </>
        );
      })}
    </ul>
  );
};

export default TechnologiesList;
