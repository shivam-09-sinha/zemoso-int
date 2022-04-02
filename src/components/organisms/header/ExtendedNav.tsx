import styled from "@emotion/styled";
import MenuTabs from "../../molecules/menu/MenuTabs";
import MenuFirstCol from "../../molecules/menu/MenuFirstCol";
import MenuSecondCol from "../../molecules/menu/MenuSecondCol";
import MenuThirdCol from "../../molecules/menu/MenuThirdCol";
import theme from "../../../Theme";

const textHover = "#0365F2";

const DivOverlay = styled.div`
  position: fixed;
  top: 10%;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgb(157, 163, 166, 0.45);
  display: none;
  overflow: auto;
  @media screen and (max-width: 450px) {
    scroll-behavior: smooth;
    top: 16%;
    font-size: 80%;
  }
`;

const DivExtendedNav = styled.div`
  background-color: #f1f6f4;
  padding: 0 15%;
  overflow-x: scroll;
  @media screen and (max-width: 450px) {
    padding: 0 10%;
}
`;

const DivCategoryRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  & ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  & li {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    & p {
      color: #6d787e;
    }
  }

  & li:hover {
    color: ${textHover};
    cursor: default;
    & p {
      color: ${textHover};
    }
  }
  @media screen and (max-width: 450px) {
    width: 200%;
  }
`;

function ExtendedNav() {
  return (
    <DivOverlay id="extended-nav">
      <DivExtendedNav>
        <MenuTabs />
        <DivCategoryRow>
          <ul>
            <MenuFirstCol />
          </ul>
          <ul>
            <MenuSecondCol />
          </ul>
          <ul>
            <MenuThirdCol />
          </ul>
        </DivCategoryRow>
      </DivExtendedNav>
    </DivOverlay>
  );
}

export default ExtendedNav;
