// import boardData from '../../helpers/data/boardData';

const boardMaker = (boardObject) => {
  const domString = `<div class="card" style="width: 18rem;">
                     <img src="${boardObject.imageUrl}" class="card-img-top" alt="${boardObject.name}">
                  <div class="card-body">
                    <h5 class="card-title">${boardObject.name}</h5>
                    <a href='#' id="${boardObject.firebaseKey}"
                        class="view-pins btn btn-info"><i class="far fa-edit"></i> View Pins</a>
                    <a href="#" id="${boardObject.firebaseKey}" class="btn btn-danger delete-board">Delete Board</a>
                  </div>
                  </div>`;
  return domString;
};

export default { boardMaker };
