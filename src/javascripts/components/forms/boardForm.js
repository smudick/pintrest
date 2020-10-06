import userData from '../../helpers/data/userData';
import boardData from '../../helpers/data/boardData';

const boardForm = (user) => {
  $('#board-form').html(`
  <h2>Create a new Board</h2>
  <div id="success-message"></div>
  <form>
    <div id="error-message"></div>
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" class="form-control" id="name" placeholder="Example: Fashion">
    </div>
    <div class="form-group">
      <label for="image-url">Image-Url</label>
      <input type="text" class="form-control" id="image-url" placeholder="Enter an image url here">
    </div>
    <button id="add-board-btn" type="submit" class="btn btn-info"><i class="fas fa-plus-circle"></i> Add Board</button>
  </form>
  `);

  userData.getAllUsers().then((response) => {
    response.forEach((item) => {
      $('select').append(`<option value="${item.uid}">${item.name}</option>`);
    });
  });

  $('#add-board-btn').on('click', (e) => {
    e.preventDefault();

    const data = {
      imageUrl: $('#image-url').val() || false,
      name: $('#name').val() || false
    };

    if (Object.values(data).includes(false)) {
      $('#error-message').html(
        '<div class="alert alert-danger" role="alert">Please complete all fields</div>'
      );
    } else {
      $('#error-message').html('');

      boardData.addBoard(data, user).then(() => {
        $('#success-message').html(
          '<div class="alert alert-success" role="alert">Your Board Was Added!</div>'
        );
        setTimeout(() => {
          $('#success-message').html('');
        }, 2000);
      }).catch((error) => console.warn(error));
      $('#image-url').val('');
      $('#name').val('');
    }
  });
};

export default { boardForm };
