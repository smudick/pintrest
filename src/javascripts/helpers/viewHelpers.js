import boardsView from '../components/views/boardsView';
import pinsView from '../components/views/pinsView';

const viewHelper = (id, arg) => {
  $('#app').html('');

  switch (id) {
    case 'boards-link':
      return boardsView.boardsView();
    case 'back':
      return boardsView.boardsView();
    case 'single-board':
      return pinsView.pinsView(arg);
    default:
      return console.warn('nothing clicked');
  }
};

const viewListener = (view) => {
  viewHelper(view);
  $('body').on('click', 'li.nav-item', (e) => {
    viewHelper(e.currentTarget.id);
  });
  $('body').on('click', '.card.board .view-pins', (e) => {
    const boardUid = e.currentTarget.id;
    viewHelper('single-board', boardUid);
  });
  $('body').on('click', '.back', (e) => {
    viewHelper(e.currentTarget.id);
  });
};

export default { viewListener };
