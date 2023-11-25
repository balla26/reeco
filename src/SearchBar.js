import * as React from "react";
import styled from 'styled-components';
import SearchIcon from "@mui/icons-material/Search";
import PrintIcon from '@mui/icons-material/Print';
import { Link } from 'react-router-dom'

const InputBox = styled.input`
  padding-left: 15px;
  border: none;
  background-color: transparent;
  // width: 220px;
  &:focus {
    outline: none;
  }
`;

InputBox.defaultProps = {
  type: 'text',
  placeholder: 'Search...',
};

const SearchIcn = styled.div`
  border-left: 0px;
  padding-right: 10px;
  padding-top: 5px;
  border: none;
  cursor: pointer;
  margin-left:220px;
`;

const SearchHover = styled.div`
  border: 2px solid grey;
  border-radius: 20px;
  height: 36px;
  display: flex;
  &:hover {
    border: 2px solid green;
  }
`;

const PrntIcn = styled.div`
  color: #236242;
  margin-top: 5px;
  margin-left: 40px;
`

const AlignItems = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;

const AddPrint = styled.div`
  position: absolute;
  right: 166px;
  // margin-right: 48px;
  float: right;
  display: flex;
  font-weight: bold;
`;

const SearchBar = () =>  {
  return (
    <AlignItems>
      <SearchHover>
        <InputBox />
        <SearchIcn>
          <SearchIcon />
        </SearchIcn>
      </SearchHover>
      <AddPrint>
        <Link to= '/create' className='btn btn-outline-success fw-bold rounded-5'>Add item</Link>
        <PrntIcn>
            <PrintIcon />
        </PrntIcn>
      </AddPrint>
    </AlignItems>
  );
}

export default SearchBar;
