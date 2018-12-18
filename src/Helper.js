export function pad(number) {
    if (number <= 9) {
        number = ('0' + number).slice(-2);
    }
    return number;
}
