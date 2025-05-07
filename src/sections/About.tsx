import React from 'react';
import Section from '../components/Section';

const About: React.FC = () => {
  return (
    <Section id="about" title="About Me">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-8">
          <p className="text-gray-300 mb-6">
            I'm <span className="font-semibold text-white">Lakshay Sharma</span>, a backend developer currently pursuing a B.Tech in Information Technology at Jaypee Institute of Information Technology (Class of 2026). I specialize in backend engineering, cloud architecture, and AI-integrated systems to build fast, scalable, and secure digital products.
          </p>
          <p className="text-gray-300">
            In parallel, I'm actively learning Japanese (target: JLPT N3 by Dec 2025) with the goal of building a meaningful, long-term tech career in Japan's innovation-driven ecosystem. I believe in the transformative power of code and enjoy solving complex problems with clean, efficient systems.
          </p>
        </div>
        
        <div className="md:col-span-4 bg-black border border-gray-800 p-6 rounded-lg">
          <h3 className="text-white text-lg font-semibold mb-4">At a Glance</h3>
          <ul className="space-y-3">
            <li className="flex text-gray-300">
              <span className="w-28 text-gray-500">Location:</span>
              <span>Delhi, India</span>
            </li>
            <li className="flex text-gray-300">
              <span className="w-28 text-gray-500">Degree:</span>
              <span>B.Tech (IT)</span>
            </li>
            <li className="flex text-gray-300">
              <span className="w-28 text-gray-500">University:</span>
              <span>JIIT</span>
            </li>
            <li className="flex text-gray-300">
              <span className="w-28 text-gray-500">Graduation:</span>
              <span>2026</span>
            </li>
            <li className="flex text-gray-300">
              <span className="w-28 text-gray-500">Language:</span>
              <span>Japanese (Learning)</span>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default About;