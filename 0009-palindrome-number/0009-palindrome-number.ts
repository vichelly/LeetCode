function isPalindrome(x: number): boolean {
    //se o número for negativo ou que seja multiplo de 10
    if(x < 0 || x % 10 === 0 && x !== 0){
        return false;
    }
    let reverted:number = 0;
    let original:number = x;
    while( x > 0 ){
        let digit = x % 10;
        console.log('digito '+digit);
        reverted = reverted * 10 + digit;
        console.log('reverted '+reverted);
        x = Math.floor(x / 10);
    }
    console.log('x = '+original+' ? '+' reverted = '+reverted);
    return original === reverted;
};