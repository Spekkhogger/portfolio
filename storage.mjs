export function setKey(key, value) {
    localStorage.setItem(key, JSON.stringify(value)); 
}

export function loadKey (key){
    try {
        const value = localStorage.getItem(key);
        return JSON.parse(value); 
    }catch(error) {
        return null;
    }
}

export function removeKey (key){
    localStorage.removeItem(key); 
}