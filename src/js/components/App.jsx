import Container from "js/utils/Container/Container";
import InfoMobile from "js/pages/InfoMobile/InfoMobile";
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <Container>
      <h1>App</h1>
      <Routes>
      <Route path="/" element={<InfoMobile />} />
      <Route path="/login" element={<p>Login</p>} />
      <Route path="/register" element={<p>Register</p>} />
      </Routes>
    </Container>
  );
};
