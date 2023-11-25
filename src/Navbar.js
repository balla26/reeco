import React from 'react';
import styled from 'styled-components';
import { BsCart } from 'react-icons/bs';
import { BsArrowDown } from 'react-icons/bs';

const NavB= styled.div`
  font-size: 1.5em;
  text-align: center;
  background-color: #236242;
  color: #fcfcfc;
  display: flex;
  align-items: center; 
  font-family:sans-serif;
  cursor: pointer;
  padding-top: 10px;
`;

const Para = styled.p`
  font-size: 0.8em;
  color: #d1d2d2;
  font-weight: 100;
  margin-left: 60px;
`;

const CartIcon = styled(BsCart)`
  color: #fff;
  font-size: 0.8em;;
  margin-top: 4px;
  transform: scaleX(-1); 
`;

const StyledArrowDropDown = styled(BsArrowDown)`  
  color: #fff; 
  font-size:0.8rem;   
`;

const LeftAlign = styled.div`
  float: left;
  display: flex;
`

const RightAlign = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
`


const Navbar = () => {
  return (
    <NavB>
      <div className='container'>
      <LeftAlign>
        <h4>Reeco</h4>
        <Para>Store</Para>
        <Para>Orders</Para>
        <Para>Analytics</Para>
      </LeftAlign>
      
      <RightAlign>
        <CartIcon />
        <Para>Hello, James 
          <StyledArrowDropDown />
        </Para>
      </RightAlign>
      </div>
    </NavB>
  );
};

export default Navbar;
