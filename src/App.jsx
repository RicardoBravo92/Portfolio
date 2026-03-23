import { BrowserRouter } from 'react-router-dom';

import {
  About,
  Contact,
  Experience,
  Education,
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
          <div className="bg-secondary"><Education /></div>
          <div className="bg-primary"><Tech /></div>
          <div className="bg-secondary"><Works /></div>
          <div className="bg-primary"><Contact /></div>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
