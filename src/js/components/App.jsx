// додати до реєстрації
// import Media from 'react-media';
// import InfoMobile from 'js/pages/InfoMobile/InfoMobile';

import Container from 'js/utils/Container/Container';
// import AppBar from './AppBar/AppBar';
import { Route, Routes } from 'react-router-dom';
import Library from 'js/pages/Library/Library';
import Login from 'js/pages/Login/Login';
import Register from 'js/pages/Register/Register';
import { Workout } from 'js/pages/workout/Workout';
import { Layout } from './Layout/Layout';
import { useDispatch } from 'react-redux';
import authOperations from 'js/redux/auth/auth-operations';
import { useEffect } from 'react';
// import AddBook from './Workout/AddBook';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.refreshCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Layout />}>
          <Route path="/library" element={<Library />} />
          <Route path="/myWorkout" element={<Workout />} />
        </Route>
      </Routes>
    </Container>
  );
};
