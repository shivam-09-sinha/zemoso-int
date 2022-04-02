import { bookDetailsType } from "./bookDetailsType";

const bookDetails: bookDetailsType[] = [
  {
    title: "Bring Your Human to Work",
    author: "Erica Keswin",
    timeToRead: "13-minute read",
    coverImage: "1",
    finishedReading: false,
  },
];

export default bookDetails;

export const JSONdata = JSON.stringify(bookDetails);
