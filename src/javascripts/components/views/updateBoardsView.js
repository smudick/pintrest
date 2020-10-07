import boardData from '../../helpers/data/boardData';
import form from '../forms/updateBoardForm';

const updateBoardView = (boardUid) => {
  $('#app').html('<div id="update-board-form"></div>');
  boardData.getSingleBoard(boardUid).then((response) => {
    form.updateBoardForm(response);
  });
};

export default { updateBoardView };
