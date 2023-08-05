import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Create = () => {

    const [name,setName] = useState("");
    const [phoneNo,setPhoneNo] = useState("");
    const navigate = useNavigate();
    const MySwal = withReactContent(Swal)

   


    const createApi = async(contact) =>{
        await axios.post('http://localhost:3000/posts',contact);
        MySwal.fire({
            title: <strong>Good job!</strong>,
            html: <i>You add new data!</i>,
            icon: 'success'
          })
        navigate('/')
    }

    const clickHandler = (e)=>{
        e.preventDefault();
        const contact = {
            id:Date.now(),
            name,phoneNo
        }
        // console.log(name,phoneNo);
        createApi(contact);

    }
    
    
  return (
   
<form onSubmit={clickHandler}>
  <div className="mb-6">
    <label htmlFor="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
    <input onChange={(e)=>setName(e.target.value)} value={name} type="text" id="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required />
  </div>
  <div className="mb-6">
    <label htmlFor="number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Ph No</label>
    <input onChange={(e)=>setPhoneNo(e.target.value)} value={phoneNo} type="number" id="number" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
  </div>

  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
  <Link to='/'>
  <button type="" className="ms-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Cencle</button>
  </Link>

</form>

  )
}

export default Create