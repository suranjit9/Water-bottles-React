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


export {addToLS, getStoredCard}