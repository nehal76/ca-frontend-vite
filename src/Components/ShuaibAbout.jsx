import logo from '../assets/logoCA.png';
import useScrollTop from '../Hooks/useScrollTop'; 


export default function About_shuaib() {
  // Use effect Hook
  useScrollTop();
  
  return (
    <>
    <div className="container about-shuaib">
      <div className="profile-image">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="profile-info">
        <h2>Shuaib Akhter</h2>
        <h3>B.Com.(H), FCA</h3>
        <p>
        <b>Mr.Shuaib Akhter</b> is a Chartered Accountant (CA) with extensive expertise in specific areas like auditing, taxation, or financial consulting. With <b>11</b> years of experience, he excels in providing strategic financial solutions and ensuring compliance with industry standards. Known for his analytical skills and dedication, Mr.Shuaib Akhter delivers valuable insights that drive organizational success. Outside of work, he is passionate about cars, which fuels his enthusiasm for  automotive events and driving.
        </p>
      </div>
    </div>
    </>
  )
}
