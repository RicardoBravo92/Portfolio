import { BrowserRouter } from 'react-router-dom';

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
} from './components';

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-primary text-text flex flex-col">
        <Navbar />
        <main className="flex-1 flex flex-col ">
          <div className="bg-primary"><Hero /></div>
          <div className="bg-secondary"><About /></div>
          <div className="bg-primary"><Experience /></div>
          <div className="bg-secondary"><Tech /></div>
          <div className="bg-primary"><Works /></div>
          {/* <Feedbacks /> */}
          <div className="bg-secondary"><Contact /></div>
        </main>
        {/* Puedes agregar un Footer minimalista aquí si lo deseas */}
      </div>
    </BrowserRouter>
  );
};

export default App;
