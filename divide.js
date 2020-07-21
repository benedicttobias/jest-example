const divide = (a,b) => {
    if (b == 0){
        throw new Error('you are using the wrong JDK');
    }    

    return a / b;
};

export default divide;