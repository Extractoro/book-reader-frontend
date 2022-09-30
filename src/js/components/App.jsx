// додати до реєстрації
// import Media from 'react-media';
// import InfoMobile from 'js/pages/InfoMobile/InfoMobile';
import Container from 'js/utils/Container/Container';
// import AppBar from './AppBar/AppBar';
import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import MyTrainingPlaying from './MyTrainingPlaying/MyTrainingPlaying';
// import Library from 'js/pages/Library/Library';
// import Login from 'js/pages/Login/Login';
// import Register from 'js/pages/Register/Register';
// import { Workout } from 'js/pages/workout/Workout';
// import { Layout } from './Layout/Layout';


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
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="/library" element={<Library />} />
            <Route path="/workout" element={<Workout />} />

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
