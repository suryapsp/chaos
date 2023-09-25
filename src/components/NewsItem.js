import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, urlToImage, url, author, date } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img
            src={
              !urlToImage
                ? "https://static.vecteezy.com/system/resources/thumbnails/004/216/831/small/3d-world-news-background-loop-free-video.jpg"
                : urlToImage
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}....</h5>
            <p className="card-text">
              <small className="text-muted">
                On {new Date(date).toUTCString()} by {author ? author : "Unknown Author"}
              </small>
            </p>
            <p className="card-text">{description}....</p>
            <a
              rel="noreferrer"
              href={url}
              target="_blank"
              className="btn btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
