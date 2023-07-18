import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/MCEOPrFCxSkuv85Y9JYV/books';

const getId = async () => {
  const resp = await axios.post('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/');
  return resp;
};

export const getBooks = async () => {
  const resp = await axios.get(url);
  return resp.data;
};

export const addbookAPI = async (book) => {
  const resp = await axios.post(url, book);
  return resp.data;
};

export const deleteBook = async (id) => {
  const deleteUrl = `${url}/${id}`;
  const resp = await axios.delete(deleteUrl, id);
  return resp;
};

export default getId;
