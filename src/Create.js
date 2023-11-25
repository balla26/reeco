import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser } from './UserReducer';
import { useSelector } from 'react-redux';
import image1 from './Assets/avacado.jpg';

export default function Create() {
    const [price, setPrice] = useState('')
    const [quantity, setQuantity] = useState('')
    const [total, setTotal] = useState('')

    const name = 'Chicken Breast Fillets'
    const brand = 'Hormel Black'

    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addUser({id: users[users.length - 1].id + 1, name, brand, price, quantity, total}))
        navigate('/')
    }
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center '>
        <div className='w-50 border rounded-5 p-5 shadow '>
            <h3>Chicken Breast Fillets | Hormel Black</h3>
            <p>American Ronald</p>
            <div className='d-flex justify-content-around'>
                <form onSubmit={handleSubmit}>
                    <div>
                        <div>
                            <label htmlFor='price'>Price ($): </label>
                            <input type='text' name='name' className='form-control shadow ' placeholder='Enter Price'
                            onChange={e => setPrice(e.target.value)} required/>
                        </div>
                        <div>
                            <label htmlFor='quantity'>Quantity: </label>
                            <input type='text' name='quantity' className='form-control shadow ' placeholder='Enter Quantity'
                            onChange={e => setQuantity(e.target.value)} required/>
                        </div>
                        <div>
                            <label htmlFor='total'>Total: </label>
                            <input type='text' name='total' className='form-control shadow ' placeholder='Enter Total'
                            onChange={e => setTotal(e.target.value)} required/>
                        </div>
                    </div>
                    
                    <br />
                    {/* <button className='btn btn-outline-dark mr-3'>Cancel</button> */}
                    <button className='btn btn-success ml-3 shadow '>Send</button>
                </form>
                <img src={image1} alt="avocado" style={{ width: '200px', height: '200px' }} className='shadow ' />
            </div>
        </div>
    </div>
  )
}
