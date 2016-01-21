//uses unit testing framework, Jasmine
describe("Throws an exception if:", function() {
  it("is not an array", function() {
    expect(function() {palindromeFactorial('race car')}).toThrow();
  });
  it("array is null", function() {
    expect(function() {palindromeFactorial(null)}).toThrow();
  });
  it("array is empty", function() {
    expect(function() {palindromeFactorial([])}).toThrow();
  });
  it("word is empty", function() {
    expect(function() {palindromeFactorial(['blah',''])}).toThrow();
  });
  it("word is null", function() {
    expect(function() {palindromeFactorial('blah',null)}).toThrow();
  });
});
describe("Palindromes", function() {
  it("1 palindrome only", function() {
    expect(palindromeFactorial(['race car'])).toEqual(1);
  });
  it("1 palindrome and other words", function() {
    expect(palindromeFactorial(['race car', 'blah'])).toEqual(1);
  });
  it("2 palindrome", function() {
    expect(palindromeFactorial(['race car','malayalam'])).toEqual(2);
  });
  it("2 palindrome and other words", function() {
    expect(palindromeFactorial(['race car','florence', 'blah','malayalam'])).toEqual(2);
  });
  it("4 palindromes only", function() {
    expect(palindromeFactorial(['race car','mom', 'dad'])).toEqual(6);
  });
  it("4 palindromes and other words", function() {
    expect(palindromeFactorial(['race car','mom', 'dad', 'florence', 'blah','malayalam'])).toEqual(24);
  });
});
