export type propsType = {
  coverImage: string;
  title: string;
  author: string;
  timeToRead: string;
  noOfReads?: string;
  finishedReading: boolean;
  toggleReading?: (event: any) => void;
  addToLibrary?: (ele: any) => void;
};
