/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/

type TObject = {
  [key: string | number]: any;
};

function merge<T extends TObject>(objA: T, objB: T): T {
  return Object.assign(objA, objB);
}

export {};
