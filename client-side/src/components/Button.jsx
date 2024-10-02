export default function Button({name, onClick}){

    return(
        <button onClick={onClick} className="btn btn-primary text-white">{name}</button>
    )
}