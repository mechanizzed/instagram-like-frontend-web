import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisH,
  faHeart,
  faComment,
  faPaperPlane
} from "@fortawesome/free-solid-svg-icons";

import "./styles.css";
class Feed extends Component {
  render() {
    return (
      <section id="main-post-list">
        <article>
          <header>
            <div className="user-info">
              <span className="user-title">Luciano teste</span>
              <span className="user-place">São Paulo</span>
            </div>
            <FontAwesomeIcon icon={faEllipsisH} />
          </header>
          <img
            src="http://localhost:3333/posts/files/valley.jpg"
            alt="Posts"
            className="user-img-post"
          />
          <footer>
            <div className="actions-btns">
              <FontAwesomeIcon icon={faHeart} />
              <FontAwesomeIcon icon={faComment} />
              <FontAwesomeIcon icon={faPaperPlane} />
            </div>

            <strong>100 curtidas</strong>

            <p>
              Description for post
              <span>#hashtags</span>
            </p>
          </footer>
        </article>
      </section>
    );
  }
}

export default Feed;
