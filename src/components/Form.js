export function Form({ onSubmit }) {
    return (
        <form id="myForm" onSubmit={onSubmit} autoComplete="off" seected>
            <label htmlFor="myInput">Enter your guess</label>
            <input type="text" className='text-box' id="myInput"/>
            <input type="submit" value="Submit" className="submit-button"/>
        </form>
    )
}