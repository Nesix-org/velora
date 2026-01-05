export function validateCardNumber (number:string) {
    const cardRegex = /\b\d{4}[\s-]?\d{4}[\s-]?\d{4}[\s-]?\d{4}\b/;
    return cardRegex.test(number)
}