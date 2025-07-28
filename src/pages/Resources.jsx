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

const Resources = () => {
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
        {
            title: "Math4Success",
            content: "Is offering FREE Online Math Courses For The Community",
        },
        {
            title: "READ ALOUD VIDEOS FOR CHILDREN",
            content:
                "Collection of videos on google drive to read for children",
        },
    ];
    return (
        <div className="min-h-screen bg-gray-50 px-12 py-8">
            {/* Header */}

            <h1 className="text-2xl font-semibold text-gray-900 mb-8">
                Resources
            </h1>

            <div className="flex gap-8">
                {/* Sidebar */}
                <div
                    className={`w-80 bg-white border-gray-200 rounded-md flex flex-col  px-4`}
                >
                    {categories.map((category) => (
                        <div
                            key={category.name}
                            className={`flex items-center justify-between  last:border-0  border-b border-gray-400/20  cursor-pointer py-4 mb-2`}
                        >
                            <div className="flex items-center space-x-3">
                                <div
                                    className={`rounded-md p-3 bg-blue-400/30 flex items-center justify-center`}
                                >
                                    <category.icon
                                        size={20}
                                        className="text-blue-950/80"
                                    />
                                </div>
                                <span className={`font-medium `}>
                                    {category.name}
                                </span>
                            </div>
                            <span
                                className={`inline-flex items-center justify-center w-6 h-6 text-xs font-medium rounded-ful`}
                            >
                                {category.count}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Main Content */}
                <div className="flex-1 pb-6">
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-gray-200">
                            <h2 className="text-lg font-semibold text-gray-900">
                                Collection Resources
                            </h2>
                            <button className="bg-cyan-800 hover:bg-blue-950/30 text-white px-4 py-2 rounded-md font-medium">
                                Add Resources
                            </button>
                        </div>

                        {/* Table Header */}
                        <div className="grid grid-cols-12 gap-4 p-4 bg-gray-50 border-b border-gray-200 text-sm font-medium text-gray-600">
                            <div className="col-span-3">Title</div>
                            <div className="col-span-7">Content</div>
                            <div className="col-span-2">Actions</div>
                        </div>

                        {/* Table Rows */}
                        <div className="divide-y divide-gray-200">
                            {resources.map((resource, index) => (
                                <div
                                    key={index}
                                    className="grid grid-cols-12 gap-4 p-4 hover:bg-gray-50"
                                >
                                    <div className="col-span-3">
                                        <span className="font-medium text-gray-900">
                                            {resource.title}
                                        </span>
                                    </div>
                                    <div className="col-span-7">
                                        <span className="text-gray-600">
                                            {resource.content}
                                        </span>
                                    </div>
                                    <div className="col-span-2">
                                        <div className="flex space-x-2">
                                            <button className="p-2 text-red-500 hover:bg-red-50 rounded-md">
                                                <ExternalLink size={16} />
                                            </button>
                                            <button className="p-2 text-teal-600 hover:bg-teal-50 rounded-md">
                                                <Edit3 size={16} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resources;
