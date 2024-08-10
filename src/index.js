
// You should implement your task here.

module.exports = function towelSort (matrix) {

  if(!matrix){
    return [];
  }

  let result = [];

  for(let rows = 0; rows < matrix.length; rows++){
    if(rows % 2 === 0){
      for(let columns = 0; columns < matrix[rows].length; columns++){
        result.push(matrix[rows][columns]);
      }
    }
    else{
      for(let columns = matrix[rows].length - 1; columns >= 0; columns--){
        result.push(matrix[rows][columns]);
      }
    }
  }

  return result;
}
