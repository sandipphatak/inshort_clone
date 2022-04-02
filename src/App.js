import { useEffect, useState } from 'react';
import axios from "axios";
import './App.css';
import NavInshorts from './components/NavInshorts';
import NewsContent from './components/NewsContent/NewsContent';
import apikey from './data/config'


function App() {

  const [categories, setcategories] = useState("General");
  const [newsArray, setnewsArray] = useState([]);
  const [newsResults, setnewsResults] = useState();
  const [loadmore, setLoadmore] = useState(5);

  const newsApi = async () => {
    try{
      const proxyUrl = "https://cors-anywhere.herokuapp.com/";
      // ${proxyUrl}
      const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}&category=${categories}&pageSize=${loadmore}`);

      setnewsArray(news.data.articles);
      setnewsResults(news.data.totalResults);

      
    }catch (error){
      console.log(error);
    }
  }

  // console.log(newsArray);

  useEffect(() => { 
    newsApi();// eslint-disable-next-line
  }, [newsResults, categories, loadmore]);


  return (
    <div className="App">
      <NavInshorts setcategories={setcategories} />
      <NewsContent setLoadmore={setLoadmore} loadmore={loadmore} newsArray={newsArray} newsResults={newsResults} />
    </div>
  );
}

export default App;
