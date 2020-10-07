import boardData from '../../helpers/data/boardData';
import pinData from '../../helpers/data/pinData';

const updatePinForm = (pinObject, user) => {
  $('#update-pin-form').html(`
      <h2>Update A Pin</h2>
      <div id="success-message"></div>
      <form>
        <div id="error-message"></div>
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" class="form-control" id="name" value="${pinObject.name}" placeholder="Update the pin name here!">
        </div>
        <div class="form-group">
          <label for="url">Url</label>
          <input type="text" class="form-control" id="url" value="${pinObject.url}" placeholder="Update the site's url here">
        </div>
        <div class="form-group">
          <label for="image-url">Image-Url</label>
          <input type="text" class="form-control" id="image-url" value="${pinObject.imageUrl}" placeholder="Update an image url here">
        </div>
        <div class="form-group">
        <label for="board">Board</label>
          <select class="form-control" id="board">
           <option value="">Select a Board</option>
         </select>
      </div>
        <button id="update-pin-btn" type="submit" class="btn btn-success"><i class="fas fa-plus-circle"></i> Update Pin</button>
      </form>
  `);

  boardData.getAllBoards(user).then((response) => {
    response.forEach((item) => {
      $('select').append(`<option value="${item.uid}">${item.name}</option>`);
    });
  });

  $('#update-pin-btn').on('click', (e) => {
    e.preventDefault();

    const data = {
      imageUrl: $('#image-url').val() || false,
      name: $('#name').val() || false,
      url: $('#url').val() || false,
      boardUid: $('#board').val() || false
    };

    if (Object.values(data).includes(false)) {
      $('#error-message').html(
        '<div class="alert alert-danger" role="alert">Please complete all fields</div>'
      );
    } else {
      $('#error-message').html('');

      pinData.updatePin(pinObject.uid, data).then(() => {
        $('#success-message').html(
          '<div class="alert alert-success" role="alert">Your Pin Was Updated!</div>'
        );
        setTimeout(() => {
          $('#success-message').html('');
        }, 2000);
      }).catch((error) => console.warn(error));
      $('#image-url').val('');
      $('#url').val('');
      $('#name').val('');
      $('#board').val('');
    }
  });
};

export default { updatePinForm };
