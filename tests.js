// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', () => {
    it('should be a defined function', () => {
        expect(typeof sayHello).toBe('function');
})
    it('should return a string when called', () =>{
        expect(typeof sayHello()).toBe('string')
    })
    it('when passed Jane returns Hello, Jane!', () =>{
        expect(sayHello('Jane')).toBe('Hello, Jane!')
    })
    it('when passed Alex returns Hello, Alex!', () =>{
    expect(sayHello('Alex')).toBe('Hello, Alex!')
    })
    it('when passed Alex returns Hello, Pat!', () =>{
        expect(sayHello('Pat')).toBe('Hello, Pat!')
    })
    it('when passed nothing returns Hello, World!', () =>{
        expect(sayHello()).toBe('Hello, World!')
    })
    it('when passed false returns Hello, World!', () =>{
        expect(sayHello(false)).toBe('Hello, World!')
    })
    it('when passed true returns Hello, World!', () =>{
        expect(sayHello(true)).toBe('Hello, World!')
    })
})
describe('isFive', () => {
    it('should be a defined function', () => {
        expect(typeof isFive).toBe('function')
    })
    it('when passed 5 returns true', () =>{
        expect(isFive(5)).toBe(true)
    })
    it('when passed "5" returns true', () =>{
        expect(isFive("5")).toBe(true)
    })
    it('when passed 4 returns false', () =>{
        expect(isFive(4)).toBe(false)
    })
    it('when passed five returns false', () =>{
        expect(isFive('five')).toBe(false)
    })
})
describe('isEven', () => {
    it('should be a defined function', () => {
        expect(typeof isEven).toBe('function')
    })
    it('returns a boolian', () => {
        expect(typeof isEven()).toBe('boolean')
    })
    it('returns true when passed 2', () => {
        expect(isEven(2)).toBe(true)
    })
    it('returns true when passed -4', () => {
        expect(isEven(-4)).toBe(true)
    })
    it('returns false when passed 3', () => {
        expect(isEven(3)).toBe(false)
    })
    it('returns false when passed "bananna"', () => {
        expect(isEven('bananna')).toBe(false)
    })
    it('returns true when passed "8"', () => {
        expect(isEven('8')).toBe(true)
    })
    it('returns false when passed Infinity', () => {
        expect(isEven(Infinity)).toBe(false)
    })
    it('returns false when passed true', () => {
        expect(isEven(true)).toBe(false)
    })
    it('returns false when passed nothing', () => {
        expect(isEven()).toBe(false)
    })


})
describe('isVowel', () => {
    it('should be a defined function', () => {
        expect(typeof isVowel).toBe('function')
    })
    it('returns a boolian', () => {
        expect(typeof isVowel()).toBe('boolean')
    })
    it('returns true when passed "a"', () => {
        expect(isVowel('a')).toBe(true)
    })
    it('returns true when passed "A"', () => {
        expect(isVowel('A')).toBe(true)
    })
    it('returns false when passed "y"', () => {
        expect(isVowel('y')).toBe(false)
    })
    it('returns fasle when passed 4', () => {
        expect(isVowel(4)).toBe(false)
    })
    it('returns a false when passed true', () => {
        expect(isVowel(true)).toBe(false)
    })
    it('returns false when passed "banana"', () => {
        expect(isVowel("banana")).toBe(false)
    })
    it('returns false when passed nothing', () => {
        expect(isVowel()).toBe(false)
    })
})