require('dotenv').config()

const address = process.env.ADB_MAC_ADDRESS
const ifttt_key = process.env.IFTTT_KEY 
const message = process.env.MESSAGE 

if(!(address && ifttt_key && message)){
    throw new Error('There are unconfigured environment variables.')
}

module.exports  = {
    buttons:[
    {
        name: "Notice by LINE Notify",
        address: process.env.ADB_MAC_ADDRESS,
        timeout: "60000",	
        url: "https://maker.ifttt.com/trigger/adb_pressed/with/key/" + process.env.IFTTT_KEY,
        method: "POST",
        json: true,
        body: {
            value1: process.env.MESSAGE
        }
    }
    ]
}
