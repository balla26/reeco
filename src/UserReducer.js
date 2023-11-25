import { createSlice } from '@reduxjs/toolkit';
import { userList } from './Data';

const userSlice = createSlice({
    name: 'user',
    initialState: userList,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload);
        },
        updateUser: (state, action) => {
            const { id, price, quantity, total, status } = action.payload;
            const updatingUser = state.find((user) => user.id == id);
            if (updatingUser) {
                updatingUser.price = price !== undefined ? price : updatingUser.price;
                updatingUser.quantity = quantity !== undefined ? quantity : updatingUser.quantity;
                updatingUser.total = total !== undefined ? total : updatingUser.total;
                updatingUser.status = status !== undefined ? status : updatingUser.status;
            }
        },        
    },
});

export const { addUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
