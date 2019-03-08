let str = '';

for (let i=1; i<11; i++) {
    for (let j=1; j<11; j++) {
        str += '['+i*j+']';
    }
    str += "</br>";
}
//document.write(str);
console.log(str);