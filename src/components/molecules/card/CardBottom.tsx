import styled from "@emotion/styled";

const DivProgressBar = styled.div`
  background-color: #f1f6f4;
  height: 18px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  & .first {
    width: 30%;
    height: 18px;
    background-color: #e1ecfc;
    z-index: 1;
    border-bottom-left-radius: 10px;
  }
`;

function ProgressBar() {
  return (
    <DivProgressBar>
      <div className="first"></div>
    </DivProgressBar>
  );
}

export default ProgressBar;
