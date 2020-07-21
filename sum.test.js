import sum from './sum';

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('object equality', () =>{
    const personalInformation = {
        name: 'Ben'
    }

    personalInformation['age'] = 99;

    expect(personalInformation).toEqual({
        name: 'Ben',
        age: 99
    });
});