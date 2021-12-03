import React, {useState, useEffect} from 'react'
import SearchInput from './SearchInput'
import ShowResult from './SearchInput'

export default function Searcher() {

    const [search, setSearch] = useState('');
    const [result, setResult] = useState({
        firstPart: '',
        secondPart: '',
        thirdPart: '',
    });

    useEffect(() => {

        

    }, [search]);
    

    return (
        <div>
            <SearchInput setSearch={setSearch} searchValue={search}/>
            <ShowResult />
        </div>
    )
}
