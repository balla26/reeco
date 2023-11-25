import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser } from './UserReducer';
import { useSelector } from 'react-redux';
import image1 from './Assets/avacado.jpg';

export default function Create() {
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [total, setTotal] = useState('');

    const name = 'Chicken Breast Fillets';
    const brand = 'Hormel Black';

    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addUser({
            id: <img src={image1} alt="avocado" style={{ width: '40px', height: '40px' }} />,
            name,
            brand,
            price,
            quantity,
            total
        }));
        navigate('/');
    }

    return (
        <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 border rounded-5 bg-secondary text-white p-5'>
                <h3>Chicken Breast Fillets | Hormel Black</h3>
                <p>American Ronald</p>
                <form onSubmit={handleSubmit}>
                    <div className='d-flex'>
                    <img src={image1} alt="avocado" style={{ width: '300px', height: '220px' }} />
                        <div>
                            <div className='d-flex m-4'>
                                <label htmlFor='price'>Price ($): </label>
                                <input
                                    type='text'
                                    name='name'
                                    className='form-control'
                                    placeholder='Enter Price'
                                    onChange={e => setPrice(e.target.value)}
                                    required
                                />
                            </div>
                            <div className='d-flex m-4'>
                                <label htmlFor='quantity'>Quantity: </label>
                                <input
                                    type='text'
                                    name='quantity'
                                    className='form-control'
                                    placeholder='Enter Quantity'
                                    onChange={e => setQuantity(e.target.value)}
                                    required
                                />
                            </div>
                            <div className='d-flex m-4'>
                                <label htmlFor='total'>Total: </label>
                                <input
                                    type='text'
                                    name='total'
                                    className='form-control'
                                    placeholder='Enter Total'
                                    onChange={e => setTotal(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <br />
                    <button className='btn btn-success ml-3'>Send</button>
                </form>
            </div>
        </div>
    );
}
