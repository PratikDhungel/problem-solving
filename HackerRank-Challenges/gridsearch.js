function searchForPatternAtGivenGridIndex(grid, pattern, i, j){

    let k = 0;
    while(k < pattern.length){

        let l = 0;
        while(l < pattern[k].length){

            console.log("Compairing grid element", grid[i][j+l], "at (", i , "," , j, ") with pattern element", pattern[k][l], "at (", k , "," , l, ")")
            if(pattern[k][l] != grid[i][j+l]){
                // console.log("**** **** **** **** ****");
                // console.log("Pattern not detected");
                console.log("**** **** **** **** ****");
                return false;
            }
            l++;
        }
        i++;
        k++;
    }
    console.log("**** **** **** **** ****");
    console.log("Pattern detected");
    console.log("**** **** **** **** ****");
    return true;
}

function gridSearch(){

    console.log("Inside the grid search");

    let grid = [[7, 2, 8, 3, 4, 5, 5, 8, 6, 4],
            [6, 7, 3, 1, 1, 5, 8, 6, 1, 9],
            [8, 9, 8, 8, 2, 4, 2, 6, 4, 3],
            [3, 8, 3, 0, 5, 8, 9, 3, 2, 4],
            [2, 2, 2, 9, 5, 0, 5, 8, 1, 3],
            [5, 6, 3, 3, 8, 4, 5, 3, 7, 4],
            [6, 4, 7, 3, 5, 3, 0, 2, 9, 3],
            [7, 0, 5, 3, 1, 0, 6, 6, 0, 1],
            [0, 8, 3, 4, 2, 8, 2, 9, 5, 6],
            [4, 6, 0, 7, 9, 2, 4, 1, 3, 7]]
 
    let pattern = [[9, 5, 0, 5, 8],
            [3, 8, 4, 5, 3],
            [3, 5, 3, 0, 2]]


    // let grid = [[1, 2, 3, 4, 1, 2],
    //             [5, 6, 1, 2, 1, 2],
    //             [1, 2, 3, 6, 3, 4],
    //             [7, 8, 1, 2 ,8, 8]]
    
    // let pattern = [[1, 2],
    //                 [3, 4]]

    let firstElement = pattern[0][0];
    // let firstElement = 6;
    
    let i = 0;
    let gridLength = grid.length;
    let patternLength = pattern.length;

    let rowLengthOfGrid = grid[i].length;
    let rowLengthOfPattern = pattern[i].length;

    while(gridLength - i >= patternLength){
        
        let j = 0;
        while(rowLengthOfGrid - j >= rowLengthOfPattern){
            
            if(firstElement === grid[i][j]){

                console.log("First element in pattern detected at", i, j); 

                let isPatternPresentInGrid = searchForPatternAtGivenGridIndex(grid, pattern, i, j);
                if(isPatternPresentInGrid){
                    return ("YES");
                }
            }

            j++;
        }
        i++;
    }
    return "NO";
}
 
gridSearch();