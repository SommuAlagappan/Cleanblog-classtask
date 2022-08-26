import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Post() {
    const [content, setContent] = useState([]);
  const params = useParams();

  useEffect(() => {
    foo();
  }, []);

  let foo = async () => {
    try {
      let user = await axios.get(
        (`https://5cdd0a92b22718001417c19d.mockapi.io/api/blog/${params.id}`)
      );
      setContent(user.data);
      console.log(user.data);
    } catch (errors) {}
  };

  return (
    <>
    {/* Header */}
    
      <header className="masthead" style={{backgroundImage:`url("./assets/post-bg.jpg")`}}>
        <div className="container position-relative px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <div className="post-heading">
                <h1>{content.title}</h1>
                <h2 className="subheading">{content.author}</h2>
                <span className="meta">
                  Posted by -  
                  <a href="#!">{content.author}</a>
                  {content.createdAt}
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* <!-- Post Content--> */}

      <article className="mb-4">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <strong>{content.content}</strong>
             
            </div>
          </div>
        </div>
      </article>

      {/* <!-- Footer--> */}

      <footer className="border-top">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <ul className="list-inline text-center">
                <li className="list-inline-item">
                  <a href="#!">
                    <span className="fa-stack fa-lg">
                      <i className="fas fa-circle fa-stack-2x"></i>
                      <i className="fab fa-twitter fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#!">
                    <span className="fa-stack fa-lg">
                      <i className="fas fa-circle fa-stack-2x"></i>
                      <i className="fab fa-facebook-f fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#!">
                    <span className="fa-stack fa-lg">
                      <i className="fas fa-circle fa-stack-2x"></i>
                      <i className="fab fa-github fa-stack-1x fa-inverse"></i>
                    </span>
                  </a>
                </li>
              </ul>
              <div className="small text-center text-muted fst-italic">
                Copyright &copy; Your Website 2022
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Post;
