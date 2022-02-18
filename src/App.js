import React from 'react'
import './index.css'
import Header from './components/Header'
import Article from './components/Article'
import articleData from './data'

export default function App(){
  const article = articleData.map(item => {
    return(
      <div className='article'>
        <Article
        key = {item.id}
        {...item}
      />
      {item.id !== articleData.length && <hr/>}
      </div>      
    )
  })
  return(
    <div>
      <Header />
      <main>
        {article}
      </main>
    </div>
  )
}