const axios = require('axios');

async function mainF(domainname) {

    var mainconfig = {
        method: 'get',
        url: `https://api.hackertarget.com/dnslookup/?q=${domainname}`
    }
    return axios(mainconfig)
        .then(async function(response) {
            if (response.data == "error input invalid - enter IP or Hostname") {
                return "That's a Wrong Domain"
            } else {
                return response.data
            }
        })
        .catch(function(error) {
            return "error"
        })
}
module.exports = {
    mainF
}