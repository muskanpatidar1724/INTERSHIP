const fruits=["apple","banana"];
const morefruits=["cherry","mango"];
const combined=[...fruits,...morefruits];
console.log(combined);
function sum(...fruit){
    return fruit.reduce((acc,fru) => acc+fru,0);
}
console.log(sum(1,2,3,5));