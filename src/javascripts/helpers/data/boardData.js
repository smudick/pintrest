import axios from 'axios';
import apiKeys from '../apiKeys.json';
import pinData from './pinData';

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

const getSingleBoard = (boardUid) => new Promise((resolve, reject) => axios
  .get(`${baseUrl}/boards.json?orderBy="uid"&equalTo="${boardUid}"`)
  .then((response) => {
    const board = Object.values(response.data);
    const thisBoard = board[0];
    resolve(thisBoard);
  }).catch((error) => reject(error)));

const deleteBoard = (boardUid) => {
  pinData
    .getBoardPins(boardUid)
    .then((response) => {
      response.forEach((item) => {
        pinData.deletePin(item.uid);
      });
    })
    .then(() => {
      getSingleBoard(boardUid).then((response) => {
        axios.delete(`${baseUrl}/boards/${response.uid}.json`);
      });
    });
};

export default { getAllBoards, deleteBoard };
