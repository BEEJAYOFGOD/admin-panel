import { useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import { SearchIcon } from "lucide-react";
import { MoonIcon, MoonStarIcon } from "lucide-react";

const DasboardLayout = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    return (
        <section
            className={`grid h-screen  ${
                isCollapsed ? "grid-cols-[auto_2fr]" : "grid-cols-[200px_2fr]"
            }`}
        >
            <Sidebar
                isCollapsed={isCollapsed}
                setIsCollapsed={setIsCollapsed}
            />
            <div className="h-full overflow-auto">
                <div className="flex border-b border-gray-300 p-3 justify-between sticky top-0 bg-white">
                    <div className="flex gap-3 items-center border rounded-sm px-3  border-blue-500">
                        <SearchIcon className="text-blue-500 w-6" />
                        <input
                            type="search"
                            name="search"
                            id=""
                            className="my-auto p-2 focus:outline-0  border-blue-500"
                        />
                    </div>
                    <div className="flex gap-6 items-center">
                        <div>
                            <div className="border rounded-full h-8 w-8"></div>
                        </div>
                    </div>
                </div>

                <Outlet />
            </div>
        </section>
    );
};

export default DasboardLayout;
