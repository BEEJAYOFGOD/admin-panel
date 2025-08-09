import { Edit2Icon, Trash2Icon } from "lucide-react";

const Programs = () => {
    const programInfo = [
        {
            title: "Cave of Album",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta obcaecati debitis temporibus dolore qui ipsum exercitationem consectetur placeat eligendi voluptate ex dignissimos, inciduntut eaque quos quibusdam sit harum autem",
        },
        {
            title: "Life Balances",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta obcaecati debitis temporibus dolore qui ipsum exercitationem consectetur placeat eligendi voluptate ex dignissimos, inciduntut eaque quos quibusdam sit harum autem",
        },
        {
            title: "Life Balances",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta obcaecati debitis temporibus dolore qui ipsum exercitationem consectetur placeat eligendi voluptate ex dignissimos, inciduntut eaque quos quibusdam sit harum autem",
        },
        {
            title: "Life Balances",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta obcaecati debitis temporibus dolore qui ipsum exercitationem consectetur placeat eligendi voluptate ex dignissimos, inciduntut eaque quos quibusdam sit harum autem",
        },
        {
            title: "Life Balances",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta obcaecati debitis temporibus dolore qui ipsum exercitationem consectetur placeat eligendi voluptate ex dignissimos, inciduntut eaque quos quibusdam sit harum autem",
        },
    ];
    return (
        <main className="bg-outlet/40 min-h-full p-12">
            <div>
                <h2>Programs</h2>
                <span>{`TheYunion '>' Program`}</span>
            </div>

            <div className="flex">
                <button className="ml-auto border bg-secondary px-6 py-3 rounded-md text-white">
                    Add New Program
                </button>
            </div>

            <div className="overflow-auto p-3 bg-white mt-8 shadow">
                <table className="w-full bg-white">
                    <thead className="bg-secondary/20">
                        <tr>
                            <th className="text-left py-8 pl-12 px-30 font-medium text-gray-700">
                                Programs
                            </th>
                            <th className="text-left py-3 px-50 font-medium text-gray-700">
                                Description
                            </th>

                            <th className="text-left py-3 px-6  font-medium text-gray-700">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-300 ">
                        {programInfo.map((program) => (
                            <tr>
                                <td className="text-left py-8 pl-12 px-24 font-medium text-primary">
                                    {program.title}
                                </td>
                                <td className="text-left py-3 px-50 text-sm leading-6  text-primary font-light">
                                    {program.description}
                                </td>

                                <td className="text-left py-3 px-6  font-medium text-primary flex gap-4">
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

export default Programs;
