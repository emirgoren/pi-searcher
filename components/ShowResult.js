import React from 'react'
import styles from '../styles/Searcher.module.css';

export default function ShowResult({result, err}) {
    return (
        <div className={styles.resultDiv}>

            {
                result.filteredPi ? result.filteredPi.map((item, index) => {
                    console.log(item);
                    return(
                        <p key={index} style={result.value == item ? {color:"red"} : {color:"blue"}}>
                            {item}
                        </p>
                    )
                                   
                }) : null
            }

            {
                result.position ?<><br/> <div>asd</div></> : null
            }

            {
                err ? <p>{err}</p> : null
            }
            
        </div>
    )
}


