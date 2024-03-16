import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import ReactModal from 'react-modal'
import { Provider } from 'react-redux';
import { store } from './store/store.js';

ReactModal.setAppElement('#root');
ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
    <App />
    </Provider>
)
