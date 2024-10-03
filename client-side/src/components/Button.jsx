export default function Button({name, onClick}){

    return(
        <button onClick={onClick} className={name==="logout" ? "btn btn-ghost text-white" : "btn btn-primary text-white"} >{name}</button>
    )
}