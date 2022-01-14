import React from 'react'
import styles from '../styles/Searcher.module.css';

export default function ShowResult({result, err}) {
    return (
        <div className={styles.resultDiv}>

            {
                result.position ? <p style={{fontSize: "15px"}}>Found in position <span style={{color:"#59B800"}}>{result.position}</span></p>: null 
            }

            <div>
                
                {
                    result.filteredPi ? result.filteredPi.map((item, index) => {
                        
                        return(
                            <p className={styles.piKey} key={index} style={result.value == item ? {color:"#E974A9"} : {color:"#000000"}}>
                                {item}
                            </p>
                        )
                                    
                    }) : null
                }

            </div>

            {
                err ? <p style={{color:"#C70000"}}>{err}</p> : null
            }
            
        </div>
    )
}


