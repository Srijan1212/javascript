function generatePassword(Passwordlength, includelowerCase, includeupperCase, includeSymbols, includeNumbers) {
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const Symbols = "!@#$%^&*()_+-=";
    const Numbers = "0123456789";
    let allowedChars = "";
    let password = "";
    allowedChars += includelowerCase ? lowerCaseChars : "";
    allowedChars += includeupperCase ? upperCaseChars : "";
    allowedChars += includeSymbols ? Symbols : "";
    allowedChars += includeNumbers ? Numbers : "";

    if (Passwordlength <= 0) {
        return `(the password length must be at least 1)`;
    }
    if (allowedChars.length === 0) {
        return `(at least one set of characters needs to be selected)`;
    }
    for (let i = 0; i < Passwordlength; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

const Passwordlength = 12;
const includelowerCase = true;
const includeupperCase = true;
const includeSymbols = true;
const includeNumbers = true;

const password = generatePassword(
    Passwordlength,
    includelowerCase,
    includeupperCase,
    includeSymbols,
    includeNumbers
);

console.log(`Generated Password: ${password}`);

