import { isCssColor, upperFirst } from '..';

// 🧭🧭 time: 10 minutes

//  💰 write describe block to test all helpers  ***  https://jestjs.io/docs/api#describename-fn

//  upperFirst

//  💰 write your test block to test upperFirst function *** https://jestjs.io/docs/api#testname-fn-timeout

//  💰 check if it return Ali for 'ali'  *** https://jestjs.io/docs/expect#tobevalue

//  💰 check if it won't return alex for 'Alex'  *** https://jestjs.io/docs/expect#not

//  💰 check if it return Front End for 'front end'  *** https://jestjs.io/docs/expect#not

// isCssColor

//  💰 write your test block to test isCssColor function

//  💰 check if it returns true for #ddd;  *** https://jestjs.io/docs/expect#tobetruthy

//  💰 check if it returns false for invalid arguments (null, undefined, not css colors)  *** https://jestjs.io/docs/expect#tobefalsyل

//

// code here 🔥

describe('test all helpers', () => {
  test('upperTest', () => {
    expect(upperFirst('ali')).toBe('Ali');
    expect(upperFirst('Alex')).not.toBe('alex');
    expect(upperFirst('front end')).toBe('Front End');
  });

  test('isCssColor', () => {
    expect(isCssColor('#ddd')).toBeTruthy();
    expect(isCssColor(null)).toBeFalsy();
  });
});
