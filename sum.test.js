import sum from './sum';

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('matcher: object equality', () =>{
    const personalInformation = {
        name: 'Ben'
    }

    personalInformation['age'] = 99;

    expect(personalInformation).toEqual({
        name: 'Ben',
        age: 99
    });
});

test('matcher: \'not\' example', () => {
    const personalInformation = {
        name: 'Ben'
    }

    personalInformation['age'] = 99;

    expect(personalInformation).not.toEqual({
        name: 'Ben',
        age: -1
    });
});