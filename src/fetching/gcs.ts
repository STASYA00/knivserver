

import {Storage, File} from '@google-cloud/storage';

const storage = new Storage();
const bucket = "upplys_assets";


async function listFiles(prefix:string="") {
    // Lists files in the bucket
    const options = {
      prefix: prefix,
    };
    
    const [files]: any[] = await storage.bucket(bucket).getFiles(options);
  
    return files.map((file: any) => file.name);
  }
  
  async function downloadIntoMemory(fname:string) {
    // Downloads the file into a buffer in memory.
    
    return await storage.bucket(bucket).file(fname).download().then(
        (res:any)=>res.toString());
    }
  
  export {listFiles, downloadIntoMemory};