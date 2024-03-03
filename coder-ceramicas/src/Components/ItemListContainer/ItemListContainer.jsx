import './ItemListContainer.css'

export default function ItemListContainer({greeting}){
    return(

        <>
        <div className="itemListeConteiner">
            <h1>{greeting}</h1>
        </div>
        </>
    )      
}