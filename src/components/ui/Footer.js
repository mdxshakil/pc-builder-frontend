import { BsTwitter, BsYoutube, BsFacebook } from "react-icons/bs";
import { FaComputer } from "react-icons/fa6";

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <div>
                    <span className="footer-title">Servicing</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Customizing</a>
                    <a className="link link-hover">Repairing</a>
                    <a className="link link-hover">Wholesale</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact us</a>
                    <a className="link link-hover">Partner</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms & Conditions</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
            <footer className="footer px-10 py-4 border-t bg-neutral text-base-content border-base-300">
                <div className="items-center grid-flow-col gap-6">
                    <FaComputer className="text-3xl" />
                    <p>PC Empire Industries Ltd. <br />Providing reliable, affordable, customizable services since 1990</p>
                </div>
                <div className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-8">
                        <a href="https://twitter.com" target="_blank" className="text-3xl hover:text-sky-500 transition-all"> <BsTwitter /> </a>
                        <a href="https://youtube.com" target="_blank" className="text-3xl hover:text-red-500 transition-all"> <BsYoutube /> </a>
                        <a href="https://facebook.com" target="_blank" className="text-3xl hover:text-blue-600 transition-all"> <BsFacebook /> </a>
                    </div>
                </div>
            </footer>
            <p className="text-center m-0 p-0 text-sm">&copy; PC Empire 2023 </p>
        </div>
    );
};

export default Footer;