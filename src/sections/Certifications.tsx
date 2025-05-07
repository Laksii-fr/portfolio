import React from 'react';
import Section from '../components/Section';
import CertificationCard from '../components/CertificationCard';

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: "Python – Kaggle",
      issuer: "Kaggle",
      description: "Applied Python to solve data and ML problems via real-world projects."
    },
    {
      title: "Cloud Computing",
      issuer: "Google Developer Student Club",
      description: "Gained experience in deploying scalable apps using GCP and understanding cloud architecture."
    }
  ];

  return (
    <Section id="certifications" title="Certifications">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certifications.map((cert, index) => (
          <CertificationCard
            key={index}
            title={cert.title}
            issuer={cert.issuer}
            description={cert.description}
          />
        ))}
      </div>
    </Section>
  );
};

export default Certifications;