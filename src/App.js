import React, { useState } from 'react';
import PersonsList from './components/PersonsList';
import PersonForm from './components/PersonForm';
import { Container } from 'react-bootstrap';

const App = () => {
  const [selectedPerson, setSelectedPerson] = useState(null);

  const handleEdit = (person) => setSelectedPerson(person);
  const handleSave = () => setSelectedPerson(null);
  const handleCancel = () => setSelectedPerson(null);

  return (
    <Container>
      <h1>CRUD Application</h1>
      <PersonForm person={selectedPerson} onSave={handleSave} onCancel={handleCancel} />
      <PersonsList onEdit={handleEdit} />
    </Container>
  );
};

export default App;
