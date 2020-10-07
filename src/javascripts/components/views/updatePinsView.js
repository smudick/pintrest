import pinData from '../../helpers/data/pinData';
import form from '../forms/updatePinForm';

const updatePinView = (pinUid, user) => {
  $('#app').html('<div id="update-pin-form"></div>');
  pinData.getSinglePin(pinUid).then((response) => {
    form.updatePinForm(response, user);
  });
};

export default { updatePinView };
