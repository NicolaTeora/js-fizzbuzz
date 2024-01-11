# FizzBuzz  

## Traccia:

Scrivere un programma che stampi in console i numeri da 1 a 100,
ma che i:

- multipli di 3 stampi **"Fizz"** al posto del numero;
- multipli di 5 stampi **"Buzz"** al posto del numero;
- multipli di 3 e di 5 stampi **"FizzBuzz"**.

<u>Quesiti da porsi prima di scrivere codice:</u>

- Come sapere se un numero è divisibile per un'altro?
- Cosa possiamo usare che abbiamo visto?

### Consigli:

- 1.scriviamo prima i commenti in italiano per capire cosa fare;
- 2.Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano".

### Bonus 1

Crea un container nel DOM , aggiungendo (attraverso le funzioni document.createElement() e append()) un elemento html con il numero o la stringa corretta da mostrare.

### Bonus 2

Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
Se sei a corto di idee per lo stile, potresti prendere spunto dallo screenshot fornito in consegna.

-----------------------------------------------
## Svoglimento:
Creare un ciclo **FOR** per contare da 1 a 100.

Creare un selettore che:
**SE** sono multipli di 3 "&" di 5 scrivere **FizzBuzz** al posto del numero.
**ALTRIMENTI SE** i numeri sono multipli di 3 sostituisca il numero con il testo **Fizz**
**ALTRIMENTI SE** sono multipli di 5 sostituire il numero con **Buzz**
**ALTRIMENTI** restituisci il valore numerico normale.
