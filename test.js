
const axios = require('axios');
// const url = 'https://us-central1-georgefane.cloudfunctions.net/cpoint-api';
const url = 'https://counterpoint-checker.herokuapp.com/';
// const url = 'http://127.0.0.1:8081/';


const body = {
    "cantus_firmus": [69, 71, 60, 62, 64, 65, 67],
    "counterpoint": [69, 71, 60, 62, 64, 65, 67],
    "key": "C"
}
const notes = 'c4 d4 e4 f4 g4 a4 b4 c5';

const midis = [69, 71, 60, 62, 64, 65, 67];
const cantus_firmus = midis;
const counterpoint = midis;

const key = 'C';
axios.post(url, { cantus_firmus, counterpoint, key })
    .then(resp => resp.data)
    .then(console.log)
    
console.log(url)