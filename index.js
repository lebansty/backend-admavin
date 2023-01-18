function arrChange(a, b) {

    var arr1 = [...a];
    var arr2 = [...b];
  
    var arr3 = [];
    var arr4 = [];
  
    for (let i = 0; i < arr1.length; i++) {
  
      if (arr1[i] < arr2[i]) {
  
        arr3.push(arr2[i]);
        arr4.push(arr1[i]);
  
      } else {
  
        arr3.push(arr1[i]);
        arr4.push(arr2[i]);
  
      }
    }
  
    var alterArr1 = arr3.sort((a, b) => b - a);
    var alterArr2 = arr4.sort((a, b) => b - a);
  
    return alterArr1[0] * alterArr2[0];
  
  }
  
  console.log(arrChange([1, 2, 6, 5, 1, 2], [3, 4, 3, 2, 2, 5]));
  // Output 1 :  18
  
  console.log(
    arrChange(
      [8, 7, 9, 6, 5, 6, 6, 5, 6, 4, 6, 7, 8, 5, 4, 3, 2, 1, 4, 5, 6, 7, 8, 7, 8],
      [2, 4, 5, 6, 7, 6, 7, 8, 9, 8, 7, 6, 7, 6, 5, 4, 3, 2, 3, 4, 5, 5, 5, 4, 5]
    )
  );
  // Output 2 :  63
  
  console.log(
    arrChange(
      [1, 2, 3, 2, 3, 4, 5, 3, 5, 6, 7, 8],
      [2, 1, 5, 3, 4, 6, 4, 3, 2, 3, 1, 2]
    )
  );
