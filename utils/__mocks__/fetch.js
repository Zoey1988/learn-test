const fetch = jest.fn(() => {
  return Promise.resolve({
    status: '',
    data: {},
  });
});

export default fetch;
