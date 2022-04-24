let output = document.getElementById( "output" );
let addCount = document.getElementById( "addCount" );
let lowerCount = document.getElementById( "lowerCount" );
let rest = document.getElementById( "rest" );

let sum = 0;
addCount.onclick = function ()
{
    sum = parseInt( output.innerText );
    sum += 1;
    output.innerText = sum;
};
lowerCount.onclick = function ()
{
    sum = parseInt( output.innerText );
    sum -= 1;
    output.innerText = sum;
}
rest.onclick = function ()
{
    sum =0;
    output.innerText = sum;
}
