import React from "react";
// import footerImg from "../../assets/footerImg.jpg"
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import footerImg from "../../assets/footerImg.jpg"

const FooterLinks = [
    {
        title: "Home",
        link: "/#"
    },
    {
        title: "About",
        link: "/#about"
    },
    {
        title: "Contact",
        link: "/#Contact"
    },
    {
        title: "Blog",
        link: "/#blog"
    },
]

const bgImage = {
    backgroundImage: `url(${footerImg})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "400px",
    width: "100%",
}

const Footer = () => {
    return (
        <div style={bgImage} className="text-white">
            <div className="bg-black/40 min-h-[400px]">
                <div className="container grid md:grid-cols-3 pb-20 pt-5">
                    {/* company details */}
                    <div className="py-8 px-4">
                        <a href="#" className="font-semibold tracking-widest text-2xl sm:text-3xl font-cursive">Coffee Cafe</a>
                        <p>
                            {" "}
                            Crafted Coffee, Cozy vibes, Unforgettable Moments - Your Perect Espresso Escape
                        </p>
                        <a href="https://www.youtube.com/channel/UC1H-a1MKEFXRiFIGNLcy7gQ" target="blank" className="inline-block bg-[#3d2517] py-2 px-4 mt-5 text-sm rounded-full ">Visit our YouTube Channel</a>
                    </div>
                    {/* footer links */}
                    <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
                        {/* first col links */}
                        <div className="py-8 px-4">
                            <h1 className="text-xl font-semibold sm:text-left mb-3">Footer Links</h1>
                            <ul className="space-y-3">
                                {FooterLinks.map((data, index) => (
                                    <li key={index}>
                                        <a href={data.link} className="inline-block hover:scale-105 duration-200">{data.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* second col links */}
                        <div className="py-8 px-4">
                            <h1 className="text-xl font-semibold sm:text-left mb-3">Quick Links</h1>
                            <ul className="space-y-3">
                                {FooterLinks.map((data, index) => (
                                    <li key={index}>
                                        <a href={data.link} className="inline-block hover:scale-105 duration-200">{data.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        {/* Company Address Section */}
                        <div className="py-8 px-4 col-span-2 sm:col-auto">
                            <h1 className="text-xl font-semibold sm:text-left mb-3">Address</h1>
                            <div>
                                <p className="mb-3">Noida, India</p>
                                <p>+91 1234567890</p>

                                {/* social links */}
                                <div className="space-x-3 mt-6">
                                    <a href="#">
                                        <FaFacebook className="text-3xl inline-block hover:scal-105 duration-200" />
                                    </a>
                                    <a href="#">
                                        <FaLinkedin className="text-3xl inline-block hover:scal-105 duration-200" />
                                    </a>
                                    <a href="#">
                                        <FaInstagramSquare className="text-3xl inline-block hover:scal-105 duration-200" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
