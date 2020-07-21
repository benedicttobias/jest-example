import sum from './sum';

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

describe('matcher', () => {
    it('should check for object equality', () =>{
        const personalInformation = {
            name: 'Ben'
        }
    
        personalInformation['age'] = 99;
    
        expect(personalInformation).toEqual({
            name: 'Ben',
            age: 99
        });
    });
    
    it('should check for \'not\' example', () => {
        const personalInformation = {
            name: 'Ben'
        }
    
        personalInformation['age'] = 99;
    
        expect(personalInformation).not.toEqual({
            name: 'Ben',
            age: -1
        });
    });
})

