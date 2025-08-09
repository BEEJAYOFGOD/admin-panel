import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
    Users,
    Home,
    Users2Icon,
    File,
    MessageSquareIcon,
    BadgeHelp,
    Package,
    User,
    BellRingIcon,
    SettingsIcon,
    ChevronRight,
    ChevronDown,
} from "lucide-react";
import Modal from "./modal";

export const Sidebar = ({ isCollapsed, setIsCollapsed }) => {
    const [expandedSections, setExpandedSections] = useState({});
    const [isMobile, setIsMobile] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const location = useLocation();

    // Check if screen is mobile
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);

        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Close mobile menu when clicking outside or on navigation
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (
                isMobile &&
                mobileMenuOpen &&
                !event.target.closest(".sidebar-container")
            ) {
                setMobileMenuOpen(false);
            }
        };

        document.addEventListener("mousedown", handleOutsideClick);
        return () =>
            document.removeEventListener("mousedown", handleOutsideClick);
    }, [isMobile, mobileMenuOpen]);

    const toggleSection = (section) => {
        setExpandedSections((prev) => ({
            ...prev,
            [section]: !prev[section],
        }));
    };

    const handleNavClick = () => {
        if (isMobile) {
            setMobileMenuOpen(false);
        }
    };

    const offModal = () => {
        setShowModal(false);
    };

    // SVG icons as React components

    const MenuIcon = ({ width }) => (
        <svg
            className={`w-${width} h-${width}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
            />
        </svg>
    );

    const XIcon = ({ width }) => (
        <svg
            className={`w-${width} h-${width}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
            />
        </svg>
    );

    const menuItems = [
        {
            id: "core",
            title: "CORE",
            items: [
                {
                    icon: Home,
                    label: "Dashboard",
                    path: "/dashboard",
                },
                {
                    icon: Users,
                    label: "Students",
                    path: "/dashboard/students",
                },
                {
                    icon: Users2Icon,
                    label: "Coaches",
                    path: "/dashboard/coaches",
                },
                {
                    icon: Package,
                    label: "Resources",
                    path: "/dashboard/resources",
                },
                {
                    icon: MessageSquareIcon,
                    label: "Groups",
                    path: "/dashboard/groups",
                },
                {
                    icon: File,
                    label: "Programs",
                    path: "/dashboard/programs",
                },
                {
                    icon: User,
                    label: "Avatars",
                    path: "/dashboard/avatars",
                },
            ],
        },
        {
            id: "general",
            title: "GENERAL",
            items: [
                {
                    icon: BellRingIcon,
                    label: "Notification",
                    path: "/notifications",
                },
                {
                    icon: SettingsIcon,
                    label: "Settings",
                    path: "/settings",
                    hasDropdown: true,
                    subItems: [
                        {
                            label: "General Settings",
                            path: "/settings/general",
                        },
                        { label: "Security", path: "/settings/security" },
                    ],
                },
                { icon: BadgeHelp, label: "Support", path: "/support" },
            ],
        },
    ];

    return (
        <div className="overflow-y-auto overflow-clip">
            {/* Mobile Hamburger Menu Button */}
            {isMobile && (
                <button
                    onClick={() => setMobileMenuOpen(true)}
                    className="fixed top-4 left-4 z-50 md:hidden bg-white border border-gray-200 rounded-lg p-2 shadow-lg"
                >
                    <MenuIcon />
                </button>
            )}

            {/* Overlay for mobile */}
            {isMobile && mobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 bg-opacity-50 z-40 md:hidden"
                    onClick={() => setMobileMenuOpen(false)}
                />
            )}

            {/* Sidebar */}
            <div
                className={`sidebar-container bg-white  transition-all duration-300 ${
                    isMobile
                        ? `fixed top-0 left-0 h-full z-50 transform ${
                              mobileMenuOpen
                                  ? "translate-x-0"
                                  : "-translate-x-full"
                          } w-64`
                        : `relative ${isCollapsed ? "w-24" : "w-64"}`
                }`}
            >
                {/* Header */}
                <div className="p-4">
                    <div
                        className={`flex   items-center ${
                            isCollapsed ? "justify-center" : "justify-between"
                        }`}
                    >
                        <div className="flex items-center justify-between space-x-3">
                            {(!isCollapsed || isMobile) && (
                                <>
                                    <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                                        <div className="grid grid-cols-2 gap-0.5">
                                            <div className="w-1 h-1 bg-white rounded-full"></div>
                                            <div className="w-1 h-1 bg-white rounded-full"></div>
                                            <div className="w-1 h-1 bg-white rounded-full"></div>
                                            <div className="w-1 h-1 bg-white rounded-full"></div>
                                        </div>
                                    </div>
                                    <span className="font-bold text-blue-600 text-lg">
                                        TheYunion
                                    </span>
                                </>
                            )}
                        </div>

                        {/* Desktop toggle button */}
                        {!isMobile && (
                            <button
                                onClick={() => setIsCollapsed(!isCollapsed)}
                                className="cursor-pointer  p-1 hover:bg-gray-100 rounded"
                            >
                                <ChevronRight
                                    className={`${
                                        isCollapsed ? "rotate-180" : "rotate-0"
                                    } text-blue-950 hover:opacity-60`}
                                />
                            </button>
                        )}

                        {/* Mobile close button */}
                        {isMobile && (
                            <button
                                onClick={() => setMobileMenuOpen(false)}
                                className="p-1 hover:bg-gray-100 rounded"
                            >
                                <XIcon />
                            </button>
                        )}
                    </div>
                </div>

                {/* Navigation */}
                <div className="p-4 space-y-6 overflow-y-auto">
                    {menuItems.map((section) => (
                        <div key={section.id}>
                            {(!isCollapsed || isMobile) && (
                                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                                    {section.title}
                                </h3>
                            )}

                            <nav className="space-y-4">
                                {section.items.map((item, index) => (
                                    <div key={index}>
                                        {item.hasDropdown ? (
                                            <div>
                                                <button
                                                    onClick={() => {
                                                        if (!isCollapsed) {
                                                            toggleSection(
                                                                `${section.id}-${index}`
                                                            );

                                                            return;
                                                        } else if (showModal) {
                                                            setShowModal(false);
                                                            return;
                                                        }
                                                        setShowModal(true);
                                                    }}
                                                    className="w-full flex items-center space-x-3 px-3 justify-center py-3 rounded-lg text-left transition-colors text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                                >
                                                    <item.icon />

                                                    {(!isCollapsed ||
                                                        isMobile) && (
                                                        <>
                                                            <span className="flex-1 text-sm font-medium">
                                                                {item.label}
                                                            </span>
                                                            <div
                                                                className={`transition-transform ${
                                                                    expandedSections[
                                                                        `${section.id}-${index}`
                                                                    ]
                                                                        ? "rotate-180"
                                                                        : ""
                                                                }`}
                                                            >
                                                                <ChevronDown />
                                                            </div>
                                                        </>
                                                    )}

                                                    {showModal && (
                                                        <Modal
                                                            onClose={offModal}
                                                            isOpen={showModal}
                                                        >
                                                            <div className="m-3">
                                                                Lorem ipsum
                                                                dolor sit amet
                                                                consectetur
                                                                adipisicing
                                                                elit. Asperiores
                                                                iusto
                                                                exercitationem,
                                                                doloribus atque,
                                                                labore quod iure
                                                                excepturi
                                                                facilis corporis
                                                                impedit
                                                                consequatur eius
                                                                praesentium
                                                                laboriosam
                                                                consectetur
                                                                omnis, nulla
                                                                recusandae ipsa
                                                                tempore.
                                                            </div>
                                                        </Modal>
                                                    )}
                                                </button>
                                                {/* Dropdown items */}
                                                {expandedSections[
                                                    `${section.id}-${index}`
                                                ] &&
                                                    (!isCollapsed ||
                                                        isMobile) &&
                                                    item.subItems && (
                                                        <div className="ml-8 mt-1 space-y-1">
                                                            {item.subItems.map(
                                                                (
                                                                    subItem,
                                                                    subIndex
                                                                ) => (
                                                                    <NavLink
                                                                        key={
                                                                            subIndex
                                                                        }
                                                                        href={
                                                                            subItem.path
                                                                        }
                                                                        onClick={
                                                                            handleNavClick
                                                                        }
                                                                        className="block text-sm border w-full text-left px-3 py-2  rounded transition-colors text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                                                                    >
                                                                        {
                                                                            subItem.label
                                                                        }
                                                                    </NavLink>
                                                                )
                                                            )}
                                                        </div>
                                                    )}
                                            </div>
                                        ) : (
                                            <NavLink
                                                to={item.path}
                                                onClick={handleNavClick}
                                                end
                                                title={
                                                    isCollapsed
                                                        ? item.label
                                                        : null
                                                }
                                                className={({ isActive }) =>
                                                    `md:w-full flex  items-center px-3  space-x-3 text-blue-950  py-3 rounded-lg transition-colors group    hover:text-gray-900 ${
                                                        isCollapsed
                                                            ? "justify-center"
                                                            : ""
                                                    } ${
                                                        isActive
                                                            ? "bg-cyan-700/15 ring-2 hover:bg-cyan-700/20   ring-cyan-700 "
                                                            : "border-transparent hover:bg-gray-100 hover:ring-gray-100 hover:ring"
                                                    }`
                                                }
                                            >
                                                <item.icon
                                                    className={` ${
                                                        isCollapsed
                                                            ? "mx-auto"
                                                            : ""
                                                    }`}
                                                />
                                                <p
                                                    className={`text-lg ${
                                                        isCollapsed
                                                            ? "hidden invisible"
                                                            : ""
                                                    }`}
                                                >
                                                    {item.label}
                                                </p>
                                            </NavLink>
                                        )}
                                    </div>
                                ))}
                            </nav>
                        </div>
                    ))}
                </div>

                {/* Bottom branding */}
                {(!isCollapsed || isMobile) && (
                    <div className="absolute bottom-4 left-4">
                        <div className="bg-blue-600 text-white px-3 py-1 rounded text-xs font-medium">
                            TheYunion
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
