export default function LiNavBar({href , texto}){

    return(
        
        <>
        <li className="nav-item">
            <a className="nav-link active" aria-current="page" href={href}>{texto}</a>
        </li>
        </>
    )      
}