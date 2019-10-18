import { Component } from '@angular/core';

import isPrimeNumber from 'prime-number';
import primeNumberList from 'prime-number/list';


const arePrimeList = primeNumberList.map((prime) => {
  return isPrimeNumber(prime);
});

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  //title = 'AngurlarTest3';
  title = 'web-worker';

  runWorker() {
    const worker = new Worker('AngurlarTest3/src/app.worker.ts', {
      type: 'module'
    });
    worker.onmessage = ({ data }) => {
      console.log('From Web Worker:', data);
    };
    worker.postMessage({});
  }

  runThread() {
    const arePrimeList = primeNumberList.map((prime) => {
      return isPrimeNumber(prime);
    });
    console.log('From Javascript Thread', arePrimeList);
  }
}


