//
var visited: Array<Array<boolean>> =  [
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false]
  ]
  var connected: Array<Array<boolean>> =  [
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false]
  ]
  type node = {
    i: number,
    j: number,
    prev?: node
  }
  const adj = (node: node): Array<node> => {
    return [ {i: node.i + 1, j: node.j, prev: node}, {i: node.i , j: node.j - 1, prev: node}, {i: node.i - 1, j: node.j, prev: node}, {i: node.i, j: node.j + 1, prev: node},  ]
  }
  const isBorder = (node: node, matrix: Array<Array<number>>): boolean=>{
    return ( node.i == 0 || node.i == matrix.length - 1 || node.j == 0 || node.j == matrix.length - 1 )
  }
  const value = (node: node, matrix: Array<Array<number>>): number =>{
    return matrix[node.i][node.j]
  }
  // this array contains node to change to 0
  type toChange = {
    array: Array<node>,
    yes: boolean
  }
  var toChange: Array<toChange> = [];
  var line: number = 0;
  const checkNode = (node: node, matrix: Array<Array<number>> ) =>{
    if ( visited[node.i][node.j] ) return; 
  
    visited[node.i][node.j] = true;
    if ( value(node, matrix) == 0 ){
      console.log(node)
      adj(node).forEach(ad => {
        if ( !isBorder(ad, matrix) ){
          checkNode(ad, matrix);
        }
      } )
    }
    if ( value(node, matrix) == 1 ){
      if ( node.prev && value(node.prev, matrix) == 0 ){
        line++
      }
      
      adj(node).forEach(ad => {
        console.log(isBorder(ad, matrix));
        console.log(value(ad, matrix));
  
        if ( isBorder(ad, matrix) && value(ad, matrix ) == 1){
          toChange[line].yes = false;
        }else {
          /* ad.prev = node; */
          toChange[line].array.push(node);
          if ( !isBorder(ad, matrix) ){
            checkNode(ad, matrix)
          }
        }
      })
   }
  
  }
  
 export const solve = (matrix: Array<Array<number>>)=>{
    checkNode({ i: 1, j: 1}, matrix);
    toChange.forEach(line=>{
      if(line.yes){
        line.array.forEach(node=>{
          matrix[node.i][node.j] = 0
        })
      }
    })
  }
  var matrix = [
    [1, 0, 1, 0, 0],
    [0, 1, 1, 0, 1],
    [0, 0, 0, 1, 0],
    [0, 1, 1, 0, 1],
    [1, 0, 0, 0, 0],
  ]
  /* checkNode({ i: 1, j: 1}, matrix); */
  solve(matrix);
  console.log(matrix);
  //