import React, { useEffect, useState } from "react";
import styles from "../styles/NavBar.module.css";
import logo from "../assests/Logo.png";
import Image from "next/image";
import Link from "next/link";
import bar from "../assests/burger.png";
import menu from '../assests/menu.png';
import arrow from "../assests/rightarrow.png";

const NavBar = () => {
    const [animate, setAnimate] = useState(false);
    const [screen, setScreen] = useState(1001);
    const [state, setState] = useState("none");
    const changeState = () => {
        state == "none" ? setState("block") : setState("none");
    };
    useEffect(() => {
        if (window.innerWidth <= 800) {
            setScreen(window.innerWidth);
        }
        const changeColor = () => {
            if (window.scrollY > 200) setAnimate(true);
            else setAnimate(false);
        };
        window.addEventListener("scroll", changeColor);
        window.addEventListener("resize", () => {
            setScreen(window.innerWidth);
        });
    }, []);

    return (
        <div className={animate ? "navactive" : "nav"}>
            <div className={"nav_box1"}>
                <Link href={"/"}>
                    <Image className={"logo_nav"} src={logo} alt="logo" />
                </Link>
            </div>
            <div className={"nav_box2"}>
                <ul className={"navlink"} style={{ display: screen <= 800 ? state : "block" }}>
                    <li className="li_nav">
                        <Link className={"link"} href={"/"}>
                            HOME
                        </Link>
                    </li>
                    <li className="li_nav">
                        <Link className={"link"} href={"/Members"}>
                            TEAM
                        </Link>
                    </li>
                    <li className="li_nav">
                        <Link className={"link"} href={"/UnderConstruction"}>
                            COURSE
                        </Link>
                    </li>
                    <li className="li_nav">
                        <Link className={"link"} href={"/Events"}>
                            NEWSLETTER
                        </Link>
                    </li>
                    <li className="li_nav">
                        <Link className={"link"} href={"/UnderConstruction"}>
                            CONTACT
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={"linkbtn"}>
                <button onClick={changeState} style={{ background: "none", border: "none" }}>
                    <Image className={"mobbtn"} src={state == "block" ? arrow : menu} alt={"f"} />
                </button>
            </div>
        </div>
    );
};
export default NavBar;
