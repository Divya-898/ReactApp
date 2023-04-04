import React from 'react'
import { useSearchParams } from 'react-router-dom'

function SearchParam() {
   const[searchParam, setSearchParam] = useSearchParams();
   const handleSearch = (e)=>{
        e.preventDefault();
        alert(searchParam.get('q'));
   }
  return (
    <div>
      <h1>this is search page</h1>
      <form onSubmit={handleSearch}>
        <label htmlFor=''>search</label>
        <input type="search" placeholder='search' onChange={(e) => setSearchParam({q:e.target.value})}></input>
        <br/><br/>
        <input type="submit" value="Search"></input>

      </form>
    </div>
  )
}

export default SearchParam
