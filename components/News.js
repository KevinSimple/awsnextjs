import React from 'react';
import Link from 'next/link';
import fetch from 'node-fetch';
import Index from "../pages";

function News(news) {

  const { author, title, description, url, urlToImage, publishedAt, content} = news;


  return (
    <div>
      <ol>
        <li> Author:{author}</li>
        <li> title:{title}</li>
        <li> description:{description}</li>
        <li> Image: <img src={urlToImage} alt=""/></li>
        <li> Date:{publishedAt}</li>
        <li> <p>{content}</p></li>

      </ol>
    </div>

  );

}

export default News


