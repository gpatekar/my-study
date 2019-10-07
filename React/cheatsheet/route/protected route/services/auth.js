let userName = "guru.patekar@gmail.com"
let password = "qwerty12345"

export const login = (enteredUsername, enteredPassword) => {
    if (enteredUsername === userName && enteredPassword === password) setRequested();
}

const setRequested = () => localStorage.setItem('validUser', 'true');

export const validUser = () => localStorage.getItem('validUser') === 'true';

