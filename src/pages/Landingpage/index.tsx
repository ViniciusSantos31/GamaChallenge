import React, { useState } from "react";
import {
  Container,
  Title,
  TitlesContainer,
  Input,
  Form,
  Button,
  Brilho,
} from "./styles/LandingPageStyles";

import { BlackFriday } from "../../assets";
import Snackbar, { SnackbarOrigin } from "@material-ui/core/Snackbar";

interface State extends SnackbarOrigin {
  open: boolean;
}

const LandingPage: React.FC = () => {
  const [data, setData] = useState<{ name: string; email: string }>({
    name: "",
    email: "",
  });

  const [state, setState] = useState<State>({
    open: false,
    vertical: "top",
    horizontal: "right",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submit = () => {
    // localStorage.setItem('people', JSON.stringify([]));

    if (localStorage.getItem("people")) {
      const local = JSON.parse(localStorage.getItem("people")!);
      localStorage.setItem("people", JSON.stringify([...local, data]));
    } else {
      localStorage.setItem("people", JSON.stringify([data]));
    }

    setState({ ...state, open: true });

    setData({ name: "", email: "" });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <Container>
      <Snackbar
        anchorOrigin={{
          vertical: state.vertical,
          horizontal: state.horizontal,
        }}
        open={state.open}
        onClose={handleClose}
        message="A partir de agora você receberá as novidades por email!"
        key={state.vertical + state.horizontal}
        autoHideDuration={5000}
        onClick={handleClose}
        style={{ cursor: "pointer" }}
      />
      <BlackFriday />
      <Form>
        <TitlesContainer>
          <Title color="#E3680D">Não fique de fora dessa!</Title>
          <Title>Confira as novidades no email!</Title>
        </TitlesContainer>
        <>
          <Input
            placeholder="Nome completo"
            value={data.name}
            name="name"
            onChange={(e) => handleChange(e)}
          />
          <Input
            placeholder="Email"
            value={data.email}
            name="email"
            onChange={(e) => handleChange(e)}
          />
          <Button
            type="submit"
            onClick={submit}
            disabled={data.email === "" || data.name === ""}
          >
            Enviar
          </Button>
        </>
      </Form>
      <Brilho />
    </Container>
  );
};

export default LandingPage;
