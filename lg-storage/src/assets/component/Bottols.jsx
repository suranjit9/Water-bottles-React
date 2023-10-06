import { useEffect, useState } from "react";
import Bottol from "./bottol";
import './Bottol.css';
import { addToLS, getStoredCard } from "../../utiltis/local-S";
import Card from "./card/card";



const Bottols = () => {
    const [bottols, setBottols] = useState([]);
    const [card, setCart] =useState([]);
    useEffect(() => {
        fetch('product.json')
            .then(res => res.json())
            .then(data => setBottols(data))
    }, [])
    // Load Card from Ls
    useEffect(()=>{
        // console.log('bbbbbbbbbbb',bottols.length);
        if(bottols.length>0){
        const getId = getStoredCard();
        const saveCard =[];
        // console.log(getId);
        for(const id of getId){
            const bottle =bottols.find(bottl => bottl.id ===id);
            if(bottle){
                saveCard.push(bottle);
            }
        }  
        // console.log(saveCard)
        setCart(saveCard);
        }
    },[bottols])

    const hendelerbuy = bottle =>{
        const newCard =[...card,bottle];
        setCart(newCard);
        addToLS(bottle.id);
    }
    return (
        <div>
            <h1>Bottole: {bottols.length}</h1>
            
            <Card card ={card}></Card>
            <div className="bottolContener">
                {
                    bottols.map(bottol => <Bottol
                    key={bottol.title}
                    bottol={bottol}
                    hendelerbuy={hendelerbuy}
                    ></Bottol> )
                }
            </div>
        </div>
    );
};

export default Bottols;