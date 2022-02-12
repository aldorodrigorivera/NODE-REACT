
/**
 *@description This functon will calculate fibonacci number
 *@param num this is the input itself 
 */
export function calculateFibonacci(num: number): number{
    let num1 = 0, num2 = 1, nextTerm;

    for (let i = 1; i <= num; i++) {
        nextTerm = num1 + num2;
        num1 = num2;
        num2 = nextTerm;
    }

  return num1;
}