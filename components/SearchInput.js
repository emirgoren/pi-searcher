import React from 'react'

export default function SearchInput({searchValue, handleSearchChange}) {
    return (
        <div>
            <input value={searchValue} onChange={handleSearchChange} />
        </div>
    )
}
