function Check (divisivel, nome) {
    let diviseis = [3, 5]
    diviseis.push(divisivel)
    let saidas = ["fizz", "buzz"]
    saidas.push(nome)
    
    for (let i = 0; i < 100; i++) {
        for (let j = 0; j < diviseis.length; j++) {
            if(i % diviseis[j] === 0 && diviseis[j] === 3) {
                console.log("fizz");
            } else if (i % diviseis[j] === 0 && diviseis[j] === 5) {
                console.log("buzz");
            } else if (i % diviseis[j] === 0 && diviseis[j] === divisivel) {
                console.log(i);
            } else if (i % 3 === 0 && i % 5 === 0) {
                console.log("fizz buzz");
            } else {
                console.log(i);
            }
        }
    }
}

Check(10, "João");

