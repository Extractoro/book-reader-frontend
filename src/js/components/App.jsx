// додати до реєстрації
// import Media from 'react-media';
// import InfoMobile from 'js/pages/InfoMobile/InfoMobile';

import Container from 'js/utils/Container/Container';
import AppBar from './AppBar/AppBar';
import { Route, Routes } from 'react-router-dom';
// import ModalLibrary from './ModalLibrary/Modal-library';
import LibraryForm from './LibraryForm/LibraryForm';

export const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route path="/login" element={<p>Login</p>} />
          <Route path="/register" element={<p>Register</p>} />
          <Route path="/library" element={<LibraryForm />} />
        </Route>
      </Routes>
    </Container>
  );
};
