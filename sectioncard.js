import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './SectionCard.css';

const SectionCard = ({ section, isExpanded, toggleSection }) => {
  return (
    <div id={section.id} className={`section-card ${isExpanded ? 'expanded' : ''}`}>
      <div className="section-header" onClick={toggleSection}>
        <div className="section-title">
          {section.icon}
          <h3>{section.title}</h3>
        </div>
        <button className="expand-button">
          {isExpanded ? <ChevronUp className="icon" /> : <ChevronDown className="icon" />}
        </button>
      </div>
      
      {isExpanded && (
        <div className="section-content">
          <p>{section.content}</p>
        </div>
      )}
    </div>
  );
};

export default SectionCard;
