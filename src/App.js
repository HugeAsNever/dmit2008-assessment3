import {Route, Routes} from 'react-router-dom';
import {DashBoardPage, PageNotFound, LoginPage} from './pages';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path='dashboard' element={<DashBoardPage />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
