console.log('JS Trial')


//// PASSAGGI ESERCIZIO
///  Creare il ciclo for per 100 numeri
///     • dichiarare una variabile n che sia pari al numero di cicli che vogliamo ripetere (let n = 100)
///     • creare il ciclo for per tale variabile:
///         ► stabilire un contatore, dichiarando una variabile i che sia uguale a 0;
///         ► applicare una condizione, dove i dovrà essere minore di n per eseguire il codice
///         ► dichiarare un incremento ad i, in questo caso di 1 (++), che verrà applicato dopo che il codice sarà eseguito
///     • dichiarare un'ulteriore variabile, all'interno del ciclo for, in cui si andrà ad assegnare un valore pari ad i + 1
///     • richiedere un console.log in cui vengano stampati i valori della variabile appena dichiarata
///     $ SE TUTTO FUNZIONA, ANDARE OLTRE
///     • eliminare il precedente console log
///     • creare una variabile in cui si richiede che il resto ottenuto dividendo l'ultima variabile per 3 sia 0 
///     • creare una seconda variabile in cui si richiede che il resto ottenuto dividendo l'ultima variabile per 5 sia 0
///     • creare un "albero" di if / else if
///         ► IF se entrambe le variabili che mostrano resto sono uguali (===) a 0 allora mostrare un console.log con 'FizzBuzz'
///         ► ELSE IF se la variabile che mostra il resto del numero diviso per 3 è ugale (===) a 0 mostrare un console.log con 'Fizz'
///         ► ELSE IF se la variabile che mostra il resto del numero diviso per 5 è ugale (===) a 0 mostrare un console.log con 'Buzz'
///         ► ELSE mostrare un console.log con la variabile




const fizzBuzzBox = document.getElementById("Fizz-buzz")

// const divElement = document.createElement('div')



const n = 100;

for (let i = 0; i < n; i++){
    const divElement = document.createElement('div')
    fizzBuzzBox.appendChild (divElement);

    const number = i + 1;
    console.log(number)

    let divClass = 'box-number';
    let divContent = number;

    const restDividedBy3 = number % 3;
    const restDividedBy5 = number % 5;

    if(restDividedBy3 === 0 && restDividedBy5 === 0){
        console.log('FizzBuzz');
        divClass = 'box-fizz-buzz'
        divContent = 'FizzBuzz';

    }else if(restDividedBy3 === 0){
        console.log('Fizz');
        divClass = 'box-fizz'
        divContent = 'Fizz';

    }else if(restDividedBy5 === 0){
        console.log('Buzz');
        divClass = 'box-buzz'
        divContent = 'Buzz';
    }
    
    
    divElement.innerHTML = divContent;    
    divElement.classList.add('box', divClass)
    // console.dir(divElement)

}