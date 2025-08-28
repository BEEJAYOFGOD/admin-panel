import { Edit, Trash2 } from "lucide-react";

const Groups = () => {
    const groupInfo = [
        {
            title: "essence of Life",
            moderator: "Dr. Manuel Beo",
            status: "active",
        },
        {
            title: "Life Balances",
            moderator: "Dr. Manuel Beo",
            status: "active",
        },
    ];
    return (
        <main className="bg-slate-50 p-4 sm:p-6 lg:p-10 h-full min-h-screen">
            <div className="flex flex-col sm:flex-row justify-between gap-4 sm:gap-0">
                <h2 className="text-xl sm:text-2xl font-semibold">
                    LyfeGroups
                </h2>
                <p className="text-sm text-gray-600">breadcumb</p>
            </div>

            <div className="flex mt-6 sm:mt-8">
                <button className="bg-cyan-700 rounded-md ml-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-3 text-white text-sm sm:text-base">
                    Create New Group
                </button>
            </div>
            <div className="w-full overflow-x-auto border p-2 sm:p-3 bg-white mt-6 sm:mt-8 rounded-lg">
                <table className="w-full min-w-[600px]">
                    <thead className="bg-blue-50">
                        <tr>
                            <th className="text-left py-4 sm:py-6 lg:py-8 pl-4 sm:pl-8 lg:pl-12 pr-4 sm:pr-8 lg:pr-24 font-medium text-gray-700 text-sm sm:text-base">
                                Groups
                            </th>
                            <th className="text-left py-3 px-4 sm:px-8 lg:px-24 font-medium text-gray-700 text-sm sm:text-base">
                                Moderator
                            </th>
                            <th className="text-left py-3 px-4 sm:px-8 lg:px-20 font-medium text-gray-700 text-sm sm:text-base">
                                Status
                            </th>
                            <th className="text-left py-3 px-3 sm:px-6 font-medium text-gray-700 text-sm sm:text-base">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-300">
                        {groupInfo.map((group, index) => (
                            <tr key={index}>
                                <td className="text-left py-4 sm:py-6 lg:py-8 pl-4 sm:pl-8 lg:pl-12 pr-4 sm:pr-8 lg:pr-24 font-medium text-gray-700 text-sm sm:text-base">
                                    {group.title}
                                </td>
                                <td className="text-left py-3 px-4 sm:px-8 lg:px-24 font-medium text-gray-700 text-sm sm:text-base">
                                    {group.moderator}
                                </td>
                                <td className="text-left py-3 px-4 sm:px-8 lg:px-20 font-medium text-gray-700 text-sm sm:text-base">
                                    <span className="capitalize bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs sm:text-sm">
                                        {group.status}
                                    </span>
                                </td>
                                <td className="text-left py-3 px-3 sm:px-6 font-medium text-gray-700 flex gap-2 sm:gap-4">
                                    <button className="bg-blue-100 p-2 sm:p-3 rounded-md hover:bg-blue-200 transition-colors">
                                        <Edit className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-blue-600" />
                                    </button>
                                    <button className="bg-red-200 p-2 sm:p-3 rounded-md hover:bg-red-300 transition-colors">
                                        <Trash2 className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-red-800" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    );
};

export default Groups;
