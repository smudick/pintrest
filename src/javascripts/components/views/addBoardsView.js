import form from '../forms/boardForm';

const addBoardView = (user) => {
  $('#app').html('<div id="board-form">Put board form here</div>');
  form.boardForm(user);
};

export default { addBoardView };
