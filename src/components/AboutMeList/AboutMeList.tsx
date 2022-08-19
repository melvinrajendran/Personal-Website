import React from 'react';
import AboutMeItem from '../AboutMeItem/AboutMeItem';
import './AboutMeList.scss';

type AboutMeItem = {
  text: string;
  iconClass: string;
};

type AboutMeListProps = {
  items: AboutMeItem[];
};

const AboutMeList = ({ items }: AboutMeListProps) => {
  return (
    <>
      {items.map((item, index) => {
        return <AboutMeItem key={index} index={index} {...item} />;
      })}
    </>
  );
};

export default AboutMeList;
