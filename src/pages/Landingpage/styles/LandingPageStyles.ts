import styled from "styled-components";

interface TitleProps {
  color?: string;
}

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  min-height: 100vh;
  background: #000;
  color: #fff;

  svg {
    min-width: 400px;
    min-height: 300px;
    width: 40%;
    height: 50%;
  }

  @media screen and (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 30px;

    svg {
      width: 100%;
      min-width: 100px;
      /* width: 100%;
        height: 100%; */
    }
  }
`;

// const Logo = styled.div``;

export const Title = styled.span<TitleProps>`
  color: ${(props) => (props.color ? props.color : "#fff")};
  font-size: 4rem;
  font-family: "Ranga", cursive;
  font-weight: bold;
  text-shadow: 0px 0px 20px ${(props) => (props.color ? props.color : "#fff")};
  line-height: 50px;

  @media screen and (max-width: 1080px) {
    font-size: 2em;
    line-height: 25px;
  }
`;

export const TitlesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: center;
  line-height: auto;
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  background: #fff;
  border-radius: 8px;
  padding-left: 10px;
  margin-top: 30px;
  outline: none;
  border: none;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  padding: 10px 40px;
  border-radius: 8px;
  background: #e3680d;
  color: #fff;
  border: none;
  cursor: pointer;
  align-self: flex-end;
  margin-top: 30px;
  font-size: 18px;
  font-weight: bold;
  @media screen and (max-width: 1080px) {
    width: 100%;
    margin-bottom: 100px;
  }

  &:disabled {
      background: #c4c4c4 !important;
      cursor: not-allowed;
  }
`;

export const Form = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;

  @media screen and (max-width: 1080px) {
    width: 100%;
  }
`;

export const Brilho = styled.div`
  position: fixed;
  transform: translateY(70%);
  opacity: 0.5;
  width: 100%;
  height: 100vh;
  background: radial-gradient(
    50% 50% at 50% 50%,
    #ffffff 0%,
    rgba(255, 255, 255, 0) 100%
  );
`;
