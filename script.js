/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperswithMap() {
  
  arr.map(printingThroughMap);
  function printingThroughMap(arrayItem){
  if(arrayItem.profession === "developer"){
    console.log(arrayItem);
  }
  }
}

function PrintDeveloperbyForEach() {
  //Write your code here
  arr.forEach(printingThroughForEach);
function printingThroughForEach(arrayItem) {
    if (arrayItem.profession === "developer") {
        console.log(arrayItem);
    }
} 
}

function addData() {
  //Write your code here
  let newarr = {id:4,name:"susan",age:"20",profession:"intern"};
arr.push(newarr);
console.log(arr);
  
}

function removeAdmin() {
  //Write your code here
}

function concatenateArray() {
  //Write your code here
  let arr2 = [{id:5,name:"mohan",age:"27",profession:"engineer"},
{id:6,name:"divya",age:"26",profession:"developer"},
{id:7,name:"sudharsan",age:"22",profession:"programmer"},];
let concatArray = arr.concat(arr2);
console.log(concatArray);
}
