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
  //fot conditional rendering 
  const [isPrinciple ,setIsPrinciple] =useState(true)
  const [isRate ,setIsRate] =useState(true)
  const [isYear ,setIsYear] =useState(true)


  const validate = (e)=>{
    let name = e.target.name
    let value = e.target.value
    // console.log(!!value.match(/^[0-9]*$/));
   
    if(!!value.match(/^[0-9]*$/)){
      if(name =="principle"){
        setPrinciple(value)
        setIsPrinciple(true)
      }else if(name =='rate'){
        setRate(value)
        setIsRate(true)
      }else{
        setYear(value)
        setIsYear(true)
      }
    }else{
      if(name =="principle"){
        setPrinciple(value)
        setIsPrinciple(false)
      }else if(name =='rate'){
        setRate(value)
        setIsRate(false)
      }else{
        setYear(value)
        setIsYear(false)
      }
    }
   
  }
  const handleReset=()=>{
    setPrinciple(0)
    setIsPrinciple(true)
    setRate(0)
    setIsRate(true)
    setYear(0)
    setIsYear(0)
    setInterest(0)
  }
  // console.log('principle',principle);
  // console.log('rate',rate);
  // console.log('year',year);

  const calculate = ()=>{
    setInterest((principle*rate*year/100))
  }

  return (
  
      <div className='d-flex align-items-center justify-content-center border' style={{width:'100%',height:'100vh'}}>
        <div className='bg-light p-5 rounded ' style={{width:'500px'}}>
          <h1 className='text-center'> simple interest app</h1>
          <p className='text-center'>calculate your interest easily</p>
          <div className='mt-5 flex-column rounded shadow bg-warning d-flex align-items-center justify-content-center p-4'>
                <h2>₹ {interest}</h2>
                <p>your total simple interest</p>
          </div>
          <form action="" className='mt-5'>
              <div className='mb-3'>
              <TextField id="outlined-basic" value={principle || ""}  label="Principle Amount" name='principle' variant="outlined" onChange={(e)=>validate(e)} className='w-100' />
              {!isPrinciple &&
                <p className='text-danger'>*Invalid input</p>}
              </div>
              <div  className='mb-3'>
              <TextField id="outlined-basic" value={rate || ""}  label="Rate Of Interest (p.a)%" name='rate' variant="outlined"  onChange={(e)=>validate(e)} className='w-100'/>
              {!isRate &&
                <p className='text-danger'>*Invalid input</p>}
              </div>
              <div  className='mb-3'>
              <TextField id="outlined-basic" value={year || ""} label="Year (yr)" variant="outlined" name='year'  onChange={(e)=>validate(e)} className='w-100'/>
              {!isYear &&
                <p className='text-danger'>*Invalid input</p>}
              </div>
              <div className='d-flex justify-content-between w-100'>
              <Button variant="contained" color="success" style={{width:'190px',height:'60px'}}disabled={isPrinciple && isRate && isYear ? false:true} onClick={calculate}>Calculate</Button>
              <Button variant="outlined"  style={{width:'190px',height:'60px'}} onClick={handleReset}>Reset</Button>
              </div>
          </form>

        </div>
      </div>
    
  )
}

export default App
