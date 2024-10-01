import React from 'react';
import { motion } from 'framer-motion';
import sales from '../assets/awards/salesforce.png'
import cla from '../assets/awards/cla.png'
import cpa from '../assets/awards/cpa.png'
import spoken from '../assets/awards/spoken.png'
import iitmfoundation from '../assets/awards/iitmfoundation.png'
import python from '../assets/awards/python.png'
const AwardsAndCertificates = () => {
  const cards = [
    {
      title: 'Salesforce Certificate',
      description: 'Cloud computing',
      image: sales,
    },
    {
      title: 'CLA',
      description: 'Programming essentials in C',
      image: cla,
    },
    {
      title: 'Python',
      description: 'Python for beginners certificate',
      image: python,
    },
    {
      title: 'Spoken tutorial',
      description: 'Python 3.43 tutorial from iitbombay',
      image: spoken,
    },
    {
      title: 'Foundation level certificate',
      description: 'IITM Foundation level certificate',
      image: iitmfoundation,
    },
    {
      title: 'CPA',
      description: 'Programming essentials in C++',
      image: cpa,
    },
  ];

  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h1 
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:0.5}}
        className="my-20 text-center text-4xl">Awards or Certificates</motion.h1>
    <div className="flex flex-wrap justify-center mb-4">
      {cards.map((card, index) => (
        <div key={index} className="max-w-sm rounded m-3 overflow-hidden shadow-lg mb-4">
          <a href={card.image}><img src={card.image} alt={card.title} className="w-full h-48 object-cover rounded-t" /></a>
          <div className="px-6 py-4">
            <h2 className="font-bold text-xl mb-2">{card.title}</h2>
            <p className="text-yellow-300 text-base">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default AwardsAndCertificates;