// import pinData from '../../helpers/data/pinData';

const pinMaker = (pinObject) => {
  const domString = `<div class="card" style="width: 18rem;">
                     <img src="${pinObject.imageUrl}" class="card-img-top" alt="${pinObject.name}">
                  <div class="card-body">
                    <h5 class="card-title">${pinObject.name}</h5>
                    <a href="#" id="${pinObject.firebaseKey}" class="btn btn-danger delete-pin"><i class="fas fa-trash-alt"></i> Delete Pin</a>
                  </div>
                  </div>`;

  return domString;
};

export default { pinMaker };
