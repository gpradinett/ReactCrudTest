import axios from 'axios';

const API_URL = 'http://localhost:3000/api/v1/persons';

export const getPersons = () => axios.get(API_URL);
export const getPersonById = (id) => axios.get(`${API_URL}/${id}`);
export const createPerson = (person) => axios.post(API_URL, person);
export const updatePerson = (id, person) => axios.put(`${API_URL}/${id}`, person);
export const deletePerson = (id) => axios.delete(`${API_URL}/${id}`);
