// додати до реєстрації
// import Media from 'react-media';
// import InfoMobile from 'js/pages/InfoMobile/InfoMobile';

import PrivateRoute from 'js/services/Routes/PrivateRoute';
import PublicRoute from 'js/services/Routes/PublicRoute';
import Container from 'js/utils/Container/Container';
import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
// import MyTrainingPlaying from './MyTrainingPlaying/MyTrainingPlaying';

const Login = lazy(async () => {
  let obj = await import('../pages/Login/Login');
  return typeof obj.default === 'function' ? obj : obj.default;
});

const Register = lazy(async () => {
  let obj = await import('../pages/Register/Register');
  return typeof obj.default === 'function' ? obj : obj.default;
});

const Layout = lazy(async () => {
  let obj = await import('./Layout/Layout');
  return typeof obj.default === 'function' ? obj : obj.default;
});

const Library = lazy(async () => {
  let obj = await import('../pages/Library/Library');
  return typeof obj.default === 'function' ? obj : obj.default;
});

const Workout = lazy(async () => {
  let obj = await import('../pages/workout/Workout');
  return typeof obj.default === 'function' ? obj : obj.default;
});

export default function App() {
  return (
    <Container>
      <Suspense fallback={<>...</>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<PublicRoute restricted />}>
              <Route path="/register" element={<Register />} />
            </Route>
            <Route path="/" element={<PublicRoute restricted />}>
              <Route path="/login" element={<Login />} />
            </Route>

            <Route path="/" element={<PrivateRoute />}>
              <Route path="/library" element={<Library />} />
            </Route>
            <Route path="/" element={<PrivateRoute />}>
              <Route path="/workout" element={<Workout />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </Container>
    // <Container>
    //   <Routes>
    //     <Route
    //       path="/login"
    //       element={
    //         <Suspense fallback={<>...</>}>
    //           <Login />
    //         </Suspense>
    //       }
    //     />
    //     <Route
    //       path="/register"
    //       element={
    //         <Suspense fallback={<>...</>}>
    //           <Register />
    //         </Suspense>
    //       }
    //     />
    //     <Route
    //       path="/"
    //       element={
    //         <Suspense fallback={<>...</>}>
    //           <Layout />
    //         </Suspense>
    //       }
    //     >
    //       <Route
    //         path="/library"
    //         element={
    //           <Suspense fallback={<>...</>}>
    //             <Library />
    //           </Suspense>
    //         }
    //       />
    //       <Route
    //         path="/myWorkout"
    //         element={
    //           <Suspense fallback={<>...</>}>
    //             <Workout />
    //           </Suspense>
    //         }
    //       />
    //     </Route>
    //   </Routes>
    // </Container>
  );
}
