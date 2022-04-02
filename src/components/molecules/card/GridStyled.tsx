import styled from "@emotion/styled";
import { Grid } from "@mui/material";

export const GridStyled = styled(Grid)`
  display: flex;
  flex-direction: column;
  width: fit-content;
  border: 1px solid #e1ecfc;
  border-bottom: none;
  border-radius: 10px;
  & .link-to {
    text-decoration: none;
    color: inherit;
  }
  & img {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  & .text {
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
    padding: 0 10px;
    margin-top: 1rem;
  }
  & .time-and-no {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: #6d787e;
  }
  & .time {
    display: flex;
  }
  & .noOfReads {
    display: flex;
  }
  & .more {
    text-align: right;
    padding-right: 10px;
  }
  & .btn-toggle {
    margin: 1rem 0;
  }
  & .bottom {
    width: 100%;
    height: 18px;
    background: rgb(225, 236, 252);
    background: linear-gradient(
      90deg,
      rgba(225, 236, 252, 1) 30%,
      rgba(241, 246, 244, 1) 30%
    );
    border-radius: 0px 0px 10px 10px;
  }
  & .btn-add {
    margin-top: 1rem;
    margin-bottom: 1px;
    border-top: 1px solid #e1ecfc;
    border-bottom: 1px solid #e1ecfc;
    padding: 14px 24px;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #0365f2;
    :hover {
      background-color: #0365f2;
      color: #ffffff;
    }
  }
  & .more {
    display: flex;
    justify-content: right;
    margin: 0.2rem 0;
  }
`;
