import { formatArticleDate } from '..';

// 🧭🧭 time: 10 mins

// 💰 change the function so it doesn't show year if it's the current year

// 💰 test a date that is in current year

// 💰 test a date that is not in current year

// code here 🔥

describe('formatArticleDate', () => {
  test('should show year', () => {
    expect(formatArticleDate('2018-11-21')).toBe('2018, November 21');
    expect(formatArticleDate('2021-11-21')).toBe('November 21');
  });
});
