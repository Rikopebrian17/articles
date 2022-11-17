import React, { useEffect, useState } from "react";
import { service } from "../services";

import Card from "../components/Card";
import Header from "../components/Header";
import Spinner from "../components/Spinner";

function Homepage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const bedolArtikel = async () => {
      fetch("./articles.json").then(res => res.json()).then(res => {
        setArticles(res.articles)
      })
    }

    bedolArtikel();

    return () => { }
  }, []);

  console.log("articles", articles);

  return (
    <>
      <Header />
      <div style={{ marginTop: "5.5em" }}>
        {articles.length > 0 ?
          articles.map(({ id, title, img, category, published_at }) => (
            <Card key={id} id={id} title={title} imgSrc={img} category={category} publishedAt={published_at} />
          ))
          : (
            <div style={{
              display: "flex",
              justifyContent: "center"
            }}>
              <Spinner height={200} width={200} />
            </div>
          )}

      </div>
    </>
  );
}

export default Homepage;
