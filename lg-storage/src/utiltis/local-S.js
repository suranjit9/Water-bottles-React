const getStoredCard =() =>{
    const storedCatdString = localStorage.getItem('card');
    if(storedCatdString){
        return JSON.parse(storedCatdString);
    }
    return [];
}
// Add to ls 
const addToLS = id =>{
    const card = getStoredCard();
    card.push(id);
    saveCard(card);
}
// Save to ls
const saveCard = card =>{
    const cardStigify = JSON.stringify(card);
    localStorage.setItem('card',cardStigify);
}

const removeProduct =id =>{
    // remove for local
    const removeItem = getStoredCard();
    const remaming = removeItem.filter(idx=> idx!==id);
    saveCard(remaming);
}

export {addToLS, getStoredCard,removeProduct}