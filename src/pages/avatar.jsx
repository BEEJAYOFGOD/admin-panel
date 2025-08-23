import { useState } from "react";

const Avatars = () => {
    const [avatars, setAvatars] = useState([
        { id: 1, image: "👨🏽‍🦱", alt: "Man with curly hair" },
        { id: 2, image: "👩🏽‍🦱", alt: "Woman with curly hair" },
        { id: 3, image: "👩🏽‍🦲", alt: "Woman with headwrap" },
        { id: 4, image: "👨🏽‍🦲", alt: "Man with beard" },
        { id: 5, image: "👩🏽", alt: "Woman" },
        { id: 6, image: "👩🏽‍🦳", alt: "Woman with braids" },
        { id: 7, image: "👨🏽‍🧢", alt: "Man with cap" },
        { id: 8, image: "👩🏽‍💼", alt: "Woman with glasses" },
    ]);

    const handleDelete = (id) => {
        setAvatars(avatars.filter((avatar) => avatar.id !== id));
    };

    const handleAddNewAvatar = () => {
        const newId = Math.max(...avatars.map((a) => a.id)) + 1;
        const newAvatar = {
            id: newId,
            image: "👤",
            alt: "New avatar",
        };
        setAvatars([...avatars, newAvatar]);
    };

    return (
        <div className="min-h-screen bg-gray-50 border p-4 md:p-8">
            <div className="mx-auto">
                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <h1 className="text-2xl font-semibold text-black">
                            Avatars
                        </h1>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="text-cyan-700 cursor-pointer hover:underline">
                            TheYunion
                        </span>
                        <span>›</span>
                        <span>Avatars</span>
                    </div>
                </div>

                {/* Add New Avatar Button */}
                <div className="flex justify-end mb-6">
                    <button
                        onClick={handleAddNewAvatar}
                        className="bg-cyan-700 hover:bg-teal-700 text-white px-4 py-2 rounded-md font-medium transition-colors"
                    >
                        Add New Avatar
                    </button>
                </div>

                {/* Avatar Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7 gap-6">
                    {avatars.map((avatar) => (
                        <div
                            key={avatar.id}
                            className="flex flex-col items-center"
                        >
                            {/* Avatar Circle */}
                            <div className="w-32 h-32 bg-pink-100 rounded-full flex items-center justify-center mb-4 shadow-sm">
                                <span className="text-4xl">{avatar.image}</span>
                            </div>

                            {/* Delete Button */}
                            <button
                                onClick={() => handleDelete(avatar.id)}
                                className="px-6 py-2 border border-gray-300 text-gray-600 rounded-md hover:bg-gray-50 transition-colors text-sm font-medium"
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {avatars.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-500 text-lg">
                            No avatars available
                        </p>
                        <button
                            onClick={handleAddNewAvatar}
                            className="mt-4 bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-md font-medium transition-colors"
                        >
                            Add Your First Avatar
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Avatars;
