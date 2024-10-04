export default function Button({name, onClick}){

    return(
        <button onClick={onClick} className={name==="logout" ? "btn btn-ghost w-16 text-white " : "btn btn-primary w-16 text-white"} >{name}</button>
    )
}