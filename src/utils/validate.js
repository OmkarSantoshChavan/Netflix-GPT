export const checkValidData = (email,password) => {
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/.test(email);
    const isPasswordValid = /^.{8,}$/.test(password);

    if(!isEmailValid) return "Email is not valid";
    if(!isPasswordValid) return "Password is not valid";

    if(isEmailValid && isPasswordValid) return null;
}