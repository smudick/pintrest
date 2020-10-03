// import boardData from '../../helpers/data/boardData';

const boardMaker = (boardObject) => {
  const domString = `<div class="card board" style="width: 18rem;" id=${boardObject.uid}"">
                     <img src="${boardObject.imageUrl}" class="card-img-top" alt="${boardObject.name}">
                  <div class="card-body">
                    <h5 class="card-title">${boardObject.name}</h5>
                    <a href='#' id="${boardObject.uid}" class="btn btn-info view-pins"> View Pins</a>
                    <a href="#" id="${boardObject.uid}" class="btn btn-danger delete-board"><i class="fas fa-trash-alt"></i> Delete Board</a>
                  </div>
                  </div>`;
  return domString;
};

export default { boardMaker };
