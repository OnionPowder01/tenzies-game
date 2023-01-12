import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
;

const root = ReactDOM.createRoot(document.getElementById('root'));


function MyPage() {
  return(
    
    <App/> 
    
  );
}


root.render(<MyPage/>)

