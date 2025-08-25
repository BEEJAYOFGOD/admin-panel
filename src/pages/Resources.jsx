import {
    ExternalLink,
    Edit3,
    GraduationCap,
    Globe,
    Wrench,
    Heart,
    Home,
    UtensilsCrossed,
    Shield,
    Check,
} from "lucide-react";
import { useState } from "react";

const Resources = () => {
    const [indexState, setIndexState] = useState(0);

    const categories = [
        {
            name: "Student Resources",
            count: 2,
            icon: GraduationCap,
            active: true,
        },
        { name: "General Resources", count: 1, icon: Globe, active: false },
        { name: "Utility Resources", count: 1, icon: Wrench, active: false },
        { name: "Health Resources", count: 2, icon: Heart, active: false },
        { name: "Housing Resources", count: 2, icon: Home, active: false },
        {
            name: "Food Resources",
            count: 2,
            icon: UtensilsCrossed,
            active: false,
        },
        { name: "Cyber Safety", count: 0, icon: Shield, active: false },
    ];

    const resources = [
        [
            {
                title: "Math4Success",
                content:
                    "Is offering FREE Online Math Courses For The Community",
            },
            {
                title: "READ ALOUD VIDEOS FOR CHILDREN",
                content:
                    "Collection of videos on google drive to read for children",
            },
        ],

        [
            {
                title: "City of Detroit",
                content: "Several resources for all",
            },
        ],

        [
            {
                title: "Wayne Metro",
                content:
                    "Cares Relief and Recovery Services, Utilities, Funeral Assistance, Bills Etc.",
            },
        ],

        [
            {
                title: "Novocare",
                content:
                    "Free Insulin for diabetics. People applying for the program must have a valid presentation for Novo Nordisk insulin",
            },
            {
                title: "Wayne State School of Social Work",
                content:
                    "A list of links for Resources including mental and physical health etc.",
            },
        ],

        [
            {
                title: "Humanity Outreach",
                content:
                    "will house and care for youth that is in secure foster care system due to abuse and or neglect",
            },
            {
                title: "Community Housing network",
                content:
                    "provides housing and housing resources. They are offering a free foreclosure prevention webinars during the COVID-19 pandemic ",
            },
        ],

        [
            {
                title: "Inner City Youth Group",
                content:
                    "Follow them on Facebook and check out their website for updates on resources",
            },
            {
                title: "YMCA ",
                content:
                    "Provide FREE grab and go meals for children and young meals for children and young adults; enough for days . on mondays and fridays or Tuesdays and Fridays ",
            },
        ],

        [],
    ];

    return (
        <div className="min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-12 py-4 sm:py-6 lg:py-8">
            <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6 lg:mb-8">
                Resources
            </h1>

            <div className="flex flex-col-reverse lg:flex-row gap-4 sm:gap-6 lg:gap-8">
                <div className="w-full lg:w-80 bg-white border border-gray-200 rounded-md flex flex-col px-4 order-2 lg:order-1">
                    {categories.map((category, index) => (
                        <div
                            onClick={() => setIndexState(index)}
                            key={category.name}
                            className="flex items-center justify-between last:border-0 border-b border-gray-400/20 cursor-pointer py-3 sm:py-4 mb-2"
                        >
                            <div className="flex items-center space-x-2 sm:space-x-3">
                                <div className="rounded-md p-2 sm:p-3 bg-blue-50 hover:bg-blue-100 flex items-center justify-center">
                                    {index === indexState ? (
                                        <Check
                                            size={16}
                                            className="sm:w-5 sm:h-5"
                                        />
                                    ) : (
                                        <category.icon
                                            size={16}
                                            className="sm:w-5 sm:h-5 text-blue-950/80"
                                        />
                                    )}
                                </div>
                                <span className="font-medium text-sm sm:text-base">
                                    {category.name}
                                </span>
                            </div>
                            <span className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 text-xs font-medium rounded-full">
                                {category.count}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="flex-1 pb-6 order-1 lg:order-2">
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 sm:p-6 border-b border-gray-200 gap-3 sm:gap-0">
                            <h2 className="text-base sm:text-lg font-semibold text-gray-900">
                                Collection Resources
                            </h2>
                            <button className="bg-cyan-800 hover:bg-cyan-700 text-white px-3 sm:px-4 py-2 rounded-md font-medium text-sm sm:text-base w-full sm:w-auto">
                                Add Resources
                            </button>
                        </div>

                        {resources[indexState].length > 0 && (
                            <div className="hidden md:grid grid-cols-10 gap-4 p-4 bg-blue-50 border-b border-gray-200 text-sm font-medium text-blue-900">
                                <div className="col-span-3">Title</div>
                                <div className="col-span-6">Content</div>
                                <div className="col-span-1">Actions</div>
                            </div>
                        )}

                        <div className="divide-y divide-gray-200">
                            {resources[indexState].length === 0 ? (
                                <div className="h-24 p-4 hover:bg-gray-50">
                                    <div className="flex items-center justify-center h-full">
                                        <p className="text-gray-500 text-center text-sm sm:text-base">
                                            No resource yet in this collection
                                        </p>
                                    </div>
                                </div>
                            ) : (
                                resources[indexState].map((resource, index) => (
                                    <div
                                        key={index}
                                        className="hover:bg-gray-50"
                                    >
                                        <div className="hidden md:grid grid-cols-10 gap-4 p-4">
                                            <div className="col-span-3">
                                                <span className="font-medium text-gray-900">
                                                    {resource.title}
                                                </span>
                                            </div>
                                            <div className="col-span-6">
                                                <p className="text-gray-600">
                                                    {resource.content}
                                                </p>
                                            </div>
                                            <div className="col-span-1">
                                                <div className="flex space-x-2">
                                                    <button className="p-2 text-red-500 hover:bg-red-50 rounded-md">
                                                        <ExternalLink
                                                            size={16}
                                                        />
                                                    </button>
                                                    <button className="p-2 text-teal-600 hover:bg-teal-50 rounded-md">
                                                        <Edit3 size={16} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="md:hidden p-4 space-y-3">
                                            <div className="flex items-start justify-between">
                                                <h3 className="font-medium text-gray-900 text-sm sm:text-base flex-1 pr-2">
                                                    {resource.title}
                                                </h3>
                                                <div className="flex space-x-1 flex-shrink-0">
                                                    <button className="p-1.5 sm:p-2 text-red-500 hover:bg-red-50 rounded-md">
                                                        <ExternalLink
                                                            size={14}
                                                            className="sm:w-4 sm:h-4"
                                                        />
                                                    </button>
                                                    <button className="p-1.5 sm:p-2 text-teal-600 hover:bg-teal-50 rounded-md">
                                                        <Edit3
                                                            size={14}
                                                            className="sm:w-4 sm:h-4"
                                                        />
                                                    </button>
                                                </div>
                                            </div>
                                            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                                                {resource.content}
                                            </p>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resources;
