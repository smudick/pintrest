import pinData from '../../helpers/data/pinData';
import form from '../forms/updateBoardForm';

const updatePinView = (pinUid) => {
  $('#app').html('<div id="update-pin-form"></div>');
  pinData.getSinglePin(pinUid).then((response) => {
    form.updateBoardForm(response);
  });
};

export default { updatePinView };
