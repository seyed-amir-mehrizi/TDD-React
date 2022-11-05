import React from 'react'

function Filter() {
  return (
    <div className='pet-filter-container'>
      <div className='filter-container'>
          <label htmlFor="favorite">Favorite</label>
          <select className='form-select' name="favorite" id="favorite">
            <option value="any">Any</option>
            <option value="favored">Favored</option>
            <option value="not favored">Not Favored</option>

          </select>
      </div>
      <div className='filter-container'>
          <label htmlFor="gender">Gender</label>
          <select className='form-select' name="gender" id="gender">
            <option value="any">Any</option>
            <option value="male">Male</option>
            <option value="female">Female</option>

          </select>
      </div>
    </div>
  )
}

export default Filter