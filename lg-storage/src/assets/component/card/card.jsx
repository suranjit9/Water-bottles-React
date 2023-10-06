import propTypes from 'prop-types';
import '../Bottol.css'

const Card = ({card}) => {
    
    return (
        <div>
            <h3>Card :{card.length}</h3>
            <div className="card-view">
                {
                    card.map(bottol => <img key={bottol.id} src={bottol.imageURL}></img>)
                }
            </div>
        </div>
    );
};
Card.propTypes ={
    card: propTypes.array.isRequired
}

export default Card;