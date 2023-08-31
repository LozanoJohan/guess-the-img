import Confetti from 'react-confetti'
import { WON_MESSAGE } from "../constants.js/messages"

export function Alert({ message, visible, onHide }) {
    const style = {
        'visibility': visible ? 'visible' : 'hidden'
    }
    return (
        <>
            {WON_MESSAGE === message && <Confetti/>}
            <div className="alert" style={style}>
                <p>{message}</p>
                <button onClick={onHide}>OK</button>
            </div>
        </>
    )
}