// let myIndexOf = (string, find) => {
//     // TODO HERE
    
//     let findLen = find.length;
//     for(let i = 0; i < string.length - findLen + 1; i++) {
//         let matchLen = 0;
//         for(let j = 0; j < findLen; j++) {
//             // console.log('aaa');

//             if(string.charAt(i + j) == find.charAt(j)) {
//                 // console.log(string.charAt(i + j), find.charAt(j));
//                 matchLen++;
//             } else {
//                 break;
//             }
//         }
//         // console.log(matchLen);
        
//         if(matchLen === findLen) {
//             return i;
//         }
//     }
    
//     return -1;
// }

// console.log(myIndexOf('abcabca', 'bca')); // 1
// console.log(myIndexOf('abcdefghijkl', 'defghijkl')); // 3
// console.log(myIndexOf('abcdefghijkl', 'abcdel')); // -1
// console.log(myIndexOf('abcdefghijkl', 'abcdefghijkl')); // 0

let foo1 = (resolve) => setTimeout(() => {
    console.log('foo1 done');
    resolve(1);
}, 1000);

let foo2 = (resolve) => setTimeout(() => {
    console.log('foo2 done');
    resolve(2);
}, 2000);

let foo3 = () => console.log('foo3 done');
// foo1 & foo2 并行，都结束后foo3执行

let p1 = new Promise((resolve, reject) => {
    foo1(resolve);
});

let p2 = new Promise((resolve, reject) => {
    foo2(resolve);
});

Promise.all([p1, p2]).then(res => {
    foo3();
});