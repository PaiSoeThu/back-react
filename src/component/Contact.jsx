import axios from 'axios';
import { useEffect, useState } from 'react'
import {AiOutlineUserAdd,AiOutlineEdit,AiOutlineDelete} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Contact = () => {

    const [contact,setContact] = useState([]);
    const getData = async() =>{
        const {data} = await axios.get('http://localhost:3000/posts');
        // console.log(data);
        setContact(data);
    }
   
    const deleteApi = async(id)=>{
        swalWithButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
          }).then(async(result) => {
            if (result.isConfirmed) {
              swalWithButtons.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            await axios.delete( `http://localhost:3000/posts/${id}`);

            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithButtons.fire(
                'Cancelled',
                'Your imaginary file is safe :)',
                'error'
              )
            }
          })
        getData() 
    }
    const swalWithButtons = Swal.mixin({
        customClass: {
          confirmButton: 'bg-green-500 text-white p-3',
          cancelButton: 'bg-red-500 p-3'
        },
        buttonsStyling: false
      })

    useEffect(()=>{
        getData() 
     },[])
    
  return (
    
<div className="relative overflow-x-auto">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">

            <tr>
                <th scope="col" className="px-6 py-3">
                Id
                </th>
                <th scope="col" className="px-6 py-3">
                Name
                </th>
                <th scope="col" className="px-6 py-3">
                Phone Number
                </th>
                <th scope="col" className="px-6 py-3">
               Settings
                </th>
            </tr>
        </thead>
        <tbody>
            {contact?.map((i)=>
                <tr className="bg-white dark:bg-gray-800" key={i.id}>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {i.id}
                </th>
                <td className="px-6 py-4">
                   { i.name}
                </td>
                <td className="px-6 py-4">
                  {  i.phoneNo}
                </td>
                <td className="px-6 py-4">
                    <div className='flex justify-between'>
                        <Link to="/create">
                        <AiOutlineUserAdd />
                        </Link>
                        <Link to={`/edit/${i.id}`}>
                        <AiOutlineEdit/>
                        </Link>
                        <Link to="/">
                        <AiOutlineDelete onClick={()=>deleteApi(i.id)}/>
                        </Link>
                    </div>
                </td>
            </tr> 
            )}
        </tbody>
    </table>
</div>

  )
}

export default Contact