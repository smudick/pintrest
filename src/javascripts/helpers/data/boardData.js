import axios from 'axios';
import apiKeys from '../apiKeys.json';
import pinData from './pinData';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getAllBoards = (user) => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/boards.json?orderBy="userUid"&equalTo="${user}"`)
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

const addBoard = (data, user) => axios
  .post(`${baseUrl}/boards.json`, data)
  .then((response) => {
    const update = {
      uid: response.data.name,
      userUid: user
    };
    axios.patch(`${baseUrl}/boards/${response.data.name}.json`, update);
  })
  .catch((error) => console.warn(error));

const updateBoard = (uid, boardObject) => axios.patch(`${baseUrl}/boards/${uid}.json`, boardObject);

export default {
  getAllBoards,
  deleteBoard,
  addBoard,
  getSingleBoard,
  updateBoard
};
