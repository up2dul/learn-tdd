/**
 * test scenarios for detectTriangle
 *
 * - detectTriangle function
 *   - should throw error when input is not a number
 *   - should throw error when input is not a positive number
 *   - should throw error when input is triangle inequality violation
 *   - should return "Equilateral triangle" when all input are equal
 *   - should return "Isosceles triangle" when two input are equal
 *   - should return "Scalene triangle" when all input are different
 */

const detectTriangle = require('./detectTriangle');

describe('detectTriangle function', () => {
  it('should throw error when input is not a number', () => {
    expect(() => detectTriangle('a', 2, 3)).toThrowError('Input must be a number');
    expect(() => detectTriangle(1, 'b', 3)).toThrowError('Input must be a number');
    expect(() => detectTriangle(1, 2, 'c')).toThrowError('Input must be a number');
  });

  it('should throw error when input is not a positive number', () => {
    expect(() => detectTriangle(-1, 2, 3)).toThrowError('Input must be a positive number');
    expect(() => detectTriangle(1, -2, 3)).toThrowError('Input must be a positive number');
    expect(() => detectTriangle(1, 2, -3)).toThrowError('Input must be a positive number');
    // zero is not a positive or even a negative number
    expect(() => detectTriangle(1, 2, -3)).toThrowError('Input must be a positive number');
  });

  it('should throw error when input is triangle inequality violation', () => {
    expect(() => detectTriangle(5, 1, 3)).toThrowError('Input is triangle inequality violation');
    expect(() => detectTriangle(1, 2, 3)).toThrowError('Input is triangle inequality violation');
    expect(() => detectTriangle(4, 3, 1)).toThrowError('Input is triangle inequality violation');
  });

  it('should return "Equilateral triangle" when all input are equal', () => {
    expect(detectTriangle(2, 2, 2)).toBe('Equilateral triangle');
    expect(detectTriangle(5, 5, 5)).toBe('Equilateral triangle');
    expect(detectTriangle(7, 7, 7)).toBe('Equilateral triangle');
  });

  it('should return "Isosceles triangle" when two input are equal', () => {
    expect(detectTriangle(2, 2, 3)).toBe('Isosceles triangle');
    expect(detectTriangle(7, 6, 7)).toBe('Isosceles triangle');
    expect(detectTriangle(4, 5, 5)).toBe('Isosceles triangle');
  });

  it('should return "Scalene triangle" when all input are different', () => {
    expect(detectTriangle(2, 3, 4)).toBe('Scalene triangle');
    expect(detectTriangle(5, 6, 7)).toBe('Scalene triangle');
    expect(detectTriangle(7, 8, 9)).toBe('Scalene triangle');
  });
});
