//1) Ikki massiv berilgan. Ulardagi takrorlangan elementarni arrayga solib qaytaring

// Input: [1, 2, 3, 4], [3, 4, 5, 6]
// Output: [3, 4]
// let arr1 = [1, 2, 3, 4,5,5,5];
// let arr2 = [3, 4, 5, 6,5,5];
// function foo(a, b) {
//   let total = a.concat(b);
//   let repeat = []
//   let jv = []
//   for (let i = 0; i < total.length; i++) {
//     if(!repeat.includes(total[i])){
//         repeat.push(total[i])
//     }else{
//         jv.push(total[i])
//     }

//   }
//    console.log(jv.sort());
// }
// foo(arr1, arr2);

//2) Massiv ichida eng ko‘p uchragan elementni va uning sonini qaytaring.

// Input: [1, 2, 2, 3, 3, 3, 4]
// Output: { element: 3, count: 3 }

let arr1 =  [1, 2, 2, 3, 3, 3, 4];

function foo(n) {
    let element = []
    let count = 0
    for (let i = 0; i < n.length; i++) {
       for (let j = 0; j < n.length; j++) {
        if(n[i]==i[j]){
            count++
        }
        
       }
        console.log(count);
    }
    
    
}
foo(arr1)