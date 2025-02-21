

function get_keys(en:any, value:string):any[]{
    
    return  [...Object.values(en)]
        .filter(( v:any ) => v.toLowerCase() === value.toLowerCase())
        .map((k:any) => k);
}

function get_listkeys(en:any, value:any):any[]{
    
    return  [...en.entries()]
        .filter(({ 1: v }) => v.map((k:string)=>k.toLowerCase()).includes(value.toLowerCase()))
        .map(([k]) => k);
}

function onlyUnique(value:any, index:number, array:any[]):boolean {
    return array.indexOf(value) === index;
  }
  

export {get_keys, get_listkeys, onlyUnique}