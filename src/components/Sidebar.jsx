import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

export const Sidebar = ({ isCollapsed, setIsCollapsed }) => {
    const [expandedSections, setExpandedSections] = useState({});
    const [isMobile, setIsMobile] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

    // SVG icons as React components
    const DashboardIcon = () => (
        <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
        </svg>
    );

    const UsersIcon = () => (
        <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
            />
        </svg>
    );

    const CoachIcon = () => (
        <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
        </svg>
    );

    const BookIcon = () => (
        <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
        </svg>
    );

    const MessageIcon = () => (
        <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
        </svg>
    );

    const FileIcon = () => (
        <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
        </svg>
    );

    const ImageIcon = () => (
        <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
        </svg>
    );

    const BellIcon = () => (
        <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
        </svg>
    );

    const SettingsIcon = () => (
        <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
        </svg>
    );

    const HelpIcon = () => (
        <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
        </svg>
    );

    const MenuIcon = () => (
        <svg
            className="w-6 h-6"
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

    const XIcon = () => (
        <svg
            className="w-6 h-6"
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

    const ChevronDownIcon = () => (
        <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
            />
        </svg>
    );

    const ChevronRightIcon = () => (
        <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
            />
        </svg>
    );

    const menuItems = [
        {
            id: "core",
            title: "CORE",
            items: [
                {
                    icon: DashboardIcon,
                    label: "Dashboard",
                    path: "/dashboard",
                },
                {
                    icon: UsersIcon,
                    label: "Students",
                    path: "/dashboard/students",
                },
                {
                    icon: CoachIcon,
                    label: "Coaches",
                    path: "/dashboard/coaches",
                },
                {
                    icon: BookIcon,
                    label: "Resources",
                    path: "/dashboard/resources",
                },
                {
                    icon: MessageIcon,
                    label: "Groups",
                    path: "/dashoard/groups",
                },
                {
                    icon: FileIcon,
                    label: "Programs",
                    path: "/dashboard/programs",
                },
                {
                    icon: ImageIcon,
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
                    icon: BellIcon,
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
                { icon: HelpIcon, label: "Support", path: "/support" },
            ],
        },
    ];

    return (
        <>
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
                        : `relative ${isCollapsed ? "w-32" : "w-64"}`
                }`}
            >
                {/* Header */}
                <div className="p-4">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-3">
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
                                className="cursor-pointer border-none p-1 hover:bg-gray-100 rounded"
                            >
                                <ChevronRightIcon />
                                <style jsx>{`
                                    .rotate-180 {
                                        transform: rotate(180deg);
                                    }
                                `}</style>
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
                            <nav className="space-y-2">
                                {section.items.map((item, index) => (
                                    <div key={index}>
                                        {item.hasDropdown ? (
                                            <div>
                                                <button
                                                    onClick={() =>
                                                        toggleSection(
                                                            `${section.id}-${index}`
                                                        )
                                                    }
                                                    className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors text-gray-600 hover:bg-gray-50 hover:text-gray-900"
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
                                                                <ChevronDownIcon />
                                                            </div>
                                                        </>
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
                                                                        className="block w-full text-left px-3 py-2 text-sm rounded transition-colors text-gray-600 hover:text-gray-900 hover:bg-gray-50"
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
                                                className={({ isActive }) =>
                                                    `md:w-full w-16 border flex items-center space-x-3 text-blue-950 px-3 py-2 rounded-lg transition-colors group hover:bg-gray-50 hover:text-gray-900 ${
                                                        isActive
                                                            ? "bg-blue-200/60"
                                                            : "border-transparent"
                                                    }`
                                                }
                                            >
                                                <item.icon className="border w-full" />
                                                <p>{item.label}</p>
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
        </>
    );
};
