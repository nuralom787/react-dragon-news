import { FaRegBookmark, FaShareAlt, FaRegEye } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
    const { _id, title, image_url, rating, total_view, author, details } = news;



    return (
        <div className="font-poppins space-y-4 border border-black rounded-md">
            <div className="flex justify-between items-center bg-gray-300 p-5 rounded-t-md">
                <div className="flex items-center gap-2">
                    <img className="rounded-full w-10" src={author.img} alt="" />
                    <div className="text-start">
                        <p className="font-semibold text-base text-[#403F3F]">{author.name}</p>
                        <p className="font-normal text-sm text-[#706F6F]">{author.published_date}</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <FaRegBookmark className="font-thin text-2xl text-[#706F6F]" />
                    <FaShareAlt className="font-thin text-2xl text-[#706F6F]" />
                </div>
            </div>
            <div className="space-y-6 mx-5 py-5 border-b border-black">
                <h1 className="font-bold text-xl text-[#403F3F] text-start">{title}</h1>
                <img className="w-full" src={image_url} alt={title} />
                <p className="text-[#706F6F] text-start">
                    {details.substring(0, 300)}...
                    <Link to={`/news/${_id}`} className="text-[#F75B5F] ml-3">Read More...</Link>
                </p>
            </div>
            <div className="flex justify-between items-center mx-5 pb-5">
                <p className="text-[#706F6F] font-medium">{rating.number}</p>
                <p className="flex items-center gap-2 text-[#706F6F] font-medium"><FaRegEye className="text-xl" /> {total_view}</p>
            </div>
        </div>
    );
};

export default NewsCard;