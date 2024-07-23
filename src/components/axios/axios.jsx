import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaSave } from "react-icons/fa";

const Axios = () => {
    const [list, setList] = useState([]);
    const [editing, setEditing] = useState({}); // objeto que almacena los valores actuales de cada celda

    const Getlist = () => {
        axios.get("https://rickandmortyapi.com/api/character").then((value) => {
            setList(value.data.results);
        });
    }

    useEffect(() => {
        Getlist();
    }, [])

    const handleEdit = (id, field, value) => {
        if (field === 'origin.name') {
            setEditing((prevEditing) => ({
                ...prevEditing,
                [id]: {
                    ...prevEditing[id],
                    origin: { ...prevEditing[id].origin, name: value },
                },
            }));
        } else if (field === 'pecies') {
            setEditing((prevEditing) => ({
                ...prevEditing,
                [id]: { ...prevEditing[id], species: value },
            }));
        } else {
            setEditing((prevEditing) => ({ ...prevEditing, [id]: { ...prevEditing[id], [field]: value } }));
        }
    }

    const handleSave = (id) => {
        const character = list.find((item) => item.id === id);
        const updatedCharacter = { ...character, ...editing[id] };
        axios.patch(`https://rickandmortyapi.com/api/character/${id}`, updatedCharacter).then((response) => {
            setList(list.map((item) => item.id === id ? updatedCharacter : item));
            setEditing((prevEditing) => ({ ...prevEditing, [id]: null }));
        });
    }

    return (
        <div className="container my-6 mx-auto pt-6 md:p-6 lg:p-2">
            <table className="table-auto w-full shadow-md rounded-md">
                <thead className="bg-purple-600 text-white rounded-md">
                    <tr>
                        <th className="px-4 py-2">Imagen</th>
                        <th className="px-4 py-2">Nombre</th>
                        <th className="px-4 py-2">Especie</th>
                        <th className="px-4 py-2">Origen</th>
                        <th className="px-4 py-2 w-20">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((item) => {
                        return (
                            <tr key={item.id} className="hover:bg-gray-100">
                                <td className="px-4 py-2">
                                    <img src={item.image} alt={item.name} width="50" height="50" />
                                </td>
                                <td className="px-4 py-2">
                                    {editing[item.id] && editing[item.id].name ? (
                                        <input
                                            type="text"
                                            value={editing[item.id].name}
                                            onChange={(e) => handleEdit(item.id, 'name', e.target.value)}
                                        />
                                    ) : (
                                        <span>{item.name}</span>
                                    )}
                                </td>
                                <td className="px-4 py-2">
                                    {editing[item.id] && editing[item.id].species ? (
                                        <input
                                            type="text"
                                            value={editing[item.id].species}
                                            onChange={(e) => handleEdit(item.id, 'pecies', e.target.value)}
                                        />
                                    ) : (
                                        <span>{item.species}</span>
                                    )}
                                </td>
                                <td className="px-4 py-2">
                                    {editing[item.id] && editing[item.id].origin ? (
                                        <input
                                            type="text"
                                            value={editing[item.id].origin.name}
                                            onChange={(e) => handleEdit(item.id, 'origin.name', e.target.value)}
                                        />
                                    ) : (
                                        <span>{item.origin.name}</span>
                                    )}
                                </td>
                                <td className="px-4 py-2">
                                    {editing[item.id] ? (
                                        <button onClick={() => handleSave(item.id)}><FaSave /></button>
                                    ) : (
                                        <button onClick={() => setEditing((prevEditing) => ({ ...prevEditing, [item.id]: item }))}>
                                            <FaEdit />
                                        </button>
                                    )}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Axios;