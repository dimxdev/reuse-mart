function Button(props) {
    const { namaTombol } = props
    return (
        <div>
            <h1 className="bg-blue-400 w-25 px-4 py-2 rounded-md text-white cursor-pointer hover:bg-blue-700">{namaTombol}</h1>
        </div>
    )
}

export default Button