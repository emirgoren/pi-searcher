import React, {useState, useEffect} from 'react'
import SearchInput from './SearchInput'
import ShowResult from './SearchInput'
import axios from 'axios';

export default function Searcher() {

    const [search, setSearch] = useState('');
    const [result, setResult] = useState({
        firstPart: '',
        secondPart: '',
        thirdPart: '',
    });

    useEffect(() => {

        axios.post('/api/search', {
            searchValue: search
        }).then(res => {
            
            // setResult(res.data);
        }) 

    }, [search]);
    

    return (
        <div>
            <SearchInput setSearch={setSearch} searchValue={search}/>
            <ShowResult />
        </div>
    )
}
