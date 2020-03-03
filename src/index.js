import './styles/app.scss';
import { add } from './add';

console.log('webpack-basic');
console.log(`%cadd(2, 4, 5) %cis equal to %c${add(2, 4, 5)}`, 'color: #fe6a75;', '', 'color: #fe6a75;');
