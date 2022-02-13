import { Provider } from 'react-redux';
import store from './store';
import Header from './components/Header';
import Fibbonacci from './components/Fibonacci';

function App() {
  return (
    <div>
      <Provider store={store}>
        <Header/>
        <Fibbonacci/>
      </Provider>
    </div>
  );
}

export default App;
