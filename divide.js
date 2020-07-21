const divide = (a,b) => {
    if (b == 0){
        throw new Error('divider cant be 0');
    }    

    return a / b;
};

export default divide;