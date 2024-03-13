import logo from "../assests/Logo.png";
import { useRouter } from "next/router";
import Image from "next/image";
import git from "../assests/github1.png";
import disc from "../assests/discordlogo.png";
// import insta from "../assests/instagram.png";
import utube from "../assests/youtube1.png";
import insta from '../assests/instagramIcon.png';
import linkedIn from '../assests/linkedInIcon.png';
import twitter from '../assests/twitterIcon.png';
import whatsApp from '../assests/whatsappIcon.png';
import youtube from '../assests/youtubeIcon.png';
import spotify from '../assests/spotifyIcon.png';
import leftLines from '../assests/leftLinesStroke.png';
import rightLines from '../assests/rightLineStroke.png';
import Link from "next/link";
export default function Footer() {
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    const router = useRouter();
    return (
        <div>
            <footer>
                {/* <div className="content">
                    <div className="left box">
                        <div className="logo">
                            <Image src={logo} alt="logo" />
                            <p>A Gitam Club . We learn,We build and We share</p>
                            <p>codexclub@gitam.in</p>
                        </div>
                    </div>
                    <div className="middle box">
                        <div className="topic">Quick Links</div>
                        <div>
                            <Link href="/">Home</Link>
                        </div>
                        <div>
                            <Link href="/AboutUs">About</Link>
                        </div>
                        <div>
                            <Link href="/UnderConstruction">Domains</Link>
                        </div>
                        <div>
                            <Link href="/UnderConstruction">Members</Link>
                        </div>
                        <div>
                            <Link href="/UnderConstruction">Resources</Link>
                        </div>
                    </div>
                    <div className="middle box">
                        <div className="topic">Services</div>
                        <div>
                            <Link href="/UnderConstruction">Resources</Link>
                        </div>
                        <div>
                            <Link href="/UnderConstruction">Practice typing</Link>
                        </div>
                    </div>
                    <div className="lower">
                        <div className="topic">Contact us</div>
                        <div className="email">
                            <a className="contact_num" href="mailto: codexclub@gitam.in">
                                <i className="fas fa-envelope"></i>codexclub@gitam.in
                            </a>
                        </div>
                    </div>
                    <div className="right box">
                        <div className="topic">Follow us</div>
                        <div className="media-icons">
                            <a href="https://discord.gg/QaytX8tA">
                                <Image src={disc} alt="" />
                            </a>
                            <a href="https://github.com/c-code-x">
                                <Image src={git} alt="" />
                            </a>
                            <a href="https://www.instagram.com/codex_gitam/">
                                <Image src={insta} alt="" />
                            </a>
                            <a href="https://www.youtube.com/@codexgitam3817">
                                <Image src={utube} alt="" />
                            </a>
                        </div>
                    </div>
                </div> */}

                <div className="footerTopContainer">

                    <div className="footer-top-left">
                        <Image src={logo} alt="footer-logo" className="footer-logo"/>
                        <p className="footer-content">
                            <span className="lines-stroke-1"><Image src={leftLines} alt="left-lines-stroke"/></span>
                            CODEX is a technical club at <br />
                            GITAM University, Bengaluru 
                            <span className="lines-stroke-2"><Image src={rightLines} alt="right-lines-stroke"/></span>
                        </p>
                    <div className={"socialLinks"}>
                        <a href="#">
                            <Image src={insta} alt="Instagram"/>
                        </a>
                        <a href="#">
                            <Image src={twitter} alt="Twitter"/>
                        </a>
                        <a href="#">
                            <Image src={linkedIn} alt="LinkedIn"/>
                        </a>
                        <a href="#">
                            <Image src={whatsApp} alt="WhatsApp"/>
                        </a>
                        <a href="#">
                            <Image src={youtube} alt="YouTube"/>
                        </a>
                        <a href="#">
                            <Image src={spotify} alt="Spotify"/>
                        </a>
                    </div>
                    </div>
                    <div className="footer-top-right">
                            <p>CODEX Club,</p>
                            <p>GITAM University, Bengaluru campus</p>
                            <p>Karnataka - 561203.</p>
                            <p><a className="mail-to" href="mailto:codex@gitam.in">codex@gitam.in</a></p>
                            <p>+91-12345 67890</p>
                    </div>
                </div>

                {/* <div className="footr">
                    <div className="footr_1">
                        <div className="foot1">Terms& Conditions</div>
                        <div className="foot2" onClick={goToTop}>
                            Back to Top
                        </div>
                    </div>
                    <div className="foot3"><p>Copyright © 2023 <Link href="/LandingPage">CodeX</Link> All rights reserved</p></div>
                </div> */}
            </footer>
        </div>
    );
}
