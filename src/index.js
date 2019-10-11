module.exports = function zeros(expression) {
  
    let massivFactor = expression.split(/\*/);
    let t = 0;
    let f = 0;
    
    for (let i = 0; i < massivFactor.length; i++) {
        let EM = massivFactor[i].match(/!/g).length;
        let num = massivFactor[i].replace(/!+/, '');

        f+= divider(num, 5, EM);
        t+= divider(num, 2, EM);
    }

    return(Math.min(f, t));
}

function divider (number, divider, EM) {
    let sum = 0;

    if (number % 2 === 0){
        a = 2;
    } else {
        a = 1;
    }

    for (let i = a; i <= number; i+= EM) {
        let item = i;

        while (item % divider === 0) {
            item = item / divider;            
            sum++;
        }
    }    

    return sum;
}