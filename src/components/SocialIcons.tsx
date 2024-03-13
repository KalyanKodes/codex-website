
import styles from "../styles/Glimpse.module.css";
import Image from "next/image";
import Calender from "@/components/Calender";
import insta from '../assests/instagramIcon.png';
import linkedIn from '../assests/linkedInIcon.png';
import twitter from '../assests/twitterIcon.png';
import whatsApp from '../assests/whatsappIcon.png';
import youtube from '../assests/youtubeIcon.png';
import spotify from '../assests/spotifyIcon.png';

export default function SocialIcons(){
    return(
        <div className={styles.socialLinks}>
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
    )
}