import React from 'react';
import Feature from '../../components/feature/Feature';
import './evermore.css';

const Evermore = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is Evermore" text="
Unleash the Power of AI: A Marketplace for Everyone
Empower your insights, streamline your workflow, and unlock new possibilities with our all-in-one AI marketplace." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="For Users" text="Access a wide range of pre-trained models, 
Pay-as-you-go pricing. Upload your data, obtain predictions, and gain valuable insights - no AI expertise required.
" />
      <Feature title="For Developers" text="Showcase your expertise and earn from your creations by selling them to a vast user base.
Reach your audience, share your models easily with our streamlined platform and start impacting the world." />
     </div>
  </div>
);

export default Evermore;
