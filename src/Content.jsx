import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'


function Content() {
  const [content, setContent] = useState([]);

  useEffect(() => {
    apidata();
  }, []);

  let apidata = async () => {
    try {
      let users = await axios.get(
        "https://5cdd0a92b22718001417c19d.mockapi.io/api/blog"
      );
      console.log(users);
      setContent(users.data);
    } catch (errors) {}
  };
  return (
    <>
      <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-md-10 col-lg-8 col-xl-7">
          

              {content.map((asset) => {
                return (
                  <>
                      <div class="post-preview">
                    <Link to={`/${asset.id}`}>
                      <h2 class="post-title">{asset.title}</h2>
                      <h3 class="post-subtitle">{asset.description}</h3>
                    </Link>
                    <p class="post-meta">
                      Posted by
                      <a href="#!">{asset.author}</a>
                      {asset.createdAt}
                    </p>
                    </div>
                    <hr class="my-4" />
                  </>
                );
              })}
              <div class="d-flex justify-content-end mb-4">
                <a class="btn btn-primary text-uppercase" href="#!">
                  Older Posts →
                </a>
              </div>
            </div>
            </div>
          </div>
  
  
    </>
  );
}

export default Content;
