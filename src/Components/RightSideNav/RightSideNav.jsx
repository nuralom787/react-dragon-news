import { FaGoogle, FaGithub, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import swimming from '../../assets/swimming.png';
import Class from '../../assets/class.png';
import play from '../../assets/playground.png';

const RightSideNav = () => {
    return (
        <div className="space-y-6">
            {/* Login Section. */}
            <div className="p-6 space-y-4">
                <h1 className="text-start text-xl font-bold text-[#171717] mb-2">Login With</h1>
                <button className="btn btn-outline text-[#325BCE] outline-[#325BCE] w-full">
                    <FaGoogle />
                    Login With Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub />
                    Login With Github
                </button>
            </div>

            {/* Find US Section */}
            <div className="p-6 space-y-4">
                <h1 className="text-start text-2xl font-bold text-[#171717] mb-2">Find Us On</h1>
                <div className="">
                    <a target="_blank" className="font-medium text-base text-[#706F6F] flex items-center gap-6 p-4 border border-gray-800 rounded-t-lg" href="https://facebook.com">
                        <FaFacebookF className="text-[#3B599C] text-xl" />
                        Facebook
                    </a>
                    <a target="_blank" className="font-medium text-base text-[#706F6F] flex items-center gap-6 p-4 border border-t-0 border-b-0 border-gray-800" href="https://twitter.com">
                        <FaTwitter className="text-[#58A7DE] text-xl" />
                        Twitter
                    </a>
                    <a target="_blank" className="font-medium text-base text-[#706F6F] flex items-center gap-6 p-4 border border-gray-800 rounded-b-lg" href="https://instagram.com">
                        <FaInstagram className="text-[#D82D7E] text-xl" />
                        Instagram
                    </a>
                </div>
            </div>

            {/* Q Zone */}
            <div className="p-6 space-y-4">
                <h1 className="text-start text-2xl font-bold text-[#171717] mb-2">Q-Zone</h1>
                <div className="space-y-2">
                    <div>
                        <img src={swimming} alt={swimming} />
                    </div>
                    <div>
                        <img src={Class} alt={Class} />
                    </div>
                    <div>
                        <img src={play} alt={play} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightSideNav;