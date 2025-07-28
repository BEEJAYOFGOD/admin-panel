import { useLocation, Link } from "react-router-dom";
import { Users2, User } from "lucide-react";

const Dashboard = () => {
    const location = useLocation();
    const loc = location.pathname.replace("/", ">.").split(".");
    console.log(loc);

    const students = [
        {
            id: 1,
            name: "June Wilson",
            username: "@june",
            email: "june@jdwebsolutions.com",
            status: "Active",
        },
        {
            id: 2,
            name: "Josh Olapade",
            username: "@JoJo",
            email: "josholapade@gmail.com",
            status: "Active",
        },
        {
            id: 3,
            name: "Olly Joe",
            username: "@Josh",
            email: "ollyjoe50@gmail.com",
            status: "Active",
        },
        {
            id: 4,
            name: "Test Usee",
            username: "@xenor",
            email: "emmanuelbolarinwa2019@gmail.com",
            status: "Active",
        },
        {
            id: 5,
            name: "Testnet Dave",
            username: "@dave",
            email: "emmanuelbolarinwa2018@gmail.com",
            status: "Active",
        },
    ];

    const handleViewAll = () => {
        console.log("View all students clicked");
    };

    return (
        <section className=" p-8 bg-gray-200/40 min-h-full  ">
            <div className="flex h-fit w-full justify-between ">
                <h2>Dashboard</h2>
                <div>
                    <Link to={location.pathname}>
                        {location.pathname.split("").splice(1).join("")}
                    </Link>
                </div>
            </div>

            <div className="grid grid-cols-2 grid-rows-2 my-8 gap-8">
                <div className="flex justify-between shadow-sm p-8 bg-white rounded-md">
                    <div>
                        <p className="text-3xl font-bold">8</p>
                        <p>Active Students</p>
                    </div>

                    <div className="bg-blue-300 flex items-center p-4 rounded-md">
                        <Users2 className="text-blue-700" />
                    </div>
                </div>
                <div className="flex justify-between  shadow-sm p-8 bg-white rounded-md">
                    <div>
                        <p className="text-3xl font-bold">8</p>
                        <p>Active Students</p>
                    </div>

                    <div>
                        <Users2 />
                    </div>
                </div>
                <div className="flex justify-between shadow-sm p-8 bg-white rounded-md">
                    <div>
                        <p className="text-3xl font-bold">8</p>
                        <p>Active Students</p>
                    </div>

                    <div>
                        <Users2 />
                    </div>
                </div>
                <div className="flex justify-between shadow-sm p-8 bg-white rounded-md">
                    <div>
                        <p className="text-3xl font-bold">8</p>
                        <p>Active Students</p>
                    </div>

                    <div>
                        <Users2 />
                    </div>
                </div>
            </div>

            <section>
                <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                    {/* Header */}
                    <div className="flex items-center justify-between p-6 border-b border-gray-200">
                        <h2 className="text-lg font-semibold text-gray-900">
                            Most Recent Students
                        </h2>
                        <button
                            onClick={handleViewAll}
                            className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                        >
                            View all
                        </button>
                    </div>

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            {/* Table Header */}
                            <thead className="bg-blue-50">
                                <tr>
                                    <th className="text-left py-8 px-12 text-sm font-medium text-gray-700">
                                        Student
                                    </th>
                                    <th className="text-left py-3 px-6 text-sm font-medium text-gray-700">
                                        Username
                                    </th>
                                    <th className="text-left py-3 px-6 text-sm font-medium text-gray-700">
                                        Email
                                    </th>
                                    <th className="text-left py-3 px-6 text-sm font-medium text-gray-700">
                                        Status
                                    </th>
                                </tr>
                            </thead>

                            {/* Table Body */}
                            <tbody className="divide-y divide-gray-100">
                                {students.map((student) => (
                                    <tr
                                        key={student.id}
                                        className="hover:bg-gray-50 transition-colors"
                                    >
                                        <td className="py-8 px-12">
                                            <div className="flex items-center space-x-3">
                                                <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                                                    <User className="w-4 h-4 text-gray-500" />
                                                </div>
                                                <span className="text-sm font-medium text-gray-900">
                                                    {student.name}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="py-4 px-6">
                                            <span className="text-sm text-gray-600">
                                                {student.username}
                                            </span>
                                        </td>
                                        <td className="py-4 px-6">
                                            <span className="text-sm text-gray-600">
                                                {student.email}
                                            </span>
                                        </td>
                                        <td className="py-4 px-6">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                                {student.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Dashboard;
