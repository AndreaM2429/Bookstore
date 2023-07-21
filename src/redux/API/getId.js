import axios from 'axios';

const getId = async () => {
  const resp = await axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/');
  return resp;
};

export default getId;
