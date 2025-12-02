import React from 'react'


function Search({prd , setPrd}) {
  
  function handleSearch(searchedText){
    if(searchedText.trim() === ""){
      setPrd(prd)
      return
    }
    let search = prd.filter(product => product.title.toLowerCase().includes(searchedText.toLowerCase()))
    setPrd(search)
  }
  return (
    <div>
      <input className='bg-blue-950 block w-200 p-4 text-center placeholder:text-center border border-gray-300 rounded-lg' type="text" placeholder='Search for Products....'
      onChange={(e) => handleSearch(e.target.value)}/>
    </div>
  )
}

export default Search
