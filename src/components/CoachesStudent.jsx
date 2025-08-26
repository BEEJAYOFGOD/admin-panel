const CoachesStudent = ({ students }) => {
    return (
        <div className="rounded-md md:w-2xl w-sm">
            <h1 className="border-b border-gray-200/30 p-4">Student list</h1>
            <div className="p-4 space-y-4 h-[300px] overflow-auto scrollbar-shiny">
                {students.map((student) => (
                    <article className="flex items-center md:gap-6 gap-4">
                        <img
                            className="rounded-full w-18"
                            src={student.image}
                            alt=""
                        />

                        <div className="leading-8">
                            <p>{student.name}</p>
                            <p className="text-sm text-gray-700/80 ">
                                {student.email}
                            </p>
                        </div>
                    </article>
                ))}
                {students.map((student) => (
                    <article className="flex items-center md:gap-6 gap-4">
                        <img
                            className="rounded-full w-18"
                            src={student.image}
                            alt=""
                        />

                        <div className="leading-8">
                            <p>{student.name}</p>
                            <p className="text-sm text-gray-700/80 ">
                                {student.email}
                            </p>
                        </div>
                    </article>
                ))}
                {students.map((student) => (
                    <article className="flex items-center md:gap-6 gap-4">
                        <img
                            className="rounded-full w-18"
                            src={student.image}
                            alt=""
                        />

                        <div className="leading-8">
                            <p>{student.name}</p>
                            <p className="text-sm text-gray-700/80 ">
                                {student.email}
                            </p>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
};

export default CoachesStudent;
