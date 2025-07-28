import { UserCard } from "../components/UserCard";

const Students = () => {
    const users = [
        {
            id: 1,
            name: "Anthony Stark",
            username: "tonystark",
            email: "tony@starkindustries.com",
            pic: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
            isActive: true,
        },
        {
            id: 2,
            name: "Anthony Stark",
            username: "ironman",
            email: "anthony.stark@avengers.com",
            pic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
            isActive: true,
        },
        {
            id: 1,
            name: "Anthony Stark",
            username: "tonystark",
            email: "tony@starkindustries.com",
            pic: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
            isActive: true,
        },
        {
            id: 2,
            name: "Anthony Stark",
            username: "ironman",
            email: "anthony.stark@avengers.com",
            pic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
            isActive: true,
        },
        {
            id: 3,
            name: "Anthony Stark",
            username: "starkinc",
            email: "ceo@starkindustries.com",
            pic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
            isActive: false,
        },
        {
            id: 3,
            name: "Anthony Stark",
            username: "starkinc",
            email: "ceo@starkindustries.com",
            pic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
            isActive: false,
        },

        {
            id: 1,
            name: "Anthony Stark",
            username: "tonystark",
            email: "tony@starkindustries.com",
            pic: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
            isActive: true,
        },
        {
            id: 2,
            name: "Anthony Stark",
            username: "ironman",
            email: "anthony.stark@avengers.com",
            pic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
            isActive: true,
        },
        {
            id: 3,
            name: "Anthony Stark",
            username: "starkinc",
            email: "ceo@starkindustries.com",
            pic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
            isActive: false,
        },
        {
            id: 1,
            name: "Anthony Stark",
            username: "tonystark",
            email: "tony@starkindustries.com",
            pic: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
            isActive: true,
        },
        {
            id: 2,
            name: "Anthony Stark",
            username: "ironman",
            email: "anthony.stark@avengers.com",
            pic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
            isActive: true,
        },
        {
            id: 3,
            name: "Anthony Stark",
            username: "starkinc",
            email: "ceo@starkindustries.com",
            pic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
            isActive: false,
        },
    ];

    return (
        <main className="min-h-full bg-gray-100  p-12">
            <h1 className="text-black text-3xl mb-8">All Students</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-col-3 lg:grid-cols-5  gap-14 bg-gray-100 min-h-full">
                {users.map((user) => (
                    <UserCard user={user} />
                ))}
            </div>
        </main>
    );
};

export default Students;
