import axios from 'axios'

export default axios.create({
    baseURL: 'http://localhost:5000'
})
// to launch the json server 
// npx json-server -p 3500 -w data/db.json
