import { Component } from '@angular/core';

@Component({
  selector: 'app-calculatrice',
  standalone: true,
  imports: [],
  templateUrl: './calculatrice.component.html',
  styleUrl: './calculatrice.component.scss'
})
export class CalculatriceComponent {
  randomNumber1: number = 0;
  randomNumber2: number = 0;
  result: number | string = 0;
  //operator : string = '';

  getRandomNumber(){
    return Math.floor(Math.random() * 10);
  }

  generateNumb1 (){
    this.randomNumber1 = this.getRandomNumber();
  }

  generateNumb2 (){
    this.randomNumber2 = this.getRandomNumber();
  }

  // Possible de passer par un setOperator si on utilise la fonction dans le HTML et la propriété this.operator
  //   setOperator(operator: string){
  //   this.operator = operator;
  //   this.calculateResult();
  // }

  /*
    Possibilité d'utiliser le this.operator directement
   */
  calculateResult(operator : string){
    switch(operator){
      case '+':
        this.result = this.randomNumber1 + this.randomNumber2;
        break;
      case '-':
        this.result = this.randomNumber1 - this.randomNumber2;
        break;
      case '/':
        this.result = this.randomNumber1 !==0? this.randomNumber1 / this.randomNumber2 : 'Division par zéro impossible' ;
        break;
      case '*':
        this.result = this.randomNumber1 * this.randomNumber2;
        break;
      default:
        console.log(`Sorry, we are out of ${operator}.`);
        this.result =0;
    }
  }


}
