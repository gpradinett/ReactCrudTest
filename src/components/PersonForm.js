import React, { useState, useEffect } from 'react';
import { Form, Button, FloatingLabel } from 'react-bootstrap';
import { createPerson, updatePerson } from '../services/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk, faBan } from '@fortawesome/free-solid-svg-icons';


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
    <FloatingLabel controlId="floatingName" label="Name" className="mb-3">
      <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
    </FloatingLabel>
    <FloatingLabel controlId="floatingAddress" label="Address" className="mb-3">
      <Form.Control type="text" value={address} onChange={(e) => setEmail(e.target.value)} />
    </FloatingLabel>
    <FloatingLabel controlId="floatingPhone" label="Phone" className="mb-3">
      <Form.Control type="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
    </FloatingLabel>
    <Button variant="primary" type="submit">
    <FontAwesomeIcon icon={faFloppyDisk} /> Save
    </Button>
    {' '}
    <Button variant="secondary" onClick={handleCancel }>
    <FontAwesomeIcon icon={faBan} />  Cancel</Button>
  </Form>
);
};

export default PersonForm;
