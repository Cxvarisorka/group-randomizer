import { useState } from 'react';

const PersonForm = ({ addPerson }) => {
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim()) {
            addPerson(name);
            setName('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter name"
                className="border rounded px-2 py-1 mr-2"
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                Add Person
            </button>
        </form>
    );
};

export default PersonForm;
