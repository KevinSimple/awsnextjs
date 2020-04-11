import React from 'react';
import Link from 'next/link';
import fetch from 'node-fetch';
import News from '../components/News'

function Index(props) {
  return (
    <div>

      {props.articles.map((news)=> {
      return <News {...news} />

    })}


      <Link href="/preact">
        <a>How about preact?</a>
      </Link>
    </div>
  )
}

export async function getServerSideProps () {
  const url = 'http://newsapi.org/v2/top-headlines?' + 'country=us&' + 'apiKey=90f0ceb763e84b54a58f8eebf0ef3436';

  const res = await fetch(url);
   const json = await res.json();
  return {
    props:json
  };
}

export default Index
