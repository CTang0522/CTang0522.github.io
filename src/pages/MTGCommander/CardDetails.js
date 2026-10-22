import './mtg.css';
import red from './assets/red.svg'
import blue from './assets/blue.svg'
import green from './assets/green.svg'
import white from './assets/white.svg'
import black from './assets/black.svg'

function CardDetails(params) {
    const card = params.data

    const colorToIcon = {
        "R":<img src={red} className='mtg-colorPip'/>,
        "U":<img src={blue} className='mtg-colorPip'/>,
        "G":<img src={green} className='mtg-colorPip'/>,
        "W":<img src={white} className='mtg-colorPip'/>,
        "B":<img src={black} className='mtg-colorPip'/>
    }

    return (
        <div>
            {card && (
                <div className='mtg-cardDetails'>
                    <span className='mtg-cardDetailsName'>{card.name}</span>
                    <span>{card.type_line}</span>
                    <span>Casting Cost: {card.mana_cost}</span>
                    <span>Color ID: {card.color_identity.map(x => colorToIcon[x])}</span>
                    <span>{card.oracle_text}</span>
                    
                </div>
            )}
        </div>
    );
}

export default CardDetails;