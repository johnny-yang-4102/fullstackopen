import React from "react"

const Filter = ({ newFilter, handleFilterChange}) => {
  return (
    <div>
      <form>
        <div>
          find countries: <input value={newFilter} onChange={handleFilterChange} />
        </div>
      </form>
    </div>
  )
}

export default Filter