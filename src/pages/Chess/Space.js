import './Styles/Space.css'
import { IconChessFilled, IconChessRookFilled, IconChessKnightFilled, IconChessBishopFilled, IconChessQueenFilled, IconChessKingFilled } from '@tabler/icons-react'

export function Space(props) {
    if(props.piece === "wp"){
        return(<div className={props.color}><IconChessFilled className='whitePiece'/></div>)
    } else if (props.piece === "bp"){
        return(<div className={props.color}><IconChessFilled className='blackPiece' /></div>)
    } else if (props.piece === "wr"){
        return(<div className={props.color}><IconChessRookFilled className='whitePiece'/></div>)
    } else if (props.piece === "br"){
        return(<div className={props.color}><IconChessRookFilled className='blackPiece'/></div>)
    } else if (props.piece === "wn") {
        return(<div className={props.color}><IconChessKnightFilled className='whitePiece'/></div>)
    } else if (props.piece === "bn") {
        return(<div className={props.color}><IconChessKnightFilled className='blackPiece'/></div>)
    } else if (props.piece === "wb") {
        return(<div className={props.color}><IconChessBishopFilled className='whitePiece'/></div>)
    } else if (props.piece === "bb") {
        return(<div className={props.color}><IconChessBishopFilled className='blackPiece'/></div>)
    } else if (props.piece === "wq") {
        return(<div className={props.color}><IconChessQueenFilled className='whitePiece'/></div>)
    } else if (props.piece === "bq") {
        return(<div className={props.color}><IconChessQueenFilled className='blackPiece'/></div>)
    } else if (props.piece === "wk") {
        return(<div className={props.color}><IconChessKingFilled className='whitePiece'/></div>)
    } else if (props.piece === "bk") {
        return(<div className={props.color}><IconChessKingFilled className='blackPiece'/></div>)
    }
    else {
        return(
            <div className={props.color}><IconChessKingFilled className='nothingHere' /></div>
        )
    }
    
}

export default Space