import React, { useState } from 'react';
import PersonsList from './components/PersonsList';
import PersonForm from './components/PersonForm';
import { Container } from 'react-bootstrap';
import './App.css';

const App = () => {
  const [selectedPerson, setSelectedPerson] = useState(null);

  const handleEdit = (person) => setSelectedPerson(person);
  const handleSave = () => setSelectedPerson(null);
  const handleCancel = () => setSelectedPerson(null);

  return (
    <Container className="d-flex flex-column justify-content-center align-items-center min-vh-100">
      <div class="loader">
  <div data-glitch="React CRUD..." class="glitch">React CRUD...</div>
  {' '}
  </div>
      <PersonsList onEdit={handleEdit} />
      <PersonForm person={selectedPerson} onSave={handleSave} onCancel={handleCancel} />
    </Container>
  );
};

export default App;
