import formatCurrency from '../scripts/utils/money.js';

if (formatCurrency(1234) === '12.34') {
  console.log('passed');
} else {
  console.error('failed');
}

if (formatCurrency(0) === '0.00') {
  console.log('passed');
} else {
  console.error('failed');
}

if (formatCurrency(2000.5) === '20.01') {
  console.log('passed');
} else {
  console.error('failed');
}

if (formatCurrency(2000.4) === '20.00') {
  console.log('passed');
} else {
  console.error('failed');
}