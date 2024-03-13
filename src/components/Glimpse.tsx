import styles from "../styles/Glimpse.module.css";
import saly from "../assests/Saly-10_1.png";
import crown from "../assests/crown.png";
import Image from "next/image";
import scroll from '../assests/scrollDown.png';
import left from '../assests/arrowLeft.png';
import right from '../assests/arrowRight.png';
import { MouseEventHandler, MutableRefObject, useRef } from "react";
import { Calendar } from "react-calendar";
import SocialIcons from "./SocialIcons";
import AboutUs from "@/pages/AboutUs";
import worldMap from '../assests/worldMap.png';

const Glimpse = () => {
    const calendar = useRef<HTMLDivElement>(undefined!);
    const scrollDown = (ref: MutableRefObject<HTMLDivElement>) => {
        console.log(ref);
        window.scrollTo({
            top: ref.current.offsetTop,
            behavior: "smooth",
        });
    };
    return (
        <div>
            <div className={styles.container1}>
                <div className={styles.info}>
                    <small>Hello People!</small>
                    <h1>
                        <span>
                            <Image src={crown} alt="crown" />
                        </span>
                    We’re student’s Technical club.
                    </h1>
                    {/* <p>
                        CODEX is a student-run organization at the University of GITAM <br />
                        that aims to provide students with the resources and opportunities to <br />
                        learn about computer science and software development. We learn, <br />
                        we build, and we share!
                    </p> */}
                    {/* <div onClick={() => scrollDown(calendar)} className={styles.btnContainer}>
                        <button>Explore now</button>
                    </div> */}

                    <SocialIcons/>
                


                </div>
                <div className={styles.img1Container}>
                    <div className={styles.animate}>
                        <Image src={scroll} alt="scroll-down" />
                    </div>
                    <div className={styles.salyContainer}>
                        <Image src={left} alt="left-arrow"/>
                        <Image src={right} alt="right-arrow"/>
                    </div>
                </div>
            </div>
            <div>
                    <AboutUs/>
            <div className={styles.worldMap}>
                        <Image src={worldMap} alt="world-map"/>
            </div>
            </div>
        </div>

    );
  };

export default Glimpse;
