export function Alert({ message, visible, onHide }) {
    const style = {
        'visibility': visible ? 'visible' : 'hidden'
    }
    return (
        <div className="alert" style={style}>
            <p>{message}</p>
            <button onClick={onHide}>OK</button>
        </div>
    )
}