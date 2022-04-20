import store from './src/redux/store';
import { Provider } from 'react-redux';
import HomeStack from './homeStack';


const App=()=>{
  return(
    <Provider store={store}>
    <HomeStack/>
    </Provider>
  )
}
export default App;