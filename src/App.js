import React, { Suspense } from "react";
import { ToastContainer } from 'react-toastify'
// ** Router Import
import Router from "./router/Router";

const App = () => {
  return (
    <>
    <Suspense fallback={null}>
      <Router />
    </Suspense>

        <ToastContainer
          position="top-center"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
    </>
  );
};

export default App;
