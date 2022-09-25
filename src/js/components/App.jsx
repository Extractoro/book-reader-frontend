import Container from 'js/utils/Container/Container';
import InfoMobile from 'js/pages/InfoMobile/InfoMobile';
import AppBar from './AppBar/AppBar';
import { Route, Routes } from 'react-router-dom';
// import ModalLibrary from './ModalLibrary/Modal-library';
import LibraryForm from './LibraryForm/LibraryForm';

export const App = () => {
  return (
    <Container>
      <AppBar />
      <Routes>
        {/* <Route path="/" element={<InfoMobile />} />
        <Route path="/login" element={<p>Login</p>} />
        <Route path="/register" element={<p>Register</p>} />
        <Route path="/library" element={<LibraryForm />} /> */}
      </Routes>
    </Container>
  );
};
