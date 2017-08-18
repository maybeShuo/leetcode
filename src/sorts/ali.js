var data=[
 {id:1,name:'a',pid:0},
 {id:2,name:'b',pid:1},
 {id:3,name:'c',pid:1},
 {id:4,name:'d',pid:0},
 {id:5,name:'e',pid:2},
 {id:6,name:'f',pid:0},
 {id:7,name:'g',pid:4},
 {id:8,name:'h',pid:5},
 {id:9,name:'i',pid:8},
 {id:10,name:'h',pid:9}
];

var dataSort = data.sort((a, b) => a.pid - b.pid);
var dataArr = [].concat(dataSort.map(item => {
    item.childrens = [];
    return item;
}));

for(let i = dataSort.length - 1; i >= 0; i--) {
    var temp = dataSort[i];
    var pid = temp.pid;
    if (pid !== 0) {
        var parentIndex = dataSort.findIndex(item => item.id === pid);
        dataArr[parentIndex].childrens.push(temp);
        dataArr.pop();
    }
}

console.log(dataArr);