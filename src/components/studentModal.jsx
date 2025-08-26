import { useState, useRef, useEffect } from "react";
import { Switch } from "@/components/ui/switch";

export const StudentModal = ({ isOpen, onClose, student, onSave }) => {
    const modalRef = useRef(null);
    const previousFocusRef = useRef(null);

    // Form state
    const [formData, setFormData] = useState({
        name: "",
        username: "",
        status: student.status,
        schoolName: "",
        coach: student.coach,
    });

    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({});

    // Initialize form data when student prop changes
    useEffect(() => {
        if (student && isOpen) {
            setFormData({
                name: student.name || "",
                username: student.username || "",
                status: student.status || "Active",
                schoolName: student.schoolName || "",
            });
            setErrors({});
        }
    }, [student, isOpen]);

    useEffect(() => {
        console.log("Effect running, isOpen:", isOpen); // Debug log

        if (isOpen) {
            console.log("Setting overflow to hidden"); // Debug log
            previousFocusRef.current = document.activeElement;

            setTimeout(() => {
                modalRef.current?.focus();
            }, 100);

            document.body.style.overflow = "hidden";
        } else {
            console.log("Setting overflow to unset"); // Debug log
            document.body.style.overflow = "unset";

            if (previousFocusRef.current) {
                previousFocusRef.current.focus();
            }
        }

        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    useEffect(() => {
        const handleEscape = (event) => {
            if (event.key === "Escape" && isOpen) {
                handleClose();
            }
        };

        if (isOpen) {
            document.addEventListener("keydown", handleEscape);
            return () => document.removeEventListener("keydown", handleEscape);
        }
    }, [isOpen]);

    const handleOverlayClick = (event) => {
        if (event.target === event.currentTarget) {
            handleClose();
        }
    };

    const handleClose = () => {
        setFormData({
            name: "",
            username: "",
            status: "Active",
            location: "",
            schoolName: "",
        });
        setErrors({});
        onClose();
    };

    const handleKeyDown = (event) => {
        if (event.key === "Tab") {
            // Trap focus within modal
            const focusableElements = modalRef.current?.querySelectorAll(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            );

            if (focusableElements && focusableElements.length > 0) {
                const firstElement = focusableElements[0];
                const lastElement =
                    focusableElements[focusableElements.length - 1];

                if (event.shiftKey && document.activeElement === firstElement) {
                    event.preventDefault();
                    lastElement.focus();
                } else if (
                    !event.shiftKey &&
                    document.activeElement === lastElement
                ) {
                    event.preventDefault();
                    firstElement.focus();
                }
            }
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: "",
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Full name is required";
        }

        if (!formData.username.trim()) {
            newErrors.username = "Username is required";
        } else if (!/^[a-zA-Z0-9_]+$/.test(formData.username)) {
            newErrors.username =
                "Username can only contain letters, numbers, and underscores";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsLoading(true);

        try {
            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1000));

            // Call the onSave callback with updated data
            if (onSave) {
                onSave({
                    ...student,
                    ...formData,
                });
            }

            handleClose();
        } catch (error) {
            console.error("Error saving student:", error);
            setErrors({ submit: "Failed to save student. Please try again." });
        } finally {
            setIsLoading(false);
        }
    };

    if (!isOpen || !student) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs"
            onClick={handleOverlayClick}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
        >
            <div
                ref={modalRef}
                className="relative bg-white rounded-md shadow-2xl mx-4 md:w-3xl w-md   max-h-[90vh] overflow-hidden"
                onClick={(e) => e.stopPropagation()}
                onKeyDown={handleKeyDown}
                tabIndex={-1}
            >
                {/* Header */}
                <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
                    <h2
                        id="modal-title"
                        className="text-xl font-semibold text-gray-900 flex items-center gap-2"
                    >
                        <svg
                            className="w-8 h-8 text-blue-950"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            />
                        </svg>
                        Edit Student Details
                    </h2>
                    {/* <button
                        onClick={handleClose}
                        className="text-gray-400 hover:text-gray-600 transition-colors p-1 rounded-full hover:bg-gray-100"
                        aria-label="Close modal"
                    >
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button> */}
                </div>

                {/* Form */}
                <div className="p-6 space-y-4 overflow-y-auto max-h-[calc(90vh-140px)]">
                    {/* Full Name */}
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="name"
                            className="block font-medium text-gray-700 mb-1"
                        >
                            Full Name *
                        </label>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className={`w-full px-6 py-3 text-lg border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                                errors.name
                                    ? "border-red-300 bg-red-50"
                                    : "border-gray-300"
                            }`}
                            placeholder="Enter full name"
                        />
                        {errors.name && (
                            <p className="text-red-600 text-sm mt-1">
                                {errors.name}
                            </p>
                        )}
                    </div>

                    {/* School Name */}
                    <div className="flex flex-col gap-2">
                        <label
                            htmlFor="schoolName"
                            className="font-medium text-gray-700 mb-1 flex items-center gap-1"
                        >
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                />
                            </svg>
                            School Name
                        </label>
                        <input
                            type="text"
                            name="schoolName"
                            id="schoolName"
                            value={formData.schoolName}
                            onChange={handleInputChange}
                            className="w-full px-6 py-3 text-lg border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                            placeholder="Enter school name"
                        />
                    </div>

                    {/* Status */}
                    <div>
                        <label
                            htmlFor="status"
                            className="block  font-medium text-gray-700 mb-1"
                        >
                            Status
                        </label>

                        <div className="flex items-center gap-2 ">
                            <Switch
                                checkedColor="bg-cyan-900" // Convert bg-blue-550 to hex
                                uncheckedColor="bg-gray-200" // Convert bg-gray-200 to hex
                                onCheckedChange={(checked) => {
                                    setFormData({
                                        ...formData,
                                        status: checked ? "active" : "inactive",
                                    });
                                }}
                                checked={
                                    formData.status.toLowerCase() === "active"
                                }
                            />
                            <span className="lowercase">{formData.status}</span>
                        </div>
                    </div>

                    <div className="flex justify-between">
                        <label htmlFor="studentCoach">Student Coach</label>

                        <div>
                            <select
                                name="coach"
                                id="coach"
                                className="border border-blue-900 rounded-md text-xl"
                                onChange={(e) => {
                                    setFormData({
                                        ...formData,
                                        coach: e.target.value,
                                    });
                                }}
                                value={formData.coach}
                            >
                                <option
                                    value="Dr. Dave Benson"
                                    className="text-xl bg-blue-950 text-white"
                                >
                                    Dr. Dave Benson
                                </option>
                                <option
                                    value="Dr. Manuel Beo"
                                    className="text-xl bg-blue-950 text-white hover:bg-none"
                                >
                                    Dr. Manuel Beo
                                </option>
                            </select>
                        </div>
                    </div>

                    {/* Submit Error */}
                    {errors.submit && (
                        <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                            <p className="text-red-600 text-sm">
                                {errors.submit}
                            </p>
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="border-t border-gray-200 px-6 py-4 flex justify-end gap-3">
                    <button
                        type="button"
                        onClick={handleClose}
                        className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                        disabled={isLoading}
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        disabled={isLoading}
                        className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors min-w-[80px] flex items-center justify-center"
                    >
                        {isLoading ? (
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        ) : (
                            "Save Changes"
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};
