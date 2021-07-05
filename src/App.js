import { Provider } from 'react-redux'
import store from './redux/store'
import './App.css';
import  PostsContainer from './components/PostsContainer'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PostsContainer />
      </div>
    </Provider>
  );
}

export default App;