export const backend_url = "https://rajasthan-news-nl6iavcada-uc.a.run.app";

export const isBiggerWord = (arr) => {
  let biggestIndex = 0;
  let biggestWord = 0;
  let totalWords = 0;

  arr.forEach((item, index) => {
    let temp = item.split(" ");
    totalWords += temp.length;
    if (temp.length >= biggestWord) {
      biggestWord = temp.length;
      biggestIndex = index;
    }
  });

  if (totalWords >= 100) {
    arr = arr.filter((item, ind) => ind !== biggestIndex);
  }
  return arr;
};

export const formatDate = (date) => {
  const dateObject = new Date(date);
  const year = dateObject.getFullYear();
  const Month = dateObject.getMonth() + 1;
  const day = dateObject.getDate();

  const months_name = [
    "",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return `${day} ${months_name[Month]} ${year}`;
};
