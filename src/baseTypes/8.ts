/*
  Створіть тип "Gender", використовуючи union type, 
  який може містити значення "male", "female". Створіть змінну myGender цього типу.
*/

type TGender = "male" | "female";

let myGender: TGender;

myGender = "male";

export { TGender, myGender };
