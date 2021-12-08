import { withUnits } from '..';

// 🧭🧭 time: 10 minutes

// 💰 check if it returns { count: '5', unit:'K'} for 5000
// 💰 check if it returns { count: '50', unit:'K'} for 50000
// 💰 check if it returns { count: '500', unit:'K'} for 500000
// 💰 check if it returns { count: '5', unit:'M'} for 5000000
// 💰 check if it returns NaN for 'sss'

// useful links
// https://jestjs.io/docs/expect#toequalvalue
// https://jestjs.io/docs/expect#tobenan

// code here 🔥

test('number units', () => {
  expect(withUnits(5000, 2)).toEqual({ count: '5', unit: 'K' });
  expect(withUnits(50000, 2)).toEqual({ count: '50', unit: 'K' });
  expect(withUnits(500000, 2)).toEqual({ count: '500', unit: 'K' });
  expect(withUnits(5000000)).toEqual({ count: '5', unit: 'M' });
  expect(withUnits('sss')).toBeNaN();
});
