import React from 'react'

export default function SearchInput({searchValue, setSearch}) {
    return (
        <div>
            <input value={searchValue} onChange={(e) => setSearch(e.target.value)} type="text"/>
        </div>
    )
}
