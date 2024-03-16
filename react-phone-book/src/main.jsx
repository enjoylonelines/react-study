import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import ReactModal from 'react-modal'

ReactModal.setAppElement('#root');
ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)