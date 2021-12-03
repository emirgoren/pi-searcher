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
                message: 'Value must be a number.'
            });
        }else{
            
            const readStream = fs.createReadStream(path.join(__dirname, '../pi.txt'));

            readStream.on('data', (chunk) => {
                // control if the searchValue is in the chunk
                const chunkString = chunk.toString();
                const index = chunkString.indexOf(searchValue);
                
                if(index !== -1){
                    readStream.destroy();
                    res.status(200).json({
                        message: 'Value found in pi.',
                        position: index + 1,
                        value: searchValue
                    });
                }else{
                    PI += chunkString;
                }

            }).on('end', () => {
                res.status(404).json({
                    message: 'Value not found in pi.'
                });
            })

        }

    }catch(err){
        console.log(err);
    }
    

});



module.exports = router;