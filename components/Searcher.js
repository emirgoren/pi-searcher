import React, {useState, useEffect} from 'react'
import SearchInput from './SearchInput'
import ShowResult from './ShowResult'
import axios from 'axios';

export default function Searcher() {

    const [search, setSearch] = useState('');
    const [result, setResult] = useState({});
    const [err, setErr] = useState('');

    useEffect(() => {

        if(search == ''){
            setSearch('');
            setErr('');
            setResult({});
        }else{

            axios.post('/api/search', {
                searchValue: search
            }).then(res => {

                setErr('');
                
                setResult({
                    message: res.data.message,
                    position: res.data.position,
                    value: res.data.value,
                    filteredPi: res.data.filteredPi
                });
                
            }).catch(err => {

                setResult({});
                setErr(err.response.data.message);

            }); 

        }

    }, [search]);
    

    return (
        <div>
            <SearchInput setSearch={setSearch} searchValue={search}/>
            <ShowResult result={result} err={err}/>
        </div>
    )
}
