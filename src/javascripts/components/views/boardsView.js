import card from '../cards/boardCards';
import boardData from '../../helpers/data/boardData';

const boardsView = (user) => {
  boardData.getAllBoards(user).then((response) => {
    if (response.length) {
      $('#app').append('<div class="title"><h1>Boards</h1></div><div class="cards"></div>');
      response.forEach((board) => {
        $('.cards').append(card.boardMaker(board));
      });
    } else {
      $('.cards').append('<h2>NO BOARDS</h2>');
    }
  });
};

export default { boardsView };
