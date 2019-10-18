import isPrimeNumber from 'prime-number';
import primeNumberList from 'prime-number/list';

addEventListener('message', ({ data }) => {
    const arePrimeList = primeNumberList.map((prime) => {
        return isPrimeNumber(prime);
    });
    //postMessage();
    console.log("Tis is postMessage(arePrimeList) ");

});