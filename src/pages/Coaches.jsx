import CoachCard from "../components/CoachCard";

const Coaches = () => {
    const coaches = [
        {
            id: 5,
            name: "Anthony Stark",
            username: "mechanic",
            email: "workshop@stark.com",
            pic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
            isActive: true,
            students: [
                {
                    id: 1,
                    name: "Peter Parker",
                    email: "peter.parker@midtown.edu",
                    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
                },
                {
                    id: 2,
                    name: "Miles Morales",
                    email: "miles.morales@brooklyn.edu",
                    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
                },
                {
                    id: 3,
                    name: "Gwen Stacy",
                    email: "gwen.stacy@empire.edu",
                    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
                },
            ],
        },
        {
            id: 6,
            name: "Anthony Stark",
            username: "philanthropist",
            email: "charity@starkfoundation.org",
            pic: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=150&h=150&fit=crop&crop=face",
            isActive: false,
            students: [
                {
                    id: 4,
                    name: "Kamala Khan",
                    email: "kamala.khan@jersey.edu",
                    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
                },
                {
                    id: 5,
                    name: "Riri Williams",
                    email: "riri.williams@mit.edu",
                    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
                },
            ],
        },
        {
            id: 7,
            name: "Anthony Stark",
            username: "playboy",
            email: "party@stark.com",
            pic: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
            isActive: true,
            students: [
                {
                    id: 6,
                    name: "Kate Bishop",
                    email: "kate.bishop@nyu.edu",
                    image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=100&h=100&fit=crop&crop=face",
                },
                {
                    id: 7,
                    name: "America Chavez",
                    email: "america.chavez@utopia.edu",
                    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face",
                },
                {
                    id: 8,
                    name: "Cassie Lang",
                    email: "cassie.lang@quantum.edu",
                    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face",
                },
            ],
        },
        {
            id: 8,
            name: "Anthony Stark",
            username: "mechanic2",
            email: "workshop2@stark.com",
            pic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
            isActive: true,
            students: [
                {
                    id: 9,
                    name: "Ned Leeds",
                    email: "ned.leeds@midtown.edu",
                    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
                },
                {
                    id: 10,
                    name: "Michelle Jones",
                    email: "mj.jones@midtown.edu",
                    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop&crop=face",
                },
            ],
        },
        {
            id: 9,
            name: "Anthony Stark",
            username: "philanthropist2",
            email: "charity2@starkfoundation.org",
            pic: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=150&h=150&fit=crop&crop=face",
            isActive: false,
            students: [
                {
                    id: 11,
                    name: "Flash Thompson",
                    email: "flash.thompson@midtown.edu",
                    image: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=100&h=100&fit=crop&crop=face",
                },
            ],
        },
        {
            id: 10,
            name: "Anthony Stark",
            username: "playboy2",
            email: "party2@stark.com",
            pic: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
            isActive: true,
            students: [
                {
                    id: 12,
                    name: "Anya Corazon",
                    email: "anya.corazon@brooklyn.edu",
                    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop&crop=face",
                },
                {
                    id: 13,
                    name: "Cindy Moon",
                    email: "cindy.moon@empire.edu",
                    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop&crop=face",
                },
                {
                    id: 14,
                    name: "Julia Carpenter",
                    email: "julia.carpenter@shield.edu",
                    image: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=100&h=100&fit=crop&crop=face",
                },
            ],
        },
        {
            id: 11,
            name: "Anthony Stark",
            username: "playboy3",
            email: "party3@stark.com",
            pic: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
            isActive: true,
            students: [
                {
                    id: 15,
                    name: "Betty Brant",
                    email: "betty.brant@bugle.com",
                    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
                },
                {
                    id: 16,
                    name: "Liz Allan",
                    email: "liz.allan@oscorp.com",
                    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face",
                },
            ],
        },
    ];
    return (
        <main className="md:p-8 p-4 bg-outlet/30  min-h-full ">
            <h2 className="text-3xl mb-8 font-bold">Coaches</h2>

            <div className="grid grid-cols-2  gap-4  lg:grid-cols-5 md:gap-8 min-h-full">
                {coaches.map((coach) => (
                    <CoachCard coach={coach} />
                ))}
            </div>
        </main>
    );
};

export default Coaches;
