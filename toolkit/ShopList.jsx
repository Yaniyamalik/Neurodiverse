import React from 'react'
import { Productlist } from './Productlist'
import "./Shoplist.css"
export const ShopList = () => {
  return (
    <div className="shoplist">
        <h1>Shop </h1>
        <p>Welcome to our online store, where we offer a thoughtfully curated selection of products designed to support and enhance the lives of neurodiverse individuals. From sensory-friendly items and educational tools to calming aids and organizational products, our collection is tailored to meet the unique needs of those with autism, ADHD, sensory processing disorders, and other neurodivergent conditions. Shop with confidence knowing that each product has been chosen to promote comfort, focus, and well-being in everyday life.</p>
       <Productlist/>
    </div>
  )
}
