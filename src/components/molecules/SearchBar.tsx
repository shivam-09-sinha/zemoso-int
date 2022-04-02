import { Grid, TextField, InputAdornment } from "@mui/material";
import Icons from "../atoms/icons/Icons";

function SearchBar() {
  return (
    <Grid item md={8} className="search" data-testid="searchBar">
      <TextField
        variant="standard"
        fullWidth
        placeholder="Search by title or author"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Icons name="search" />
            </InputAdornment>
          ),
        }}
      />
    </Grid>
  );
}

export default SearchBar;
