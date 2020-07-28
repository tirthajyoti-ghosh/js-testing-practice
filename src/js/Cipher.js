const caeserCipher = () => {
  const shiftChar = (charCode, offset, key) => String.fromCharCode(((charCode - offset + key) % 26) + offset);

  const encrypt = (msg, key) => {
    let encryptedMsg = '';

    for (let i = 0; i < msg.length; i += 1) {
      const charCode = msg.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
        encryptedMsg += shiftChar(charCode, 65, key);
      } else if (charCode >= 97 && charCode <= 122) {
        encryptedMsg += shiftChar(charCode, 97, key);        
      } else {
        encryptedMsg += msg[i];
      }
    }

    return encryptedMsg;
  };

  return {
    encrypt
  };
};

export default caeserCipher;
