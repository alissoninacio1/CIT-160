function depreciation(startValue, endValue, months) {
    let d = (startValue - endValue) / months ;
    return d.toFixed(2);
}

let result = depreciation(1000.95, 950.47, 8);
console.log(result);

let secResult = depreciation(28000, 26200, 12);
console.log(secResult);


// I was running this code on the console(chrome)