import { Link } from 'react-router-dom'
import './Item.css'

const Item = ({id ,name, img, price, stock }) => {

    return(
       
        <article className='CardItem'> 
        
            <picture className='PictureItem'>
                <img src={img} alt={name} className='ItemImg'/>
            </picture>

            <section className='SectionItem'>
            <h6 className="TitleItem">
                    {name}
                </h6>
                <p className='Info'>
                    Precio: $ {price}
                </p>
                <p className='Info'>
                    Stock disponible: {stock}
                </p>
            </section>

            <footer className='ItemFooter'>    
                <Link to={`/item/${id}`} className='Option'>Ver detalle</Link>
            </footer>
        </article>
    
    )
}

export default Item
