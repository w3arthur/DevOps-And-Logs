const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

//client server run
app.use(cors()); 
app.use(express.static(path.join(__dirname, 'client', 'build')));
app.use('/*', express.static(path.join(__dirname, 'client', 'build')))
app.use('/*/*', express.static(path.join(__dirname, 'client', 'build')))
//app.use( require('helmet')() );
app.get('/request/', (req, res) => {
    res.send('Server success! 222999');
})
app.get('*', (req,res) => res.sendFile(path.join(__dirname+'client/build/index.html')));




app.listen(3005, () => {console.log('listen to 3005')});
