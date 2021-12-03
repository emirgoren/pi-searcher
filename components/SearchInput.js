import React from 'react'
import styles from '../styles/Searcher.module.css';

export default function SearchInput({searchValue, setSearch}) {
    return (
        <div className={styles.searchInputDiv}>
            <input className={styles.searchInput} value={searchValue} onChange={(e) => setSearch(e.target.value)} type="text" placeholder="hey, enter your value."/>
        </div>
    )
}
