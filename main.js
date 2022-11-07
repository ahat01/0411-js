//nuber one
let value = prompt();

if (value > 0 || value<0) {
  alert( value);
}


//switch
let a = +prompt('a?', '');
console.log(a) // string
a = +a
console.log(a) // number

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
}
switch (a){
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert('2,3');
        break;

}


//loops 1 with for
let c=0;
for (let i = 1; i <= 100; i++) {
    if (i%2==0){
        c+=i;

    }
    
  }

alert(c);

//loops 1 with while
let sum=0;
let j=0;
while(j<=100){
    if(i%2==0){
        sum=sum+j;
    }
}
alert(sum)
//loops 2
let k = 0;
while (k < 3) {
  alert( `number ${k}!` );
  k=k+1;
}

