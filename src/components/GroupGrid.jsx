const GroupGrid = ({ groups }) => {
    return (
        <div className="grid grid-cols-2 gap-4">
            {groups.map((group, index) => (
                <div key={index} className="border p-4 rounded shadow">
                    <h3 className="font-bold mb-2">Group {index + 1}</h3>
                    <ul>
                        {group.map((person, idx) => (
                            <li key={idx}>{person}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default GroupGrid;
