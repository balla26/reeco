import React from 'react';
import styled from 'styled-components';

const HeadBox = styled.div`
  font-size: 0.8em;
  color: black;
  display: flex;
  float: right;
  font-family: sans-serif;
`;

const HeadPara = styled.p`
    font-size: 1em;
    color: grey;
    font-weight: bold;
    display: flex;
    font-family: sans-serif;
    margin-bottom: 0px;
    margin-top: 10px;
`;

const Order = styled.p`
    margin-top: 0;
    // margin-left: 46px;
    margin-right: 14px;
    margin-bottom: 0;
`;

const Underline = styled.p`
    text-decoration: underline;
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 14px;
`;

const Headh1 = styled.h1`
    float: left;
    font-size: 1.8em;
    margin-top: 14px;
    // margin-left: 46px;
    font-family: sans-serif;
    font-weight: bold;
`;

const BackButton = styled.button`
  background-color: #fff;
  border: 2px solid #236242;
  padding: 0px 10px;
  color: #236242;
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
  height: 40px;
  width: 80px;
  cursor: pointer;
  border-radius: 20px;
`;

const ApproveButton = styled.button`
  background-color: #236242;
  border: 0px;
  padding: 0px 10px;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
//   margin-right: 46px;
  margin-left: 18px;
  height: 40px;
  width: 180px;
  cursor: pointer;
  border-radius: 20px;
`;

const BoxShadow = styled.div`
    padding: 30px; 
`;

const Header = () => {
    return (
        <div className='container'>
            <HeadPara>
                <Order>Orders </Order> 
                &gt;  
                <Underline>Order 32457ABC</Underline>
            </HeadPara>
            <Headh1>Order 32457ABC</Headh1>
            <HeadBox>
                <BackButton>Back</BackButton>
                <ApproveButton>Approve Order</ApproveButton>
            </HeadBox>
            <BoxShadow />
        </div>
    );
};

export default Header;
