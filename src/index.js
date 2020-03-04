import './styles/app.scss';
import { add } from './add';
import { multiplyTwo } from './multiplyTwo';

console.log('webpack-basic');
console.log(`%cadd(2, 4, 5) %cis equal to %c${add(2, 4, 5)}`, 'color: #fe6a75;', '', 'color: #fe6a75;');
console.log(`%cmultiplyTwo(4, 3) %cis equal to %c${multiplyTwo(4, 3)}`, 'color: #fe6a75;', '', 'color: #fe6a75;');
