import { RecoilRoot } from 'recoil';
import './App.css';
import Router from './Routes'

function App() {
  return (
    <>
    <RecoilRoot>
      <Router/>
    </RecoilRoot>
    </>
  );
}

export default App;
