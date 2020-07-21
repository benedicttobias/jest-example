import divide from './divide';

test('exception example: divide by zero', () => {
    expect(() => {
        // need to wrap it in a function
        divide(3, 0) // https://jestjs.io/docs/en/expect#tothrowerror
    }).toThrow('divider cant be 0');
})