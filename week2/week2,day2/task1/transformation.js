const prices=[120,250,300,450,600];
const result=prices
.filter(p => p >= 250)
.map(p => p *0.9);
console.log(`original total:${prices}`);
console.log(`discounted array:${result}`);
