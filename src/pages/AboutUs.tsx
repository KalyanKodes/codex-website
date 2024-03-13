import React from "react";
import { NextPage } from "next";
import NavBar from "@/components/NavBar";
import styles from "../styles/AboutUs.module.css";
import Image from "next/image";
import imagei from "../assests/instagram.png";
import imaged from "../assests/discordlogo.png";
import image1 from "../assests/image 4.png";
import image2 from "../assests/Cones.jpg";
import SocialMediaCount from "@/components/SocialMediaCount";
import Youtube from "@/api/Youtube";
import imagey from "../assests/youtube.png";
import abtmem from "../assests/memories/abtmem.jpg";
import Footer from "@/components/Footer";
import CAT from "../assests/posters/THOR_LOVE_2.jpg";
import cpro from "../assests/posters/c-programming.jpg";
import codify from "../assests/posters/web_design_.jpg";
import snap from "../assests/snapimg.png";
import Events from "@/components/Events";
import data from "../assests/jsonFIles/eventsgridcontent.json";
import Link from "next/link";
import lights from "../assests/Lights.png";
import side1 from "../assests/Untitled-8 1.png";
import side2 from "../assests/Untitled-8 2.png";
import star from '../assests/aboutUsStar.png';
const AboutUs: NextPage = () => {
    // const details = data[0].eventnames;
    // const subscribers = Youtube();
    return (
        <div className={styles.abtpagecontainer}>
        {/* <div className={styles.abtheader} >
        <div>
            <NavBar/>
        </div>
            <div className={styles.abtheadertxt}>
        <p>Who Are We?</p>
            </div>
        </div> */}
            {/* <div className={styles.abtsubdiv1}>
                <Image className={styles.conesimg} src={image2} alt={""} />
                <div className={styles.abtsubdiv1header}>
                    <p>Our Followers Count</p>
                </div>
                <Image className={styles.guyimg} src={image1} alt={""} />
            </div> */}
                {/* <div className={styles.ssmdiv}>
                    <SocialMediaCount count = {subscribers} type = "Subscribers" image = {imagey}/>
                    <SocialMediaCount count = "600" type = "Followers" image = {imagei}/>
                    <SocialMediaCount count = "550" type = "Members" image = {imaged}/>

                </div> */}
                <Image src={star} alt="star-image" className={styles.starImage}/>
            <div className={styles.aboutus}>
                    <div className={styles.flexbox1}>
                    <div>
                    <p className={styles.abtheading}>About Us</p>
                    </div>
                        <b className={styles.abtcontent}>
                        CODEX is a dynamic club catering to all your computing needs. From technical workshops to fun events like hackathons and gaming nights, we've got you covered. Join us for an endless array of opportunities to learn, develop skills, and have a great time!
                        </b><br />
                        <Link href={"/UnderConstruction"}><button className={styles.wanttojoin}>MEET THE TEAM</button></Link>
                    </div>
                    <div>
                        <Image className={styles.abtmem} src={abtmem} style={{marginBlock:"10px"}} alt={""} />
                    </div>
            </div>
                    
            {/* <div className={styles.events}>
                <div className={styles.eventheader}>
                    <p>Our Events</p>
                </div>
                <div className={styles.bg}></div>
                <div className={styles.eventgrid}>
                    <Events
                        title={details[0].title}
                        description={details[0].description}
                        image={cpro}
                    />
                    <Events
                        title={details[1].title}
                        description={details[1].description}
                        image={CAT}
                    />
                    <Events
                        title={details[2].title}
                        description={details[2].description}
                        image={codify}
                    />
                    <Events
                        title={details[3].title}
                        description={details[3].description}
                        image={snap}
                    />
                </div>
                <Link href={"/Event"}>
                    <button className={styles.viewmore}>View More</button>
                </Link>
                <Image className={styles.light} alt={""} src={lights}></Image>
            </div> */}
            {/* <Footer /> */}
        </div>
    );
};
export default AboutUs;
