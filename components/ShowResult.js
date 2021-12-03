import React from 'react'

export default function ShowResult({result, err}) {
    return (
        <div>

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
                err ? <p>{err}</p> : null
            }
            
        </div>
    )
}


