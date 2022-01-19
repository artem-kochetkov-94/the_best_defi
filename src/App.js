import {Provider} from 'react-redux';
import {store} from './store/index';
import {Header} from '@src/components/Header';
import {Vaults} from '@src/components/Vaults';
import {Vault} from '@src/components/Vault';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import 'antd/dist/antd.css';

const appStyle = {
  maxWidth: 1400,
  margin: '0 auto',
  padding: 20,
};

function App() {
  return (
    <Provider store={store}>
      <div className="App" style={appStyle}>
        <Header />
        <Router>
          <Routes>
            <Route exact path="/" element={<Vaults />} />
            <Route path="/vault/:id" element={<Vault />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
