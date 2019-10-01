'use strict';

let totalWeight = 0;
let args = process.argv.slice(2);

function selectServer(array) {
  let index = 0;
  let randomSelector = Math.random();
  
  while(randomSelector > 0) {
    randomSelector -= array[index].distWeight;
    index ++;
  }
  index --;
  return array[index].name;
}

// create array of objects with server name and size
let serverList = args.map(element => {
  let x = element.split(':');
  return {
    name: x[0],
    weight: parseInt(x[1]),
  }
})

serverList.sort((a, b) => b.weight - a.weight);
// calculate total weight
serverList.map(element => {
  totalWeight += element.weight;
})
// create proportional / distribution  weight
serverList.map(element => {
  element.distWeight = element.weight / totalWeight;
})

console.log('Selected Server', selectServer(serverList));


