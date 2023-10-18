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