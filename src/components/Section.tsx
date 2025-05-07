import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className = '' }) => {
  return (
    <section 
      id={id} 
      className={`py-16 md:py-24 bg-black text-white ${className}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white relative after:content-[''] after:block after:w-12 after:h-[1px] after:bg-gray-800 after:mt-4">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
};

export default Section;