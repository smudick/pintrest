import addBoardsView from '../components/views/addBoardsView';
import addPinsView from '../components/views/addPinsView';
import boardsView from '../components/views/boardsView';
import pinsView from '../components/views/pinsView';
import updateBoardsView from '../components/views/updateBoardsView';
import updatePinsView from '../components/views/updatePinsView';

const viewHelper = (id, user, arg) => {
  $('#app').html('');

  switch (id) {
    case 'boards-link':
      return boardsView.boardsView(user);
    case 'back':
      return boardsView.boardsView(user);
    case 'single-board':
      return pinsView.pinsView(arg);
    case 'add-board-link':
      return addBoardsView.addBoardView(user);
    case 'add-pin-link':
      return addPinsView.addPinView(user);
    case 'update-board-link':
      return updateBoardsView.updateBoardView(arg);
    case 'update-pin-link':
      return updatePinsView.updatePinView(arg);
    default:
      return console.warn('nothing clicked');
  }
};

const viewListener = (view, user) => {
  viewHelper(view, user);
  $('body').on('click', 'li.nav-item', (e) => {
    viewHelper(e.currentTarget.id, user);
  });
  $('body').on('click', '.card.board .view-pins', (e) => {
    const boardUid = e.currentTarget.id;
    viewHelper('single-board', user, boardUid);
  });
  $('body').on('click', '.back', (e) => {
    viewHelper(e.currentTarget.id, user);
  });
  $('body').on('click', '.update-board', (e) => {
    const boardUid = e.currentTarget.id;
    viewHelper('update-board-link', user, boardUid);
  });
  $('body').on('click', '.update-pin', (e) => {
    const pinUid = e.currentTarget.id;
    viewHelper('update-pin-link', user, pinUid);
  });
};

export default { viewListener };
