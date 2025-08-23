// Avatar Skeleton Component
const AvatarSkeleton = () => (
    <div className="w-24 h-24 rounded-full bg-gray-200 animate-pulse flex items-center justify-center">
        <div className="w-full h-full rounded-full bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse" />
    </div>
);

// Enhanced Avatar Component with Loading States
const CoachAvatar = ({ coach, isImageLoading, onImageLoad, onImageError }) => {
    if (!coach.pic) {
        // No picture available - show default avatar
        return (
            <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
                <User size={32} className="text-gray-400" />
            </div>
        );
    }

    return (
        <div className="relative">
            {/* Skeleton - shown while image is loading */}
            {isImageLoading && (
                <div className="absolute inset-0 w-24 h-24 rounded-full bg-gray-200 animate-pulse flex items-center justify-center">
                    <div className="w-full h-full rounded-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-[shimmer_1.5s_infinite]" />
                </div>
            )}

            {/* Actual image */}
            <img
                src={coach.pic}
                alt={coach.name}
                className={`w-24 h-24 rounded-full object-cover transition-opacity duration-300 ${
                    isImageLoading ? "opacity-0" : "opacity-100"
                }`}
                onLoad={onImageLoad}
                onError={onImageError}
            />
        </div>
    );
};

export default CoachAvatar;
