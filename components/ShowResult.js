import React from 'react'
import styles from '../styles/Searcher.module.css';

export default function ShowResult({result, err}) {
    return (
        <div className={styles.resultDiv}>

            {
                result.filteredPi ? result.filteredPi.map((item, index) => {
                    
                    return(
                        <p className={styles.piKey} key={index} style={result.value == item ? {color:"red"} : {color:"blue"}}>
                            {item}
                        </p>
                    )
                                   
                }) : null
            }

            {
                err ? <p>{err}</p> : null
            }
            
        </div>
    )
}


