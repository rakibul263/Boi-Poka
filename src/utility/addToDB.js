const getStoreBook = () => {
    const storeBookSTR = localStorage.getItem('readList');

    if(storeBookSTR) {
        const storedBookData = JSON.parse(storeBookSTR);
        return storedBookData;
    }
    else{
        return [];
    }
}

const addToStoreDB = (id) => {
    const storedBookData = getStoreBook();

    if(storedBookData.includes(id)) {
        console.log('This book is already in your read list');
    }
    else{
        storedBookData.push(id);
        const data = JSON.stringify(storedBookData);
        localStorage.setItem('readList', data);
    }
}

export { getStoreBook, addToStoreDB };