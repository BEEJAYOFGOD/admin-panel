import { Edit2Icon, Trash2Icon } from "lucide-react";

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
        <main className="bg-outlet/40 p-10 h-full">
            <div>
                <h2>LyfeGroups</h2>
                <p>breadcumb</p>
            </div>

            <div className="flex">
                <button className="bg-secondary rounded-md ml-auto px-8 py-3 text-white">
                    Create New Group
                </button>
            </div>
            <div className="w-full overflow-x-auto border p-3  bg-white mt-8">
                <table className="w-full">
                    <thead className="bg-secondary/20">
                        <tr>
                            <th className="text-left py-8 pl-12 px-24 font-medium text-gray-700">
                                Groups
                            </th>
                            <th className="text-left py-3 px-24 font-medium text-gray-700">
                                Moderator
                            </th>
                            <th className="text-left py-3 px-20  font-medium text-gray-700">
                                Status
                            </th>
                            <th className="text-left py-3 px-6  font-medium text-gray-700">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-300">
                        {groupInfo.map((group) => (
                            <tr>
                                <td className="text-left py-8 pl-12 px-24 font-medium text-gray-700">
                                    {group.title}
                                </td>
                                <td className="text-left py-3 px-24  font-medium text-gray-700">
                                    {group.moderator}
                                </td>
                                <td className="text-left py-3 px-20  font-medium text-gray-700">
                                    {group.status}
                                </td>
                                <td className="text-left py-3 px-6  font-medium text-gray-700  flex gap-4">
                                    <button className="bg-secondary/20 p-3 rounded-md ">
                                        <Edit2Icon className="w-6 h-6" />
                                    </button>
                                    <button className="bg-red-200 p-3 rounded-md ">
                                        <Trash2Icon className="w-6 h-6 text-red-800" />
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
