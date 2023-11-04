interface BlogResultsProps {
  results: {
    id: number;
    category: string;
    thumbnail: string;
    title: string;
    date: string;
    author: string;
    url: string;
  }[];
}

const BlogPageGrid: React.FC<BlogResultsProps> = ({ results }) => {
  return (
    <section className="blog container grid-section">
        <div className="blog__container grid row-gap">
        {results.map(({ id, category, thumbnail, title, date, author, url }) => {
            return (
                <a href={url}  key={id}>
                <div className="blog__card">
                    <div className="blog__thumb">
                        <span className="blog__category">{category}</span>
                        <img src={thumbnail} alt="" className="blog__img" />
                    </div>
                    <div className="blog__details">
                        <h3 className="blog__title">{title}</h3>
                        <div className="blog__meta">
                            <span>{date}</span>
                            <span className="blog__dot">.</span>
                            <span>{author}</span>
                        </div>
                    </div>
                </div>
                </a>
            );
        })}
        </div>
    </section>
  );
};

export default BlogPageGrid;
