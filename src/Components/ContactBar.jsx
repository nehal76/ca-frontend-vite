import './css/ContactBar.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram, FaEnvelope, FaWhatsapp, FaPhone } from 'react-icons/fa';

export default function ContactBar() {
  return (
    <div className="contactBar">
      <div className="socialIcons">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className='icon-bg-facebook'>
          <FaFacebookF />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className='icon-bg-twitter'>
          <FaTwitter />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className='icon-bg-linkedin'>
          <FaLinkedinIn />
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className='icon-bg-youtube'>
          <FaYoutube />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className='icon-bg-insta'>
          <FaInstagram />
        </a>
      </div>
      <div className='contactInfo'>
        <a href="mailto:info@akgvg.com" className='contactItem'>
          <FaEnvelope /> Shuaibakhter92@gmail.com
        </a>
        <a href="tel:+919818314719" className='contactItem'>
          <FaWhatsapp /> <FaPhone /> +91 8800-721-984
        </a>
      </div>
    </div>
  );
}
