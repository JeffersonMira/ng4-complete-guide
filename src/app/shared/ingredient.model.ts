export class Ingredient{
  // Behind the scenes it will create the public variables in the class,
  // and make the constructor receive it and assign to the class variable.
  constructor(public name: string, public amount: number){}
}
