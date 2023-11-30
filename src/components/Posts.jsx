import { useFetchPosts } from "../functions/fetchPosts";

const Posts = () => {
  const { loading, posts } = useFetchPosts();
  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <h1 className="text-3xl ">Loading posts....</h1>
      </div>
    );
  }
  return (
    <div className="mx-6">
      <div className="mb-12 flex flex-col items-center justify-center">
        <h1 className="font-serif text-5xl p-4">Progress Blog</h1>
        <p className="m-2 text-lg">follow along as we build our winery etc.</p>
      </div>
      <div>
        {posts.map((content) => {
          const { id, title, date, post, img, desc } = content;
          return (
            <article key={id} className="mb-24 mx-6 xl:mx-64">
              <div className="xl:flex xl:flex-col xl:items-center">
                <img className="xl:w-2/3 rounded" src={img} alt={desc} />
                <div className="flex justify-between items-center my-6 xl:flex-col">
                  <h3 className="text-2xl">{title}</h3>
                  <h5>{date}</h5>
                </div>
                <p>{post}</p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
