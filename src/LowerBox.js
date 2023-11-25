import React from 'react';
import styledd from 'styled-components';
import SearchBar from './SearchBar';
import Home from './Home';

const BoxItem = styledd.div`
    display: flex;
    font-family: sans-serif;
    margin-bottom: 20px;
`

const LowerBox = () => {
    return (
      <div>
        <BoxItem>
            <SearchBar />
        </BoxItem>
        <Home />
      </div>
    )
};

export default LowerBox;
