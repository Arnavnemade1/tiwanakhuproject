import React, { useState } from 'react';
import { Github, Menu, X, ChevronDown, ChevronUp, Sun, Moon, MapPin, Clock, BookOpen, Users, LayoutGrid, Image, Palmtree, Mountain, Building, Globe } from 'lucide-react';
import './TiwanakuSite.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SectionCard from './components/SectionCard';
import Footer from './components/Footer';

const TiwanakuSite = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  const toggleSection = (section) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };

  const sections = [
    {
      id: 'overview',
      title: 'Overview',
      icon: <Globe className="section-icon" />,
      content: `The Tiwanaku culture was one of the most important Andean civilizations, flourishing in western Bolivia, southern Peru, and northern Chile from around 300 to 1000 CE. Centered around the city of Tiwanaku near Lake Titicaca, this pre-Columbian society developed sophisticated agricultural techniques, monumental architecture, and complex social structures that influenced later Andean civilizations.`
    },
    {
      id: 'history',
      title: 'History & Timeline',
      icon: <Clock className="section-icon" />,
      content: `The Tiwanaku civilization emerged around 300 CE and reached its peak between 500-950 CE. The culture developed from earlier Andean traditions, establishing a powerful state centered at the city of Tiwanaku. After centuries of dominance, the civilization declined around 1000 CE, likely due to climate change that affected their sophisticated agricultural systems. Their influence continued through subsequent Andean cultures, including elements adopted by the later Inca Empire.`
    },
    {
      id: 'architecture',
      title: 'Monumental Architecture',
      icon: <Building className="section-icon" />,
      content: `Tiwanaku architecture is characterized by precisely cut stones, massive scale, and cosmic alignments. Key structures include the Akapana Pyramid (a stepped platform with sophisticated water management), the Semi-subterranean Temple (featuring stone heads of diverse ethnic groups), and the iconic Gateway of the Sun (a monolithic stone arch with intricate carvings). The Kalasasaya complex served as an astronomical observatory, demonstrating their advanced understanding of celestial movements.`
    },
    {
      id: 'artifacts',
      title: 'Art & Artifacts',
      icon: <Image className="section-icon" />,
      content: `Tiwanaku artists created distinctive ceramics, textiles, and stonework. Their pottery featured geometric designs, stylized animal and human figures, and was often painted in earth tones. Stone sculptures included the Bennett Monolith and the Ponce Monolith, representing ancestor deities. Textiles, though rarely preserved, show complex weaving techniques with geometric patterns. Metal artifacts in gold, silver, and copper display their sophisticated metallurgical knowledge.`
    },
    {
      id: 'agriculture',
      title: 'Agricultural Technology',
      icon: <Palmtree className="section-icon" />,
      content: `The Tiwanaku developed innovative agricultural systems to farm the harsh Andean environment. Their most remarkable achievement was the raised field system called "sukakollos" or "camellones" - elevated planting platforms separated by water channels. This microclimate engineering protected crops from frost and drought. They cultivated potatoes, quinoa, and other Andean staples, while also practicing terraced farming on hillsides and developed extensive irrigation networks.`
    },
    {
      id: 'society',
      title: 'Society & Religion',
      icon: <Users className="section-icon" />,
      content: `Tiwanaku society was hierarchical with distinct social classes, including nobility, priests, artisans, and farmers. Their religion centered around the Staff God (likely represented on the Gateway of the Sun), worship of natural forces, and ancestor veneration. Religious ceremonies included possible ritual use of psychoactive plants and animal sacrifices. The Tiwanaku expanded their influence through a combination of trade networks, religious ideology, and possibly military force.`
    },
    {
      id: 'geography',
      title: 'Geography & Environment',
      icon: <MapPin className="section-icon" />,
      content: `The Tiwanaku civilization developed in the high-altitude Andean plateau known as the Altiplano, situated at approximately 3,800 meters above sea level. Their capital city was strategically located near Lake Titicaca, the largest high-altitude lake in the world. This challenging environment, characterized by thin air, intense sunlight, freezing nights, and seasonal rainfall patterns, shaped their agricultural innovations and cultural adaptations. Their territory eventually expanded to include parts of present-day Bolivia, Peru, and Chile.`
    },
    {
      id: 'legacy',
      title: 'Legacy & Research',
      icon: <BookOpen className="section-icon" />,
      content: `The Tiwanaku influenced subsequent Andean cultures, including elements adopted by the Inca. Modern archaeological research continues to reveal new insights about this civilization, with technologies like satellite imaging and DNA analysis providing fresh perspectives. Current understanding emphasizes their role as an expansive, sophisticated state rather than merely a ceremonial center. Ongoing excavations and conservation efforts aim to preserve this important cultural heritage while respecting the site's significance to indigenous communities.`
    }
  ];

  return (
    <div className={`tiwanaku-site ${darkMode ? 'dark' : 'light'}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero />
      
      <div className="content-container">
        <div className="sections-grid">
          {sections.map((section) => (
            <SectionCard 
              key={section.id}
              section={section}
              isExpanded={expandedSection === section.id}
              toggleSection={() => toggleSection(section.id)}
            />
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default TiwanakuSite;
