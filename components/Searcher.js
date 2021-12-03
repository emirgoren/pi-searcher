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
            return;
        }else{
            axios.post('/api/search', {
                searchValue: search
            }).then(res => {

                setResult({
                    message: res.data.message,
                    position: res.data.position,
                    value: res.data.value,
                    filteredPi: [res.data.filteredPi]
                });
                
            }).catch(err => {
                setErr(err.response.data.message);

                setTimeout(() => {
                    setErr('');
                }, 2000);
            }); 
        }

    }, [search]);
    

    return (
        <div>
            <SearchInput setSearch={setSearch} searchValue={search}/>
            <ShowResult />
        </div>
    )
}
