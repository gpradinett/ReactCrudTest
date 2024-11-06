import React, { useEffect, useState } from 'react';
import { getPersons, deletePerson } from '../services/api';
import { Table, } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

const PersonsList = ({ onEdit }) => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    fetchPersons();
  }, []);

  const fetchPersons = async () => {
    const response = await getPersons();
    setPersons(response.data);
  };

  const handleDelete = async (id) => {
    await deletePerson(id);
    fetchPersons();
  };

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>Phone</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {persons.map((person) => (
          <tr key={person.id}>
            <td>{person.name}</td>
            <td>{person.address}</td>
            <td>{person.phone}</td>
            <td>
            <button type="btn"  onClick={() => onEdit(person)}>
            <span className="button_top">
                <FontAwesomeIcon icon={faEdit} /> Edit
            </span>
            </button>
              {' '}
              <button type="button" onClick={() => handleDelete(person.id)}>
              <span className="button_top">
                <FontAwesomeIcon icon={faTrash} /> Delete
                </span>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default PersonsList;
