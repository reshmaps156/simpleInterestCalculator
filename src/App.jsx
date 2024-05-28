import './App.css'
import  TextField  from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';



function App() {
  //state to hold values from input field
  const [principle,setPrinciple] =useState(0)
  const [rate,setRate] = useState(0)
  const [year,setYear] = useState(0)
  const [interest , setInterest] =useState(0)

  return (
  
      <div className='d-flex align-items-center justify-content-center border' style={{width:'100%',height:'100vh'}}>
        <div className='bg-light p-5 rounded ' style={{width:'500px'}}>
          <h1 className='text-center'> simple interest app</h1>
          <p className='text-center'>calculate your interest easily</p>
          <div className='mt-5 flex-column rounded shadow bg-warning d-flex align-items-center justify-content-center p-4'>
                <h2>₹ 100</h2>
                <p>your total interest</p>
          </div>
          <form action="" className='mt-5'>
              <div className='mb-3'>
              <TextField id="outlined-basic" label="Principle Amount" variant="outlined" className='w-100' />
              </div>
              <div  className='mb-3'>
              <TextField id="outlined-basic" label="Rate Of Interest (p.a)%" variant="outlined" className='w-100'/>
              </div>
              <div  className='mb-3'>
              <TextField id="outlined-basic" label="Year (yr)" variant="outlined" className='w-100'/>
              </div>
              <div className='d-flex justify-content-between w-100'>
              <Button variant="contained" color="success" style={{width:'190px',height:'60px'}}>Calculate</Button>
              <Button variant="outlined"  style={{width:'190px',height:'60px'}}>Reset</Button>
              </div>
          </form>

        </div>
      </div>
    
  )
}

export default App
