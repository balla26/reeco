import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from './UserReducer';
import image1 from './Assets/avacado.jpg';

export default function Update() {
    const {id} = useParams();
    const users = useSelector((state) => state.users);
    const existingUser = users.filter(f => f.id == id);
    const {price, quantity, total} = existingUser[0];
    const [uprice, setPrice] = useState(price);
    const [uquantity, setQuantity] = useState(quantity);
    const [utotal, setTotal] = useState(total);
    // const status = useState(status);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(updateUser({
            id: id,
            price: uprice,
            quantity: uquantity,
            total: utotal,
            // status:status,
        }))
        navigate('/')
    }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className='w-50 border rounded-5 shadow  p-5'>
            <h3>Chicken Breast Fillets | Hormel Black</h3>
            <p>American Ronald</p>
            <div className='d-flex justify-content-around'>
                <form onSubmit={handleUpdate}>
                    <div>
                    <label htmlFor='price'>Price ($): </label>
                        <input type='text' name='price' className='form-control shadow ' placeholder='Enter Price'
                        value = {uprice} onChange={e => setPrice(e.target.value)}  required/>
                    </div>
                    <div>
                    <label htmlFor='quantity'>Quantity: </label>
                        <input type='text' name='quantity' className='form-control shadow ' placeholder='Enter Quantity'
                        value = {uquantity} onChange={e => setQuantity(e.target.value)} required/>
                    </div>
                    <div>
                    <label htmlFor='total'>Total: </label>
                        <input type='text' name='total' className='form-control shadow ' placeholder='Enter Total'
                        value = {utotal} onChange={e => setTotal(e.target.value)} required/>
                    </div>
                    <br />
                    {/* <button className='btn btn-outline-success mr-3'>Cancel</button> */}
                    <button className='btn btn-success ml-3 shadow '>Send</button>
                </form>
                <img src={image1} alt="avocado" style={{ width: '200px', height: '200px' }} className='shadow ' />
            </div>
        </div>
    </div>
  )
}





















