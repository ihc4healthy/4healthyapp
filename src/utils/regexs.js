const regex = {
    oneLetter : /[a-zA-Z]/,
    oneNumber : /[0-9]/,
    userName  : /^([a-z0-9_.-]+$)/,
    email     : /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/,
};

export { regex };