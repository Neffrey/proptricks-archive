// Framework
var CryptoJS = require("crypto-js")


// Config Vars
var keySize = 128
var ivSize = 128
var iterations = 10




// Encrypt
export const encrypt = (msg, pass) => {
  var salt = CryptoJS.lib.WordArray.random(128/8)
  
  var key = CryptoJS.PBKDF2(pass, salt, {
      keySize: keySize/32,
      iterations: iterations
    })

  var iv = CryptoJS.lib.WordArray.random(128/8)
  console.log(typeof msg)
  var encrypted = CryptoJS.AES.encrypt(msg, key, { 
    iv: iv, 
    padding: CryptoJS.pad.Pkcs7,
    mode: CryptoJS.mode.CBC
    
  })
  
  // salt, iv will be hex 32 in length
  // append them to the ciphertext for use  in decryption
  var transitmessage = salt.toString()+ iv.toString() + encrypted.toString()
  return transitmessage
}





// Decrypt
export const decrypt = (transitmessage, pass) => {
  var salt = CryptoJS.enc.Hex.parse(transitmessage.substr(0, 32))
  var iv = CryptoJS.enc.Hex.parse(transitmessage.substr(32, 32))
  var encrypted = transitmessage.substring(64)

  var key = CryptoJS.PBKDF2(pass, salt, {
    keySize: keySize/32,
    iterations: iterations
  })

  var decrypted = CryptoJS.AES.decrypt(encrypted, key, { 
    iv: iv, 
    padding: CryptoJS.pad.Pkcs7,
    mode: CryptoJS.mode.CBC
    
  })

  try {
    decrypted = decrypted.toString(CryptoJS.enc.Utf8)
  } catch {
    decrypted = ""
  }

  return decrypted
}