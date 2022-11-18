import React, { useEffect, useState } from "react";

import SideMenu from "./SideMenu";
import Navbar from "./Navbar";
import Card from "./Card";

// render a list of news from a list data
function NewsList({ data }) {
  return (
    <div>
      {data.slice(0, 20).map((news) => (
        <div style={{ paddingBottom: 40 }}>
          <h5>{news.title}</h5>
          <p>{news.description}</p>
          <a>{news.link}</a>
        </div>
      ))}
    </div>
  );
}

// render News page
function NewsPage() {
  const [data, setData] = useState(null);

  // fetch data from api then update state
  useEffect(() => {
    fetch(
      "https://newsdata.io/api/1/news?apikey=pub_1364014f6a595e6f99cad56f9b56082fd9b7a&language=en"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data.results);
      });
  }, []);

  return (
    <div>
      <SideMenu activeTab={"news"} />
      <div className="p-2 dashboard-container">
        <Navbar />
        <div>
          <div className="row">
            <div className="col-md-6 mb-2">
              <Card title={"Today news"}>
                {data ? <NewsList data={data} /> : <p>Loading</p>}
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsPage;
