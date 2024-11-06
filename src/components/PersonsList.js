import React, { useEffect, useState } from 'react';
import { getPersons, deletePerson } from '../services/api';
import { Table, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

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
          <th>Emmmmail</th>
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
              <Button variant="warning" onClick={() => onEdit(person)}>
                <FontAwesomeIcon icon={faEdit} /> Edit
              </Button>
              {' '}
              <Button variant="danger" onClick={() => handleDelete(person.id)}>
                <FontAwesomeIcon icon={faTrash} /> Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default PersonsList;
