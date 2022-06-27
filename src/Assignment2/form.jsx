
import React, { useState } from 'react';
import './styling.css'

function FormDisplay() {
    const [name,setName] = useState('')
    const [department,setDepartment] = useState('')
    const [rating,setRating] = useState('')
    const [list,setList] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(name,department,rating);
        const data = {name,department,rating}

        if(name&&department&&rating){
            setList((ls)=>[...ls,data])
            setName('')
            setDepartment('')
            setRating('')

        }
        else{
            alert('Fill all details')
        }
    }
     

    return ( 
    <div>
        <form onSubmit={handleSubmit}>
            <div className='label'>
                <h1 style={{color:'white' ,marginBottom:'10px'}}>EMPLOYEE FEEDBACK FORM</h1>
                <label>Name : </label>
                <input type='text' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Name' required></input>

                <label>Department : </label>
                <input type='text' value={department} onChange={(e)=>setDepartment(e.target.value)} placeholder='Department' ></input>

                <label>Rating : </label>
                <input type='number' value={rating} onChange={(e)=>setRating(e.target.value)} placeholder='Rating' required></input>

                <label>Submit</label>
                <input style={{backgroundColor:'yellow',width:'20vw' , cursor:'pointer'}} type='submit'></input>
                </div>
        </form>

    {
        list.map((a)=> <div className='BOX'>
        <div className='box'> Name:{a.name} | Department:{a.department} | Rating:{a.rating} </div>
        </div>)
    }    
{/* style={{display:'flex', justifyContent:'space-between', flexWrap:'wrap'}} */}

    </div> 
    );
}
 
export default FormDisplay;