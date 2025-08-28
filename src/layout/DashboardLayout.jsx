import { useState, useEffect, useRef } from "react";
import { Sidebar } from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import { Menu, X } from "lucide-react";

const DasboardLayout = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Handle click outside and escape key
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setIsDropdownOpen(false);
            }
        };

        const handleEscapeKey = (event) => {
            if (event.key === "Escape") {
                setIsDropdownOpen(false);
            }
        };

        if (isDropdownOpen) {
            document.addEventListener("mousedown", handleClickOutside);
            document.addEventListener("keydown", handleEscapeKey);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEscapeKey);
        };
    }, [isDropdownOpen]);

    return (
        <section
            className={`md:grid border   h-screen z-99 ${
                isCollapsed ? "grid-cols-[auto_2fr]" : "grid-cols-[200px_2fr]"
            }`}
        >
            <Sidebar
                isCollapsed={isCollapsed}
                setIsCollapsed={setIsCollapsed}
            />

            <div className="md:max-h-screen overflow-y-scroll">
                <div className="flex  border-gray-300 p-3 z-10 justify-end  md:top-0 md:sticky fixed right-0 w-full bg-white">
                    {/* user avatar */}

                    <div
                        className="flex gap-6 items-center border relative "
                        ref={dropdownRef}
                    >
                        <div>
                            <div
                                className="border rounded-full h-10 w-10 bg-gray-200 cursor-pointer"
                                onClick={() =>
                                    setIsDropdownOpen(!isDropdownOpen)
                                }
                            ></div>

                            {/* Dropdown Menu */}
                            {isDropdownOpen && (
                                <div className="absolute right-0 top-14 bg-white border border-gray-300 rounded-md shadow-lg py-1 w-48 z-20">
                                    <button
                                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        onClick={() => setIsDropdownOpen(false)}
                                    >
                                        My Account
                                    </button>
                                    <button
                                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        onClick={() => setIsDropdownOpen(false)}
                                    >
                                        Settings
                                    </button>
                                    <hr className="border-gray-200 my-1" />
                                    <button
                                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                        onClick={() => setIsDropdownOpen(false)}
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="md:pt-0 pt-16">
                    <Outlet />
                </div>
            </div>
        </section>
    );
};

export default DasboardLayout;
