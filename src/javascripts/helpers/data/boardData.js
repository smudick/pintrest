import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getAllBoards = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/boards.json`)
    .then((response) => {
      const boardsData = response.data;
      const boards = [];

      if (boardsData) {
        Object.keys(boardsData).forEach((boardId) => {
          boards.push(boardsData[boardId]);
        });
      }
      resolve(boards);
    })
    .catch((error) => reject(error));
});

export default { getAllBoards };
