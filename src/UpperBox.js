import React from 'react';
import styled from 'styled-components';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import LunchDiningOutlinedIcon from '@mui/icons-material/LunchDiningOutlined';
import RamenDiningOutlinedIcon from '@mui/icons-material/RamenDiningOutlined';
import BakeryDiningOutlinedIcon from '@mui/icons-material/BakeryDiningOutlined';
import LiquorOutlinedIcon from '@mui/icons-material/LiquorOutlined';
import AcUnitOutlinedIcon from '@mui/icons-material/AcUnitOutlined';
import EggAltOutlinedIcon from '@mui/icons-material/EggAltOutlined';
import IcecreamOutlinedIcon from '@mui/icons-material/IcecreamOutlined';
import RiceBowlOutlinedIcon from '@mui/icons-material/RiceBowlOutlined';

const BoxH4 = styled.h4`
    color: grey;
    font-size: 0.8em;
    margin: 0px;
    margin-bottom: 10px;
    font-family: sans-serif;
    font-weight: bold;
`

const BoxH1 = styled.h1`
    color: black;
    font-size: 1.2em;
    font-weight: bold;
    margin: 0px;
    font-family: sans-serif;
`

const BoxItem = styled.div`
    flex: 1; 
    flex-direction: column;
    display: flex;
    justify-content: space-evenly; 
    font-family: sans-serif;
`
const SpaceEvenly = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 3px;
    
    & svg {
        font-size: 16px;
    }
`


const  UpperBox = () => {
  return (
    <div>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem style={{ backgroundColor: 'black', width: '0.8px' }}/>}
        spacing={2}
      >
        <BoxItem>
            <BoxH4>Supplier</BoxH4>
            <BoxH1>East coast fruits & vegetables</BoxH1>
        </BoxItem>
        <BoxItem>
            <BoxH4>Shipping date</BoxH4>
            <BoxH1>Thu, Feb 10</BoxH1>
        </BoxItem>
        <BoxItem>
            <BoxH4>Total</BoxH4>
            <BoxH1>$ 15,028.3</BoxH1>
        </BoxItem>
        <BoxItem>
            <BoxH4>Category</BoxH4>
            <BoxH1>
              <SpaceEvenly>
                <LunchDiningOutlinedIcon />
                <RamenDiningOutlinedIcon />
                <AcUnitOutlinedIcon />
                <LiquorOutlinedIcon />
              </SpaceEvenly>
              <SpaceEvenly>
                <EggAltOutlinedIcon />
                <RiceBowlOutlinedIcon />
                <BakeryDiningOutlinedIcon />
                <IcecreamOutlinedIcon />
              </SpaceEvenly>
            </BoxH1>
        </BoxItem>
        <BoxItem>
            <BoxH4>Department</BoxH4>
            <BoxH1>300-444-678</BoxH1>
        </BoxItem>
        <BoxItem>
            <BoxH4>Status</BoxH4>
            <BoxH1>Awaiting your approvel</BoxH1>
        </BoxItem>
      </Stack>
    </div>
  );
}

export default UpperBox;
