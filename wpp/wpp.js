const twilio = require('twilio');
const logger = require('../logs/reqLogger')

const accountSid = "AC593fefa8673f71867108d8ee65b62cff"
const authToken = "9ad5549bbee38f39fcb4b0d7baee2c16"


const client = twilio(accountSid, authToken);

function sendWpp(dat1, dat2, prod) {
  try {
    client.messages.create({
      body: `Compra de: ${dat1}, mail: ${dat2}, productos: ${prod}`,
      from: 'whatsapp:+1561157642',       
      to: 'whatsapp:+541561157642'
    })
  } catch (error) {
    logger.error(error)
  }
}

function wppComprador(num){
    try {
        client.messages.create({
        body: `Su pedido ha sido recibido, se encuentra en proceso`,
        from: 'whatsapp:+1561157642',       
        to: `whatsapp:+${num}`
        })
    } catch (error) {
        logger.error(error)
    }
}

module.exports = { sendWpp, wppComprador }