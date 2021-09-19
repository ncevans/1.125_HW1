/************************************************************/
/*    NAME: Craig Evans                                     */
/*    ORGN: MIT, Cambridge MA                               */
/*    FILE: PathDevelop.cpp                                 */
/*    DATE: September 19, 2021                              */
/*    Code referenced from course 1.125 Dr. Abel Sanchez    */
/************************************************************/

var express = require('express');
var app = express();
var fetch = require('node-fetch');
app.get('/', (req,res) => res.send('hello world!'));

app.get('/buses', async (req,res) => {
var url= 'https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip';
var response = await fetch(url);    
var json = await response.json();
res.send(json.data);
})

app.listen('3000', () => console.log('Running on 3000'));