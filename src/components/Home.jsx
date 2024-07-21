import { useState } from 'react';
import PersonForm from './PersonForm.jsx';
import GroupGrid from './GroupGrid.jsx';

const Home = () => {
    const [people, setPeople] = useState([]);
    const [groups, setGroups] = useState([]);

    const addPerson = (name) => {
        setPeople([...people, name]);
    };

    const randomizeGroups = () => {
        const shuffled = [...people].sort(() => 0.5 - Math.random());
        const newGroups = [];
        for (let i = 0; i < shuffled.length; i += 4) {
            newGroups.push(shuffled.slice(i, i + 4));
        }
        setGroups(newGroups);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Random Group Generator</h1>
            <PersonForm addPerson={addPerson} />
            <button
                onClick={randomizeGroups}
                className="bg-green-500 text-white px-4 py-2 rounded mb-4"
            >
                Randomize Groups
            </button>
            <GroupGrid groups={groups} />
        </div>
    );
};

export default Home;
