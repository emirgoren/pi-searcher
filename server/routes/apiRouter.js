const router = require('express').Router();
const { resolveNaptr } = require('dns');
const fs = require('fs');
const path = require('path');

let PI = '';




router.post('/search', (req, res) => {
    const {searchValue} = req.body;

    try{

        if(isNaN(parseInt(searchValue))){
            res.status(400).json({
                message: 'Search value must be a number'
            });
        }else{
            
            const readStream = fs.createReadStream(path.join(__dirname, '../pi.txt'));

            readStream.on('data', (chunk) => {
                // control if the searchValue is in the chunk
                const chunkString = chunk.toString();
                const index = chunkString.indexOf(searchValue);
                
                if(index !== -1){
                    console.log('found');
                    console.log(PI);
                    readStream.close();
                    // res.status(200).json({
                    //     message: 'Search value found in pi.txt'
                    // });
                }else{
                    PI += chunkString;
                }

            })

        }

    }catch(err){
        console.log(err);
    }
    

});



module.exports = router;