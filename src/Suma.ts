export class Suma {

  public suma(num1: number, num2: number): number|string{

    if(num1 === 0 && num2 === 0){
      return 0
    }

    if(num1 === 0){
      return num2
    }

    if(num2 === 0){
      return num1
    }

    return num1 + num2
  }

}