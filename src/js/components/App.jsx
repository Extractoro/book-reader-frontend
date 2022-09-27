// додати до реєстрації
// import Media from 'react-media';
// import InfoMobile from 'js/pages/InfoMobile/InfoMobile';

import Container from 'js/utils/Container/Container';
import AppBar from './AppBar/AppBar';
import { Route, Routes } from 'react-router-dom';
import Library from 'js/pages/Library/Library';
import Login from 'js/pages/Login/Login';
import Register from 'js/pages/Register/Register';

export const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<AppBar />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/library" element={<Library />} />
          <Route path="/workout" element={<p>Workout</p>} />
        </Route>
      </Routes>
    </Container>
  );
};
