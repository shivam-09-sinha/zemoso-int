import { Typography } from "@mui/material";
import Card from "../../molecules/card/Card";
import { bookDetailsType } from "./bookDetailsType";
import bookDetails from '../maincontent/BookDetails'
interface cardGridProps {
  status?: bookDetailsType[];
  toggle: (event: any) => void;
}
function MyLibraryCardGrid({ status, toggle }: cardGridProps) {
  if (status === undefined) {
    return (
      <>
        <Typography variant="subtitle1">Books will appear here after</Typography>
      </>
    );
  }
  else
  {
    return (
    <>
      {status?.map((ele) => {
        return (
          <Card
            coverImage={ele.coverImage}
            title={ele.title}
            author={ele.author}
            timeToRead={ele.timeToRead}
            key={ele.coverImage}
            noOfReads={ele.noOfReads}
            finishedReading={ele.finishedReading}
            toggleReading={toggle}
          />
        );
      })}
    </>
  );
  }
}

export default MyLibraryCardGrid;
