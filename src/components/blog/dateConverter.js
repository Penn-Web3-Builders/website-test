export const dateConverter = (dateNumberFormat) => {
  const postDateNumber = dateNumberFormat.slice(0, 10);
  const yearNumber = +postDateNumber.slice(0, 4);
  const monthNumber = +postDateNumber.slice(5, 7);
  const dateNumber = +postDateNumber.slice(8, 10);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dateWord = `${months[monthNumber]} ${dateNumber}, ${yearNumber}`;
  return dateWord;
};
