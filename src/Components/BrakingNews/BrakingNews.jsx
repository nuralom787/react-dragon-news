import Marquee from "react-fast-marquee";
import { Link } from "react-router";

const BrakingNews = () => {
    return (
        <div className="bg-gray-300 p-3">
            <div className='flex'>
                <button className='font-medium text-white text-xl bg-[#D72050] px-6 py-3'>Latest</button>
                <Marquee pauseOnHover={true} speed={150}>
                    <Link className='mr-10' to="/">1. I can be a React component, multiple React components, or just some text.....</Link>
                    <Link className='mr-10' to="/">2. I can be a React component, multiple React components, or just some text.....</Link>
                    <Link className='mr-10' to="/">3. I can be a React component, multiple React components, or just some text.....</Link>
                    <Link className='mr-10' to="/">4. I can be a React component, multiple React components, or just some text.....</Link>
                </Marquee>
            </div>
        </div>
    );
};

export default BrakingNews;