import mockAxios from 'axios';
import { requestJsonPlaceholder } from '..';

// 🧭🧭 time: 20 minutes

// 💰 fetch comments from /posts/:id/comments

// 1) use promise

// 💰 test if comments have email property

// 💰 test if comments have body property

// 💰 2) refactor to use async await

// 💰 3) refactor to mock axios

// 💰  add an assertion to check axios has been called once

// 💰 4) now test if we have email for users  ==> endpoint: /users

// useful links:
// https://jestjs.io/docs/asynchronous#promises

// https://jestjs.io/docs/expect#tohavepropertykeypath-value

// https://jestjs.io/docs/expect#expecthasassertions
// https://jestjs.io/docs/expect#expectassertionsnumber

// https://jestjs.io/docs/asynchronous#asyncawait

// https://jestjs.io/docs/mock-functions#mocking-modules

// https://jestjs.io/docs/jest-object#jestmockmodulename-factory-options

// https://jestjs.io/docs/mock-function-api#mockfnmockimplementationfn

// https://jestjs.io/docs/mock-function-api#mockfnmockresolvedvaluevalue
// https://jestjs.io/docs/mock-function-api#mockfnmockresolvedvaluevalue

// https://jestjs.io/docs/expect#tohavebeencalled
// https://jestjs.io/docs/expect#tohavebeencalledtimesnumber

// https://jestjs.io/docs/api#aftereachfn-timeout

// https://jestjs.io/docs/jest-object#jestclearallmocks

// code here 🔥

jest.mock('axios');
describe('Testing fetch', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  // test('comment should have email and body with promise without mocking', () => {
  //   return requestJsonPlaceholder('/posts/1/comments').then(
  //     ({ data: comments }) => {
  //       comments.forEach((item) => {
  //         expect(item).toHaveProperty('email');
  //         expect(item).toHaveProperty('body');
  //       });
  //     }
  //   );
  // });

  // test('comment should have email and body with async await without mocking', async () => {
  //   try {
  //     const { data: comments } = await requestJsonPlaceholder(
  //       '/posts/1/comments'
  //     );
  //     comments.forEach((item) => {
  //       expect(item).toHaveProperty('email');
  //       expect(item).toHaveProperty('body');
  //     });
  //   } catch (error) {
  //     expect(error).toMatch('error');
  //   }
  // });

  // mocking
  test('comments should have id and email with mock', () => {
    expect.hasAssertions();
    const validComments = [{ email: 'z@gmail.com', body: 'comment one' }];
    // mockAxios.mockImplementation(() =>
    //   Promise.resolve({ data: validComments })
    // );
    mockAxios.mockResolvedValue({ data: validComments });

    requestJsonPlaceholder('/posts/1/comments').then(({ data: comments }) => {
      comments.forEach((item) => {
        expect(item).toHaveProperty('email');
        expect(item).toHaveProperty('body');
      });
      expect(mockAxios).toHaveBeenCalledTimes(1);
    });
  });

  test('users should have id and email', () => {
    expect.hasAssertions();
    const users = [{ email: 'z@gmail.com' }];
    // mockAxios.mockImplementation(() => Promise.resolve({ data: comments }));
    mockAxios.mockResolvedValue({ data: users });

    return requestJsonPlaceholder('/users').then(({ data: users }) => {
      users.forEach((item) => {
        expect(item).toHaveProperty('email');
      });
      expect(mockAxios).toHaveBeenCalledTimes(1);
    });
  });
});
