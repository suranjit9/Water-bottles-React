import propTypes from 'prop-types';
import '../Bottol.css'

const Card = ({card,handleRemoveCard}) => {
    
    return (
        <div>
            <h3>Card :{card.length}</h3>
            <div className="card-view">
                {
                    card.map(bottol => <div key={bottol.id}>
                        <img  src={bottol.imageURL}></img>
                        <button onClick={()=>handleRemoveCard(bottol.id)}>Remove</button>
                    </div>)
                }
            </div>
        </div>
    );
};
Card.propTypes ={
    card: propTypes.array.isRequired,
    handleRemoveCard: propTypes.func.isRequired
}

export default Card;