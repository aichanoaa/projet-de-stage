import React from 'react';
import CautionForm from './components/CautionForm';
import Split from '@uiw/react-split';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div style={{ height: 'auto' }}>
      <Split mode="horizontal">
        <div style={{ backgroundColor: 'lightblue', padding: '1rem', color: 'white' ,width:'100%',height:'auto' }}>
           
        </div>
        <div style={{  padding: '1rem', color: 'white' ,width:'100%',height:'100%'  }}>
           <CautionForm />
        </div>
      </Split>
    </div>
    
  );
}

export default App;
