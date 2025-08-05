import { useState } from "react";
import { Search, MoreHorizontal } from "lucide-react";
import { StudentModal } from "../components/studentModal";
import { Switch } from "@/components/ui/switch";

const Students = () => {
    const [students, setStudents] = useState([
        {
            id: 1,
            name: "Chiemeka O. Okonkwo",
            username: "chiemeka_okonkwo",
            email: "chiemeka@gmail.com",
            status: "Active",
            location: "Anambra, Nigeria",
            joinDate: "2023-09-15",
            avatar: "CO",
            schoolName: "fitjoy",
        },
        {
            id: 2,
            name: "Amara Okafor",
            username: "amara_okafor",
            email: "amara@yahoo.com",
            status: "Inactive",
            location: "Lagos, Nigeria",
            joinDate: "2023-08-22",
            avatar: "AO",
            schoolName: "fitjoy",
        },
        {
            id: 3,
            name: "Kelechi Nnadi",
            username: "kelechi_nnadi",
            email: "kelechi@gmail.com",
            status: "Active",
            location: "Enugu, Nigeria",
            joinDate: "2023-10-01",
            avatar: "KN",
            schoolName: "fitjoy",
        },
        {
            id: 4,
            name: "Folake Adebayo",
            username: "folake_adebayo",
            email: "folake@outlook.com",
            status: "Pending",
            location: "Oyo, Nigeria",
            joinDate: "2023-10-15",
            avatar: "FA",
            schoolName: "fitjoy",
        },
        {
            id: 5,
            name: "Ibrahim Musa",
            username: "ibrahim_musa",
            email: "ibrahim@gmail.com",
            status: "Active",
            location: "Kano, Nigeria",
            joinDate: "2023-07-10",
            avatar: "IM",
            schoolName: "fitjoy",
        },
        {
            id: 6,
            name: "Grace Okoro",
            username: "grace_okoro",
            email: "grace@hotmail.com",
            status: "Active",
            location: "Rivers, Nigeria",
            joinDate: "2023-09-05",
            avatar: "GO",
            schoolName: "fitjoy",
        },
        {
            id: 7,
            name: "Tunde Bakare",
            username: "tunde_bakare",
            email: "tunde@gmail.com",
            status: "Suspended",
            location: "Lagos, Nigeria",
            joinDate: "2023-06-18",
            avatar: "TB",
            schoolName: "fitjoy",
        },
        {
            id: 8,
            name: "Blessing Chukwu",
            username: "blessing_chukwu",
            email: "blessing@yahoo.com",
            status: "Active",
            location: "Imo, Nigeria",
            joinDate: "2023-08-30",
            avatar: "BC",
            schoolName: "fitjoy",
        },
    ]);

    const [searchTerm, setSearchTerm] = useState("");
    const [filterStatus, setFilterStatus] = useState("All");
    const [selectedStudents, setSelectedStudents] = useState([]);

    // Fixed modal state management
    const [modalState, setModalState] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState(null);

    const filteredStudents = students.filter((student) => {
        const matchesSearch =
            student.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
            student.email.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesStatus =
            filterStatus === "All" || student.status === filterStatus;
        return matchesSearch && matchesStatus;
    });

    const getStatusColor = (status) => {
        switch (status.toLowerCase()) {
            case "active":
                return "bg-green-100 text-green-800 border-green-200";
            case "inactive":
                return "bg-gray-100 text-gray-800 border-gray-200";
            case "pending":
                return "bg-yellow-100 text-yellow-800 border-yellow-200";
            case "suspended":
                return "bg-red-100 text-red-800 border-red-200";
            default:
                return "bg-gray-100 text-gray-800 border-gray-200";
        }
    };

    const handleSelectAll = (e) => {
        if (e.target.checked) {
            setSelectedStudents(filteredStudents.map((student) => student.id));
        } else {
            setSelectedStudents([]);
        }
    };

    const handleSelectStudent = (studentId, checked) => {
        if (checked) {
            setSelectedStudents([...selectedStudents, studentId]);
        } else {
            setSelectedStudents(
                selectedStudents.filter((id) => id !== studentId)
            );
        }
    };

    // Fixed modal handlers
    const handleEditStudent = (student) => {
        setSelectedStudent(student);
        setModalState(true);
    };

    const handleCloseModal = () => {
        setModalState(false);
        setSelectedStudent(null);
    };

    const handleSaveStudent = (updatedStudent) => {
        setStudents((prevStudents) =>
            prevStudents.map((s) =>
                s.id === updatedStudent.id ? updatedStudent : s
            )
        );
    };

    return (
        <div className="w-full min-h-full bg-gray-50 mx-auto p-6">
            <div className="bg-white rounded-lg">
                {/* Header */}
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-2xl p-4 pb-0 font-bold text-gray-900">
                            All Students
                        </h1>
                    </div>
                </div>

                {/* Filters and Search */}
                <div className="flex flex-col sm:flex-row gap-4 mb-6 px-4">
                    <div className="relative flex-1">
                        <Search
                            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                            size={20}
                        />
                        <input
                            type="text"
                            placeholder="Search students by name or email..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-0"
                        />
                    </div>
                    <select
                        value={filterStatus}
                        onChange={(e) => setFilterStatus(e.target.value)}
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                        <option value="All">All Status</option>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                        <option value="Pending">Pending</option>
                        <option value="Suspended">Suspended</option>
                    </select>
                </div>

                {/* Bulk Actions */}
                {selectedStudents.length > 0 && (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4 mx-4">
                        <div className="flex items-center justify-between">
                            <span className="text-blue-800 font-medium">
                                {selectedStudents.length} student
                                {selectedStudents.length !== 1 ? "s" : ""}{" "}
                                selected
                            </span>
                            <div className="flex gap-2">
                                <button className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700">
                                    Activate
                                </button>
                                <button className="bg-orange-600 text-white px-3 py-1 rounded text-sm hover:bg-orange-700">
                                    Suspend
                                </button>
                                <button className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700">
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Table */}
                <div className="overflow-x-auto bg-white ">
                    <table className="w-full overflow-auto ">
                        <thead className="border-b border-gray-200">
                            <tr>
                                <th className="px-6 py-3 text-left">
                                    <input
                                        type="checkbox"
                                        checked={
                                            selectedStudents.length ===
                                                filteredStudents.length &&
                                            filteredStudents.length > 0
                                        }
                                        onChange={handleSelectAll}
                                        className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                    />
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Student
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Email
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Status
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Username
                                </th>
                                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>

                        <tbody className="bg-white ">
                            {filteredStudents.map((student) => (
                                <tr
                                    key={student.id}
                                    className="transition-colors odd:bg-gray-50  "
                                >
                                    <td className="px-6 py-4">
                                        <input
                                            type="checkbox"
                                            checked={selectedStudents.includes(
                                                student.id
                                            )}
                                            onChange={(e) =>
                                                handleSelectStudent(
                                                    student.id,
                                                    e.target.checked
                                                )
                                            }
                                            className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                                        />
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center">
                                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm mr-3">
                                                {student.avatar}
                                            </div>
                                            <div>
                                                <div className="text-sm font-medium text-gray-900">
                                                    {student.name}
                                                </div>
                                                <div className="text-sm text-gray-500">
                                                    {student.location}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="text-sm text-gray-900">
                                            {student.email}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span
                                            className={`inline-flex px-2 py-1 text-xs font-medium rounded-full border capitalize ${getStatusColor(
                                                student.status
                                            )}`}
                                        >
                                            {student.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500">
                                        {student.username}
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <button
                                            onClick={() =>
                                                handleEditStudent(student)
                                            }
                                            className="text-gray-400 hover:text-gray-600 transition-colors p-1"
                                            title="Edit Student"
                                        >
                                            <MoreHorizontal size={20} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Empty State */}
                {filteredStudents.length === 0 && (
                    <div className="text-center py-12">
                        <div className="text-gray-400 text-lg mb-2">
                            No students found
                        </div>
                        <p className="text-gray-500">
                            Try adjusting your search or filter criteria
                        </p>
                    </div>
                )}

                {/* Footer */}
                <div className="flex items-center justify-between mt-6 text-sm text-gray-500">
                    <div>
                        <p className="p-6">
                            Showing {filteredStudents.length} of{" "}
                            {students.length} students
                        </p>
                    </div>
                    <div className="flex items-center gap-2 p-6">
                        <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50">
                            Previous
                        </button>
                        <span className="px-3 py-1 bg-blue-600 text-white rounded">
                            1
                        </span>
                        <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50">
                            Next
                        </button>
                    </div>
                </div>
            </div>

            {/* Fixed Modal Rendering - Outside the table structure */}
            {modalState && (
                <StudentModal
                    isOpen={modalState}
                    onClose={handleCloseModal}
                    student={selectedStudent}
                    onSave={handleSaveStudent}
                />
            )}
        </div>
    );
};

export default Students;
