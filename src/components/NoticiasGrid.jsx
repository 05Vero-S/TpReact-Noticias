import ItemNoticias from "./ItemNoticias";
import '../App.css'
const NoticiasGrid = ({items}) => {
    return (
        <div className="noticiasGrid">
            {items.map((item,i)=>(
                <ItemNoticias key={i} item={item} />
            ))}
            
        </div>
    );
}; 

export default NoticiasGrid;