import cryptoJs from 'crypto-js';

export default class CommonUtils{

    private secretKey : string;

    constructor(){
        if(process.env.SECRET_KEY)
        {
            this.secretKey = process.env.SECRET_KEY;
        }else{
            throw new Error("Please provide Secret Key while starting execution.")
        }
    }

    public encryptData(data: string){
        const encryptedData = cryptoJs.AES.encrypt(data,this.secretKey).toString();
        console.log(encryptedData);
        return encryptedData;
    }

    /**
     * Provide Decrypted Data
     */
    public decryptData(encData: string){
        const decryptedData = cryptoJs.AES.decrypt(encData,this.secretKey).toString(cryptoJs.enc.Utf8);
        return decryptedData;
    }
}