import './css/Services.css';
import UseScrollTop from '../CustomHook/UseScrollTop';

export default function Services() {
  UseScrollTop();

  const services = [
    "AUDIT & ASSURANCE SERVICES",
    "BOOK KEEPING & ACCOUNTING SERVICES",
    "BUSINESS SETUP ADVISORY",
    "CYBER SECURITY",
    "FORENSIC ACCOUNTING AND FRAUD DETECTION",
    "GLOBAL BUSINESS SERVICES",
    "GST RELATED SERVICES",
    "IND-AS IMPLEMENTATION",
    "INTERNAL AUDIT",
    "INTERNAL FINANCIAL CONTROLS (IFS)",
    "NON-CORE PROCESS OUTSOURCING",
    "PHYSICAL VERIFICATION"
  ];

  return (
    <div className="container">
      <div className='container'>
        <div className='cardGrid'>
          {services.map((service, index) => (
            <div key={index} className='card'>
                <h5 className='cardTitle'>{service}</h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
