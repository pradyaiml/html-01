let i =1;
let j=1;

while (j < 20) {
    while(i <=10) {

        if (i % 7 == 0) //if i is divisible by 7
        {
            break;
        }
        console.log(i);
        i += 1;
    }
    j++
}
