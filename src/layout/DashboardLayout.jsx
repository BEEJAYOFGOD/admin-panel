import { useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import { SearchIcon } from "lucide-react";
import { MoonIcon, MoonStarIcon } from "lucide-react";

const DasboardLayout = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    return (
        <section
            className={`grid h-screen z-99 ${
                isCollapsed ? "grid-cols-[auto_2fr]" : "grid-cols-[200px_2fr]"
            }`}
        >
            <Sidebar
                isCollapsed={isCollapsed}
                setIsCollapsed={setIsCollapsed}
            />
            <div className="min-h-full overflow-auto">
                <div className="flex border-b border-gray-300 p-3 z-10 justify-end sticky top-0 bg-white">
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
