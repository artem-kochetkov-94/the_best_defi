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

// Konstantin Malyutin, [17 янв. 2022 г., 18:04:25]:
// 1) сделать подключение кошелька метамаска
// 2) я дам тебе апи, сделать две операции депозит и виздрав с ваултом
// 3) вывести баланс пользователя доступный на ввод и сколько задепозитил

// вот апишка - https://api.tetu.io/api/v1/reader/vaultInfos?network=MATIC