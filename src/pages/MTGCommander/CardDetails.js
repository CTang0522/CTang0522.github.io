import './mtg.css';

function CardDetails(params) {
    const card = params.data

    return (
        <div>
            {card && (
                <div className='mtg-cardDetails'>
                    <span className='mtg-cardDetailsName'>{card.name}</span>
                    <span>{card.type_line}</span>
                    
                </div>
            )}

            {!card && (
                <div>
                </div>
            )}
        </div>
    );
}

export default CardDetails;