const Table = ({ headers, body }) => {
    return (
        <div className="overflow-auto bg-white">
            <table className="w-full">
                <thead>
                    <tr>
                        {headers.map((header) => (
                            <th className="px-12">{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {body.map((eachBody) => (
                            <td className="px-12">{eachBody}</td>
                        ))}
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Table;
