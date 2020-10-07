import userData from '../../helpers/data/userData';
import boardData from '../../helpers/data/boardData';

const updateBoardForm = (boardObject) => {
  $('#update-board-form').html(`
      <h2>Update A Board</h2>
      <div id="success-message"></div>
      <form>
        <div id="error-message"></div>
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" class="form-control" id="name" value="${boardObject.name}" placeholder="Example: Fashion">
        </div>
        <div class="form-group">
          <label for="image-url">Image-Url</label>
          <input type="text" class="form-control" id="image-url" value="${boardObject.imageUrl}" placeholder="Enter an image url here">
        </div>
        <button id="update-board-btn" type="submit" class="btn btn-success"><i class="fas fa-plus-circle"></i> Update Board</button>
      </form>
  `);

  userData.getAllUsers().then((response) => {
    response.forEach((item) => {
      $('select').append(`<option value="${item.uid}">${item.name}</option>`);
    });
  });

  $('#update-board-btn').on('click', (e) => {
    e.preventDefault();
    const data = {
      name: $('#name').val() || false,
      imageUrl: $('#image-url').val() || false
    };

    if (Object.values(data).includes(false)) {
      $('#error-message').html(
        '<div class="alert alert-danger" role="alert">Please complete all fields</div>'
      );
    } else {
      $('#error-message').html('');

      boardData.updateBoard(boardObject.uid, data).then(() => {
        $('#success-message').html(
          '<div class="alert alert-success" role="alert">Your Board Was Updated!</div>'
        );
        setTimeout(() => {
          $('#success-message').html('');
        }, 2000);
      }).catch((error) => console.warn(error));
    }
  });
};

export default { updateBoardForm };
