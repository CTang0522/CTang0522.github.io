import './mtg.css';
import red from './assets/red.svg'
import blue from './assets/blue.svg'
import green from './assets/green.svg'
import white from './assets/white.svg'
import black from './assets/black.svg'
import colorless from './assets/colorless.svg'

function CardDetails(params) {
    const card = params.data

    const colorToIcon = {
        "R":<img src={red} className='mtg-colorPip' alt='redPip'/>,
        "U":<img src={blue} className='mtg-colorPip' alt='bluePip'/>,
        "G":<img src={green} className='mtg-colorPip' alt='greenPip'/>,
        "W":<img src={white} className='mtg-colorPip' alt='whitePip'/>,
        "B":<img src={black} className='mtg-colorPip' alt='blackPip'/>,
        "X":<img src={colorless} className='mtg-colorPip' alt='colorlessPip'/>
    }

    return (
        <div>
            {card && (
                <div className='mtg-cardDetails'>
                    <span className='mtg-cardDetailsName'>{card.name}</span>
                    <span>{card.type_line}</span>
                    <span>Casting Cost: {card.mana_cost}</span>
                    <span>Color ID: {card.color_identity.length > 0 ? card.color_identity.map(x => colorToIcon[x]): colorToIcon["X"]}</span>
                    <span>{card.oracle_text}</span>
                    
                </div>
            )}
        </div>
    );
}

export default CardDetails;