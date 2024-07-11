import React from 'react'
import './ItemListContainer.css'
import { useState, useEffect } from 'react'
import { getProducts, getProductsByCategory } from '../../Data'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({greeting}) => {

  const [products, setProducts] = useState([])

  const { categoryId } = useParams()

  useEffect(() => {

      const asyncFunc = categoryId ? getProductsByCategory : getProducts

      asyncFunc(categoryId)
      .then(response => {
          setProducts(response)
      })

      .catch(error => {
          console.error(error)
      })

  }, [categoryId])
  



  return (
    <div className="ContainerList col-12">
      <h1>{greeting}</h1>
      <div className='col-8'>
    
    <ItemList products={products}/>
    </div>
    </div>
  )
}

export default ItemListContainer
