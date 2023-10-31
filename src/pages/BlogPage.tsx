import BlogPageGrid from "../components/Blog/BlogPageGrid";
import Searchbar from "../components/Searchbar/Searchbar";
import { useState } from "react";
import blogCardData from "../components/Blog/BlogData";

const BlogPage = () => {
  const [results, setResults] =
    useState<
      {
        id: number;
        category: string;
        thumbnail: string;
        title: string;
        date: string;
        author: string;
        url: string;
      }[]
    >(blogCardData);

  const handleSearch = (term: string) => {
    const filteredResults = blogCardData.filter((results) =>
      results.title.toLowerCase().includes(term.toLowerCase())
    );
    setResults(filteredResults);
  };

  return (
    <main className="main">
      <Searchbar onSearch={handleSearch} />
      <BlogPageGrid results={results} />
    </main>
  );
};

export default BlogPage;
