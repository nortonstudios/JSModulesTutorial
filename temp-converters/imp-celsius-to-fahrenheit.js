import { celsiusToFahrenheit } from './celsius-to-fahrenheit';

const celsiusInput = process.argv[2];
const fahrenheitValue = celsiusToFahrenheit(celsiusInput);

console.log(`\n\n${celsiusInput} degrees Celsius = ${fahrenheitValue} degrees Fahrenheit\n\n`);
