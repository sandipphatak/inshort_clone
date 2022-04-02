import { Container } from '@mui/material'
import React from 'react'
import NewsCard from '../NewsCard/NewsCard'
import "./NewsContent.css";

const NewsContent = ({newsArray, newsResults, loadmore, setLoadmore}) => {
  return (
    <Container maxWidth="md">
        <div className="content">

          {/* <div className='cat'>ddf</div> */}

          {newsArray.map((newsItem) => (
            <NewsCard newsItem={newsItem} key={newsItem.title} />
          ))}

          {loadmore <= newsResults && (
            <>
            <hr />
            <button className='loadMore' onClick={() => setLoadmore(loadmore + 5)}>Load More</button> 
            </>

          )}



        </div>
    </Container>
  )
}

export default NewsContent