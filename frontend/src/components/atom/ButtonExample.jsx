
function ButtonExample(props) {
    const { namaTombol, handleClick } = props

    return (
        <div>
            <h1 onClick={handleClick} className="bg-blue-400 text-center w-25 px-4 py-2 rounded-md text-white cursor-pointer hover:bg-blue-700">{namaTombol}</h1>

        </div>
    )
}

export default ButtonExample