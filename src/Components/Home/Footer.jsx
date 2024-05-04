import { AiFillGoogleCircle, AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook, FaLinkedin } from "react-icons/fa6";


const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-[#151515] text-[#F3F3F3]">
  <aside>
        <img src="/public/images/logo.svg" alt="" />
    <p>Edwin Diaz is a software and web <br /> technologies engineer, a life coach <br /> trainer who is also a serial .</p>
    <div className="flex gap-2 text-2xl">
    <a href="" className=""><FaFacebook /></a>
    <a href="" className=""><AiFillGoogleCircle /></a>
    <a href="" className=""><AiFillTwitterCircle /></a>
    <a href="" className=""><FaLinkedin  /></a>
    </div>
  </aside> 
  <nav>
    <h6 className="footer-title">Services</h6> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Company</h6> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Legal</h6> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>

</footer>

        </div>
    );
};

export default Footer;