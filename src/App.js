import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Add from './Components/Add';
import Thead from './Components/Thead';
import Tbody from './Components/Tbody';
import { useState } from 'react';

function App() {

  const [allInfo, setAllInfo] = useState([])

  function deleteProps(index){
    allInfo.splice(index,1)
    let e = [...allInfo]
    setAllInfo(e)
  }

  return(
    <div>
      <div className='container'>
        <div className='row mt-5'>
          <div className='col-md-10 offset-1'>
            <Add allInfo={allInfo} setAllInfo={setAllInfo}/>
            <table className='table mt-5'>
                <Thead/>
                <Tbody setAllInfo={setAllInfo} deleteProps={deleteProps} allInfo={allInfo}/>
            </table>
          </div>
        </div>
      </div>
    </div>
    )
}

export default App
