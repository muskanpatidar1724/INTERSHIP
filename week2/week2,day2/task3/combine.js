const scores=[45,80,90,35,60,75];
const result=scores
.filter(m => m >=50)
.map(m => m+10)
.reduce((sum,m) => sum+m,0);
console.log(`final total:${result}`);