import { useEffect, useState } from "react";
import { NavLink } from "react-router";

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);


    useEffect(() => {
        fetch("categories.json")
            .then(res => res.json())
            .then(data => setCategories(data))
    }, []);


    return (
        <div className="text-start p-6 space-y-6">
            <h2 className="font-semibold text-xl text-[#403F3F] mb-2">All Categories</h2>
            <div className="pl-6">
                <ul className="space-y-6">
                    {
                        categories.map(category => <li
                            key={category.id}
                            className="font-semibold text-xl"
                        >
                            <NavLink to={`/${category.name}/${category.id}`}>{category.name}</NavLink>
                        </li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default LeftSideNav;