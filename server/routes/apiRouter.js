const router = require('express').Router();
const fs = require('fs');
const path = require('path');

//give the string take the number

router.post('/search', (req, res) => {
    const { searchValue } = req.body;

    try {
        if (isNaN(parseInt(searchValue))) {
            const userValue = searchValue.toLowerCase();
            const rules = {
                a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9, k: 10, l: 00, m: 01, n: 02, o: 03, p: 04, q: 05, r: 06, s: 07, t: 08, y: 09, u: 010, w: 12, x: 13, v: 14, y: 15
            };
        
            const stringArr = userValue.split("");
        
            let finalStringWithNumbers = '';
            Object.keys(rules).forEach(key => {
                stringArr.forEach((item, index) => {
                    if (item == key) {
                        finalStringWithNumbers += rules[key];
                    }
                });
            })

            const readStream = fs.createReadStream(path.join(__dirname, '../pi.txt'));
            readStream.on('data', (chunk) => {
                // control if the searchValue is in the chunk
                const chunkString = chunk.toString();
                const index = chunkString.indexOf(finalStringWithNumbers);

                if (index !== -1) {
                    let slicedChunk, splittedChunk;
                    if (index < 10) {
                        slicedChunk = chunkString.slice(0, index + 11);
                        splittedChunk = slicedChunk.replace(searchValue, `#${searchValue}#`).split('#');
                    } else {
                        slicedChunk = chunkString.slice(index - 10, index + 11);
                        splittedChunk = slicedChunk.replace(searchValue, `#${searchValue}#`).split('#');
                    }

                    readStream.destroy();
                    res.status(200).json({
                        message: 'Value found in pi.',
                        position: index + 1,
                        value: searchValue,
                        filteredPi: splittedChunk
                    });
                }
            }).on('end', () => {
                res.status(404).json({
                    message: 'Value not found in pi.'
                });
            })
        } else {
            const readStream = fs.createReadStream(path.join(__dirname, '../pi.txt'));

            readStream.on('data', (chunk) => {
                // control if the searchValue is in the chunk
                const chunkString = chunk.toString();
                const index = chunkString.indexOf(searchValue);

                if (index !== -1) {
                    let slicedChunk, splittedChunk;
                    if (index < 10) {
                        slicedChunk = chunkString.slice(0, index + 11);
                        splittedChunk = slicedChunk.replace(searchValue, `#${searchValue}#`).split('#');
                    } else {
                        slicedChunk = chunkString.slice(index - 10, index + 11);
                        splittedChunk = slicedChunk.replace(searchValue, `#${searchValue}#`).split('#');
                    }

                    readStream.destroy();
                    res.status(200).json({
                        message: 'Value found in pi.',
                        position: index + 1,
                        value: searchValue,
                        filteredPi: splittedChunk
                    });
                }
            }).on('end', () => {
                res.status(404).json({
                    message: 'Value not found in pi.'
                });
            })
        }
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;