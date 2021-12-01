import { getTimeToRead } from '..';

// 🧭🧭 time: 15 minutes

// here are the expected outputs:

// ${minutes} min read for less than 60 minutes ==> 10 min read
// 1 hour read for 60 - 90 minutes
// 1.5 hours read for minutes 90-119 minutes
// 2 hours read for 120
// throws error for for more than 120 minutes, error message: The article can only take up to 120 mins to read

// 💰 write your test cases

// 💰 complete getTimeToRead function

// useful links:
// https://jestjs.io/docs/expect#tobevalue
// https://jestjs.io/docs/expect#tothrowerror

// code here 🔥
