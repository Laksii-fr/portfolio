import React from 'react';

interface CertificationProps {
  title: string;
  issuer: string;
  description: string;
}

const CertificationCard: React.FC<CertificationProps> = ({
  title,
  issuer,
  description
}) => {
  return (
    <div className="bg-black border border-gray-800 p-6 rounded-lg transition-all duration-300 hover:bg-gray-900">
      <h3 className="text-lg font-bold text-white mb-1">{title}</h3>
      <p className="text-gray-400 text-sm mb-3">{issuer}</p>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default CertificationCard;