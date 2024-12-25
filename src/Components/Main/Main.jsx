import { Outlet } from "react-router";

const Main = () => {
    return (
        <div className="max-w-7xl mx-auto px-2">
            <Outlet />
        </div>
    );
};

export default Main;