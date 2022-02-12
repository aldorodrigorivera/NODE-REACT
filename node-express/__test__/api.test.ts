import { calculateFibonacci } from "../controllers/api";

describe("Fibonacci Calculator", () => {
    it("Should calculate fibonacci of 0 = 0 ", () => {
        const result = calculateFibonacci(0);
        expect(result).toBe(0);
    });
    it("Should calculate fibonacci of 1 = 1 ", () => {
        const result = calculateFibonacci(1);
        expect(result).toBe(1);
    });
    it("Should calculate fibonacci of 2 = 1 ", () => {
        const result = calculateFibonacci(2);
        expect(result).toBe(1);
    });
    it("Should calculate fibonacci of 3 = 2 ", () => {
        const result = calculateFibonacci(3);
        expect(result).toBe(2);
    });
    it("Should calculate fibonacci of 4 = 3 ", () => {
        const result = calculateFibonacci(4);
        expect(result).toBe(3);
    });
    it("Should calculate fibonacci of 5 = 5", () => {
        const result = calculateFibonacci(5);
        expect(result).toBe(5);
    });
});