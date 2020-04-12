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
  const Sentry = require('@sentry/node');
  Sentry.init({ dsn: 'https://a48b0dacfe254d70900616e757730fc4@o370374.ingest.sentry.io/5179766' });


  try {
    const url = 'http://newsapi.org/v2/top-headlines?' + 'country=us&' + 'apiKey=90f0ceb763e84b54a58f8eebf0ef3436';

    const res = await fetch(url);
    const json = await res.json();

    Sentry.captureMessage(`ssr rendered at ${new Date()}`);
    return {
      props:json
    };
  }
  catch(e){
    Sentry.captureMessage(`ssr ERROR at ${new Date()}`);
    Sentry.captureException(e);
    return {
      props:{}
    };
  }

}

export default Index
