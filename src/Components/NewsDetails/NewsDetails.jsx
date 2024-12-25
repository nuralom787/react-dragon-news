import { Link, useParams } from "react-router";
import Header from "../Header/Header";
import RightSideNav from "../RightSideNav/RightSideNav";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import Navbar from "../Navbar/Navbar";


const NewsDetails = () => {
    const { id } = useParams();
    const [news, setNews] = useState({});

    const { title, details, image_url } = news;


    useEffect(() => {
        fetch("/news.json")
            .then(res => res.json())
            .then(data => {
                const idData = data.find(dt => dt._id == id);
                setNews(idData);
            })
    }, []);


    return (
        <div className="font-poppins">
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-4 gap-4 text-start">
                <div className="col-span-3 p-4">
                    <h1 className="font-semibold text-xl text-[#403F3F] mb-7">Dragon News</h1>
                    <div className="space-y-5">
                        <img className="w-full" src={image_url} alt="" />
                        <h1 className="font-bold text-2xl text-[#403F3F]">{title}</h1>
                        <p className="font-normal text-base text-[#706F6F]">{details}</p>
                        <Link to="/" className="bg-[#D72050] text-white font-medium text-xl flex items-center gap-4 w-fit px-4 py-2">
                            <FaArrowLeft />
                            All News In This Categories
                        </Link>
                    </div>
                </div>
                <div className="col-span-1">
                    <RightSideNav />
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;