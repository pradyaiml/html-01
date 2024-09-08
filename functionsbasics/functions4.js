function isEvenOrOdd(x) {
    if (x % 2 ==0){
        return "Even";
    } else {
        return "Odd";
    }
}

const ans = isEvenOrOdd(10);
console.log(ans);