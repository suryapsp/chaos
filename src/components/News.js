import React, { Component } from "react";
import NewsItem from "./NewsItem";
import apiKey from "../apikey";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
    };
  }

  async componentDidMount() {
    let url =
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}&page=1&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalArticles: parsedData.totalResults,
    });
  }

  handleNextClick = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalArticles / 20)) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}&page=${
        this.state.page + 1
      }&pageSize=20`;
      let data = await fetch(url);
      let parsedData = await data.json();

      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
      });
    }
  };

  handlePreviousClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}&page=${
      this.state.page - 1
    }&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    });
  };

  render() {
    return (
      <div className="container my-3">
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  urlToImage={element.urlToImage}
                  url={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePreviousClick}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
