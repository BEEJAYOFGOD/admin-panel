import { useEffect, useRef } from "react";
import { X } from "lucide-react";

const Modal = ({
    isOpen,
    onClose,
    title,
    children,
    showCloseButton = true,
}) => {
    const modalRef = useRef(null);
    const previousFocusRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            // Store the previously focused element
            previousFocusRef.current = document.activeElement;

            // Focus the modal
            modalRef.current?.focus();

            // Prevent body scroll
            document.body.style.overflow = "hidden";
        } else {
            // Restore body scroll
            document.body.style.overflow = "unset";

            // Restore focus to previously focused element
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
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener("keydown", handleEscape);
            return () => document.removeEventListener("keydown", handleEscape);
        }
    }, [isOpen, onClose]);

    const handleOverlayClick = (event) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
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

    if (!isOpen) return null;

    return (
        <div
            className={`fixed inset-0 z-999999 min-w-screen flex items-center justify-center  bg-black/20`}
            onClick={handleOverlayClick}
            role="dialog"
            aria-modal="true"
            aria-labelledby={title ? "modal-title" : undefined}
        >
            <div
                ref={modalRef}
                className={`relative bg-white  rounded-lg shadow-xl mx-4  `}
                style={{ overflow: "visible" }}
                onClick={(e) => e.stopPropagation()}
                onKeyDown={handleKeyDown}
                tabIndex={-1}
            >
                {(title || showCloseButton) && (
                    <div className="flex items-center justify-between pt-4 px-4  pb-2 absolute right-0 top-0">
                        {title && (
                            <h2
                                id="modal-title"
                                className="text-lg font-semibold text-gray-900"
                            >
                                {title}
                            </h2>
                        )}
                        {showCloseButton && (
                            <button
                                onClick={() => {
                                    onClose();
                                }}
                                className="p-1 hover:bg-gray-100 ml-auto rounded-full transition-colors bg-graydark/20"
                                aria-label="Close modal"
                            >
                                <X className="w-5 h-5 text-gray-500" />
                            </button>
                        )}
                    </div>
                )}
                <div className="">{children}</div>
            </div>
        </div>
    );
};

export default Modal;
