import {Provider} from 'react-redux';
import {store} from './store/index';
import {Wallet} from '@src/components/Wallet';

import {useState, useEffect} from 'react';

// /vault/0x225084d30cc297f3b177d9f93f5c3ab8fb6a1454

function Test() {
  const [vaults, setVaults] = useState(null);

  useEffect(() => {
    fetch('https://api.tetu.io/api/v1/reader/vaultInfos?network=MATIC')
    .then(response => response.json())
    .then(response => setVaults(response))
    .catch(error => console.log(error))
  }, [])

  console.log('vaults', vaults);

  if (!vaults) {
    return null;
  }

  return (
    <div>
      {vaults.map(vault => {
        return (
          <div style={{marginBottom: 20}}>
            <div>active {vault.active ? 'true' : 'false'}</div>
            <div>addr {vault.addr}</div>
            <div>assets {JSON.stringify(vault.assets)}</div>
            <div>buyBackRatio {vault.buyBackRatio}</div>
            <div>created {vault.created}</div>
            <div>decimals {vault.decimals}</div>
            <div>duration {vault.duration}</div>
            <div>earned {vault.earned}</div>
            <div>name {vault.name}</div>
            <div>platform {vault.platform}</div>
            <div>ppfs {vault.ppfs}</div>
            <div>ppfsApr {vault.ppfsApr}</div>
            <div>ppfsAprMonth {vault.ppfsAprMonth}</div>
            <div>ppfsAprYear {vault.ppfsAprYear}</div>
            <div>rewardTokens {JSON.stringify(vault.rewardTokens)}</div>
            <div>rewardTokensBal {JSON.stringify(vault.rewardTokensBal)}</div>
            <div>rewardTokensBalUsdc {JSON.stringify(vault.rewardTokensBalUsdc)}</div>
            <div>rewardsApr {JSON.stringify(vault.rewardsApr)}</div>
            <div>strategy {vault.strategy}</div>
            <div>strategyCreated {vault.strategyCreated}</div>
            <div>strategyOnPause {vault.strategyOnPause}</div>
            <div>strategyRewards {JSON.stringify(vault.strategyRewards)}</div>
            <div>swapFeesAprDaily {vault.swapFeesAprDaily}</div>
            <div>swapFeesAprMonthly {vault.swapFeesAprMonthly}</div>
            <div>swapFeesAprYearly {vault.swapFeesAprYearly}</div>
            <div>tvl {vault.tvl}</div>
            <div>tvlUsdc {vault.tvlUsdc}</div>
            <div>underlying {vault.underlying}</div>
            <div>underlyingVaults {JSON.stringify(vault.underlyingVaults)}</div>
            <div>underlyingVaultsAddresses {JSON.stringify(vault.underlyingVaultsAddresses)}</div>
            <div>users {vault.users}</div>
          </div>
        );
      })}
    </div>
  )
}

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Wallet />
        <Test />
      </div>
    </Provider>
  );
}

export default App;

// Konstantin Malyutin, [17 янв. 2022 г., 18:04:25]:
// 1) сделать подключение кошелька метамаска
// 2) я дам тебе апи, сделать две операции депозит и виздрав с ваултом
// 3) вывести баланс пользователя доступный на ввод и сколько задепозитил

// если сделал - тебя берем на работу 30 в час на фултайм

// вот апишка - https://api.tetu.io/api/v1/reader/vaultInfos?network=MATIC

// эта апишка чисто для удобства фронта

// https://polygonscan.com/