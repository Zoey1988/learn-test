const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const formatArticleDate = (articleDate) => {
  // output format: 2019, January 23

  // TODO: change the code so it does not have current year

  // 5 mins

  const d = new Date(articleDate);
  const year = d.getFullYear();
  const date = d.getDate();
  const monthName = months[d.getMonth()];

  const now = new Date();
  const currentYear = now.getFullYear();

  const formatted =
    currentYear === year
      ? `${monthName} ${date}`
      : `${year}, ${monthName} ${date}`;

  return formatted;
};
