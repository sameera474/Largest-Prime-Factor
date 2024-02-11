
let primFactor = 2;



function resultOfNumbers(number) {
    while (number > 1) {

       
            if (number % primFactor === 0 ) {
                number = number / primFactor;
            }
            else{
                primFactor++
            }

            
        

    }
    return primFactor;

}
console.log(resultOfNumbers(600851475143));