import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Spinner from '../components/Spinner';

const Detail = () => {
  const { articleId } = useParams('detail');
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const bedolArtikel = async () => {
      fetch('./articles.json')
        .then((res) => res.json())
        .then((res) => {
          const article = res.articles.find((article) => article.id === articleId);
          setArticle(article);
        });
    };

    bedolArtikel();

    return () => {};
  }, [articleId]);

  return (
    <>
      <Header isBack={true} />
      <div style={styles.container}>
        {article ? (
          <>
            <img style={styles.img} src={article?.img} alt="" />
            <span>{article.published_at}</span>

            <h1>{article.title}</h1>
            <p>{article.content}</p>
          </>
        ) : (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Spinner height={200} width={200} />
          </div>
        )}
      </div>
    </>
  );
};

const styles = {
  container: {
    padding: '1.5em 2em',
    marginTop: '6em',
  },
  img: {
    width: '100%',
    height: '500',
    objectFit: 'cover',
    marginBottom: '1em',
  },
};

export default Detail;
