import React from 'react'
import './SearchBox.css'
import {searchCompany} from "../../utilities";
import MaterialIcon, {colorPalette} from 'material-icons-react';


const SearchBox = () => {
    const onChange = (event) => {
        searchCompany(event.target.value)}

return (

<div class="h1side">
<button><MaterialIcon icon="search" /></button>
<div class="buscadorYresultados">
  <input type="text" class="buscador" autocomplete="off" id="search" name="q" placeholder="Enter stock name or EPIC" onChange={onChange} />      
  <div class="companyList" id="companyList"></div>
</div>
</div>
)
}

export default SearchBox