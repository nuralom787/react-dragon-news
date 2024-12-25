import { useEffect, useState } from "react";
import Header from "../Header/Header";
import LeftSideNav from "../LeftSideNav/LeftSideNav";
import Navbar from "../Navbar/Navbar";
import RightSideNav from "../RightSideNav/RightSideNav";
import NewsCard from "../NewsCard/NewsCard";
import BrakingNews from "../BrakingNews/BrakingNews";

const Home = () => {
    const [newses, setNewses] = useState([]);


    useEffect(() => {
        fetch("news.json")
            .then(res => res.json())
            .then(data => {
                setNewses(data)
                console.log(data)
            })
    }, []);


    return (
        <div className="font-poppins">
            <Header></Header>
            <BrakingNews></BrakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 h-[150vh]">

                {/* Left Side Nav */}
                <div className="col-span-1 border border-gray-400">
                    <LeftSideNav />
                </div>


                {/* Home Component */}
                <div className="md:col-span-2 border border-gray-400 p-6">
                    <div className="text-start font-semibold text-xl text-[#403F3F] mb-4">
                        <h1>Dragon News Home</h1>
                    </div>
                    <div className="space-y-4">
                        {
                            newses.map(news => <NewsCard
                                key={news._id}
                                news={news}
                            ></NewsCard>)
                        }
                    </div>
                </div>


                {/* Right Side Nav */}
                <div className="col-span-1 border border-gray-400">
                    <RightSideNav />
                </div>
            </div>
        </div>
    );
};

export default Home;