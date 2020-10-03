import card from '../cards/boardCards';
import boardData from '../../helpers/data/boardData';

const boardsView = () => {
  boardData.getAllBoards().then((response) => {
    if (response.length) {
      $('#app').append('<h1>BOARDS</h1>');
      response.forEach((board) => {
        $('#app').append(card.boardMaker(board));
      });
    } else {
      $('#app').append('<h2>NO BOARDS</h2>');
    }
  });
};

export default { boardsView };
