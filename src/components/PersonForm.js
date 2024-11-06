import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import { createPerson, updatePerson } from '../services/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { InputGroup, FormControl } from 'react-bootstrap';
import { FaUser, FaEnvelope, FaPhone } from 'react-icons/fa';
import '../App.css';

const PersonForm = ({ person, onSave, onCancel }) => {
  const [name, setName] = useState('');
  const [address, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    if (person) {
      setName(person.name);
      setEmail(person.address);
      setPhone(person.phone);
    }
  }, [person]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const personData = { name, address, phone };
    if (person) {
      await updatePerson(person.id, personData);
    } else {
      await createPerson(personData);
    }
    onSave();
    setName('');
    setEmail('');
    setPhone('');
  };

 const handleCancel  = () => {
  setName('');
  setEmail('');
  setPhone('');
  onCancel();
};

  return (
    <Form onSubmit={handleSubmit}>
    <InputGroup className="mb-3">
      <InputGroup.Text><FaUser /></InputGroup.Text>
      <FormControl type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
    </InputGroup>
    <InputGroup className="mb-3">
      <InputGroup.Text><FaEnvelope /></InputGroup.Text>
      <FormControl type="text" placeholder="Address" value={address} onChange={(e) => setEmail(e.target.value)} />
    </InputGroup>
    <InputGroup className="mb-3">
      <InputGroup.Text><FaPhone /></InputGroup.Text>
      <FormControl type="phone" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
    </InputGroup>

    <button type="submit">
        <span className="button_top">
          <FontAwesomeIcon icon={faFloppyDisk} /> Save
        </span>
      </button>
      {' '}
      <button type="button" onClick={handleCancel}>
        <span className="button_top">
          <FontAwesomeIcon icon={faPowerOff} /> Cancel
        </span>
      </button>
  </Form>
);
};

export default PersonForm;
