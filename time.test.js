import Time from './time'

test('get time without mock', () => {
    let output = Time.Now();

    console.log(output)
    expect(output).not.toBeNull();
});

test('get time with mock', () => {
    // Arrange
    jest
        .spyOn(global.Date, 'now')
        .mockImplementation(() => {
            return new Date('1990-05-05T20:17:44.859Z')
        });
    
    // Act
    let output = Time.Now();
    
    // Assert
    expect(output.getFullYear()).toBe(1990);
    expect(output.getMonth()).toBe(4); // indexed
    expect(output.getDay()).toBe(6);
});