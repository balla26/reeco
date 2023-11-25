import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { updateUser } from './UserReducer';
import image1 from './Assets/avacado.jpg';

export default function Home() {
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();

    const [clickedIds, setClickedIds] = useState([]);
    const [modalStatus, setModalStatus] = useState(null);
    const [selectedUserId, setSelectedUserId] = useState(null);

    const handleApprove = (id) => {
        // Dispatch an action to update the user's status to 'Approved'
        dispatch(
            updateUser({
                id: id,
                status: 'Approved',
            })
        );

        // Update the clickedIds array to include the clicked id
        setClickedIds((prevIds) => [...prevIds, id]);
    };

    const handleModalButtonClick = (response) => {
        // Update the status based on the response
        dispatch(
            updateUser({
                id: selectedUserId,
                status: response === 'Yes' ? 'Missing - Urgent' : 'Missing',
            })
        );

        // Close the modal
        setModalStatus(null);

        // Update CloseIcon color based on the response
        const closeIconColor = response === 'No' ? 'orange' :
                               response === 'Yes' ? 'red' : 'default';

        // Set the CloseIcon color based on the response
        const closeIconStyle = document.getElementById(`close-icon-${selectedUserId}`);
        closeIconStyle.style.color = closeIconColor;
    };

    return (
        <div className='container'>
            <table className='table'>
                <thead className="table-bordered rounded-3">
                    <tr >
                        <th>Type</th>
                        <th>Product name</th>
                        <th>Brand</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{<img src={image1} alt="avocado" style={{ width: '35px', height: '35px' }} />}</td>
                            <td>{user.name}</td>
                            <td>{user.brand}</td>
                            <td>{user.price}</td>
                            <td>{user.quantity}</td>
                            <td>{user.total}</td>
                            <td>
                                <div
                                    style={{
                                        backgroundColor: user.status === 'Approved' ? '#28a745' :
                                                          user.status === 'Missing' ? '#ff7b25' :
                                                          user.status === 'Missing - Urgent' ? 'red' : 'default',
                                        color: user.status === 'Approved' || user.status === 'Missing' || user.status === 'Missing - Urgent' ? 'white' : 'default',
                                        padding: user.status === 'Approved' || user.status === 'Missing' || user.status === 'Missing - Urgent' ? '5px 14px' : '0',
                                        borderRadius: user.status === 'Approved' || user.status === 'Missing' || user.status === 'Missing - Urgent' ? '20px' : '0',
                                        display: user.status === 'Approved' || user.status === 'Missing' || user.status === 'Missing - Urgent' ? 'inline-block' : 'default',
                                        textAlign: user.status === 'Approved' || user.status === 'Missing' || user.status === 'Missing - Urgent' ? 'center' : 'default',
                                        cursor: 'pointer',  // Assuming this is common for all statuses
                                    }}
                                >
                                    {user.status}
                                </div>
                            </td>
                            <td>
                                <CheckIcon
                                    onClick={() => handleApprove(user.id)}
                                    style={{
                                        color: clickedIds.includes(user.id) ? '#28a745' : 'default',
                                        cursor: 'pointer',
                                    }}
                                />

                                <button
                                    type="button"
                                    className='ms-2 border-0 bg-transparent'
                                    data-bs-toggle="modal"
                                    data-bs-target={`#staticBackdrop-${user.id}`}
                                    onClick={() => setSelectedUserId(user.id)}
                                >
                                    <CloseIcon
                                        id={`close-icon-${user.id}`}
                                        style={{
                                            color: 'default', // Default color for CloseIcon
                                            cursor: 'pointer',
                                        }}
                                    />
                                </button>

                                <div
                                    className="modal fade"
                                    id={`staticBackdrop-${user.id}`}
                                    data-bs-backdrop="static"
                                    data-bs-keyboard="false"
                                    tabIndex="-1"
                                    aria-labelledby={`staticBackdropLabel-${user.id}`}
                                    aria-hidden="true"
                                >
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h1 className="modal-title fs-5" id={`staticBackdropLabel-${user.id}`}>
                                                    Missing product
                                                </h1>
                                                <button
                                                    type="button"
                                                    className="btn-close"
                                                    data-bs-dismiss="modal"
                                                    aria-label="Close"
                                                ></button>
                                            </div>
                                            <div className="modal-body">
                                                <p>Is '{user.name}' urgent?</p>
                                            </div>
                                            <div className="modal-footer">
                                                <button
                                                    type="button"
                                                    className="btn btn-outline-dark"
                                                    data-bs-dismiss="modal"
                                                    onClick={() => handleModalButtonClick('No')}
                                                >
                                                    No
                                                </button>
                                                <button
                                                    type="button"
                                                    className="btn btn-outline-dark"
                                                    data-bs-dismiss="modal"
                                                    onClick={() => handleModalButtonClick('Yes')}
                                                >
                                                    Yes
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <Link to={`/edit/${user.id}`} className='border-0 bg-transparent text-black' style={{ textDecoration: 'none'}}>
                                    Edit
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
