import { User, MoreHorizontal } from "lucide-react";
import { useState } from "react";
import Modal from "./modalTitle";
import CoachesStudent from "./CoachesStudent";

const CoachCard = ({ coach }) => {
    // a use State for opening of modal
    const [modalOpen, setModalOpen] = useState(false);

    // a close function to close the modal
    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm hover:shadow-md pb-8 transition-shadow">
            {/* Header with more options */}
            <div className="flex justify-between items-center mb-3">
                <button className="text-gray-400 hover:text-gray-600">
                    <MoreHorizontal size={16} />
                </button>
            </div>

            {/* User Avatar */}
            <div className="flex justify-center mb-3">
                {coach.pic ? (
                    <img
                        src={coach.pic}
                        alt={coach.name}
                        className="w-24 h-24 rounded-full object-cover"
                    />
                ) : (
                    <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                        <User size={24} className="text-gray-400" />
                    </div>
                )}
            </div>

            {/* User Name */}
            <h3 className="text-center  font-semibold text-gray-900 mb-1">
                {coach.name}
            </h3>

            {/* Username */}
            <p className="text-center text-xs text-gray-500 mb-3">
                @{coach.username}
            </p>

            {/* Email */}
            <div className="text-center mb-4">
                <p
                    className="text-xs text-gray-600 truncate text-wrap"
                    title={coach.email}
                >
                    {coach.email}
                </p>
            </div>

            {/* Status */}
            <div className="flex justify-center">
                <button
                    onClick={() => {
                        setModalOpen(true);
                    }}
                    className="bg-cyan-700 px-6 py-2 md:text-base text-sm rounded-md text-white"
                >
                    View Students
                </button>
            </div>

            <Modal
                isOpen={modalOpen}
                onClose={closeModal}
                showCloseButton={true}
                title={null}
                overlayClassName="bg-black/60"
            >
                <CoachesStudent students={coach.students} />
            </Modal>
        </div>
    );
};

export default CoachCard;
