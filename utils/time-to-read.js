export const getTimeToRead = (minutes) => {
  // expected outputs:
  // ${minutes} min read for less than 60 minutes
  // 1 hour read for 60 - 90 minutes
  // 1.5 hours read for minutes 90-119 minutes
  // 2 hours read for 120
  // throws error for for more than 120 minutes, error: The article can only take up to 120 mins to read

  return '7 min read';
};
