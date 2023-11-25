import React from 'react';
import styled from 'styled-components';
import { StyledEngineProvider } from '@mui/material/styles';
import UpperBox from './UpperBox';
import LowerBox from './LowerBox';

const MainBody = styled.div`
    background-color: #d1d2d2;
    padding: 5px 0px;
    box-shadow: inset 0px 5px 4px 0px grey;
`
const BoxDiv = styled.div`
    background-color: #fff;
    margin: 20px 0px;
    border-radius: 5px;
    border: 1px solid #a7aca8;
    padding: 20px 40px;
`



const Main = () => {
    return (
        <>
        <MainBody>
            <div className='container'>
                <BoxDiv>
                    <StyledEngineProvider >
                        <UpperBox />
                    </StyledEngineProvider>
                </BoxDiv>
                
                <BoxDiv>
                    <StyledEngineProvider >
                        <LowerBox />
                    </StyledEngineProvider>
                </BoxDiv>
            </div>
        </MainBody>
        </>
    );
  };
  
  export default Main;