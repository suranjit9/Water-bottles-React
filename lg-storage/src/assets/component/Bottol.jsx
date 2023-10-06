import propTypes from 'prop-types';
import './Bottols.css';

const Bottol = ({bottol, hendelerbuy}) => {
    // console.log(bottol);

    const {imageURL, title, price} = bottol;
    return (
        <div className="bottole">
            <img src={imageURL} alt="" />
            <h4>$ {price}</h4>
            <h3>{title}</h3>
            <button onClick={() =>hendelerbuy(bottol)}>Buy</button>
        </div>
    );
};
Bottol.propTypes ={
    bottol: propTypes.object.isRequired,
    hendelerbuy : propTypes.func.isRequired
}

export default Bottol;