import store from './src/redux/store';
import { Provider } from 'react-redux';
import Home from './screens/home';


const App=()=>{
  return(
    <Provider store={store}>
    <Home/>
    </Provider>
  )
}
export default App;