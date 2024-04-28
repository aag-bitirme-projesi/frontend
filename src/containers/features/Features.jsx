import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Empowerment:',
    text: 'AI empowers your data" highlights the platforms value proposition.',
  },
  {
    title: 'Reach your audience:',
    text: 'Connect with users actively seeking solutions and grow your network while generating income.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">
Step into the future - where AI empowers your data and unlocks possibilities. 
Make it happen on our one-stop AI marketplace.</h1>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
