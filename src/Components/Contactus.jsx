import { FaEnvelope, FaPhone } from 'react-icons/fa';
import './css/ContactUs.css';
import UseScrollTop from '../CustomHook/UseScrollTop';

export default function Contactus() {
  UseScrollTop();
  
  return (
    <div className='contact-us container'>
      <div className='app-container'>
        <div className='card'>
          <div className='card-header'>
            <div className='icon'>
              <FaEnvelope />
            </div>
            <h2>Email</h2>
          </div>
          <div className='card-content'>
            <p>
              Look forward to your mail at <b>Shuaibakhter92@gmail.com</b>. Expect us to respond within 24-48 hours.
            </p>
          </div>
        </div>

        <div className='card'>
          <div className='card-header'>
            <div className='icon'>
              <FaPhone />
            </div>
            <h2>Phone</h2>
          </div>
          <div className='card-content'>
            <p>
              Dial <b>+91 8800-721-984</b> to reach us instantly. We are waiting to hear from you!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}