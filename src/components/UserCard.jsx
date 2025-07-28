import { User, MoreHorizontal } from "lucide-react";

export const UserCard = ({ user }) => {
    return (
        <div className="bg-white rounded-lg   border-gray-200 p-4 shadow-sm hover:shadow-md transition-shadow">
            {/* Header with more options */}
            <div className="flex justify-between items-center mb-3">
                <div
                    className={`w-3 h-3 rounded-full ${
                        user.isActive
                            ? "bg-green-500 animate-pulse"
                            : "bg-gray-300"
                    }`}
                ></div>
                <button className="text-gray-400 hover:text-gray-600">
                    <MoreHorizontal size={16} />
                </button>
            </div>

            {/* User Avatar */}
            <div className="flex justify-center mb-3">
                {user.pic ? (
                    <img
                        src={user.pic}
                        alt={user.name}
                        className="w-24 h-24 rounded-full object-cover"
                    />
                ) : (
                    <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                        <User size={24} className="text-gray-400" />
                    </div>
                )}
            </div>

            {/* User Name */}
            <h3 className="text-center font-semibold text-gray-900 mb-1">
                {user.name}
            </h3>

            {/* Username */}
            <p className="text-center text-sm text-gray-500 mb-3">
                @{user.username}
            </p>

            {/* Email */}
            <div className="text-center mb-4">
                <p
                    className="text-xs text-gray-600 truncate"
                    title={user.email}
                >
                    {user.email}
                </p>
            </div>

            {/* Status */}
            <div className="flex justify-center">
                <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                        user.isActive
                            ? "bg-green-100 text-green-800"
                            : "bg-gray-100 text-gray-800"
                    }`}
                >
                    {user.isActive ? "Active" : "Inactive"}
                </span>
            </div>
        </div>
    );
};
