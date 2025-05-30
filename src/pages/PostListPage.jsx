const posts = [
  {
    title: "post 1",
    src: "https://www.shutterstock.com/shutterstock/photos/1037719192/display_1500/stock-vector-default-ui-image-placeholder-for-wireframes-for-apps-and-websites-1037719192.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo fugiat debitis itaque saepe mollitia nulla nostrum voluptate at illo. Iure a tempore laboriosam, ut assumenda saepe alias, quisquam odit ratione repellat pariatur rerum eveniet quam",
  },
  {
    title: "post 2",
    src: "https://www.shutterstock.com/shutterstock/photos/1037719192/display_1500/stock-vector-default-ui-image-placeholder-for-wireframes-for-apps-and-websites-1037719192.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo fugiat debitis itaque saepe mollitia nulla nostrum voluptate at illo. Iure a tempore laboriosam, ut assumenda saepe alias, quisquam odit ratione repellat pariatur rerum eveniet quam",
  },
  {
    title: "post 3",
    src: "https://www.shutterstock.com/shutterstock/photos/1037719192/display_1500/stock-vector-default-ui-image-placeholder-for-wireframes-for-apps-and-websites-1037719192.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo fugiat debitis itaque saepe mollitia nulla nostrum voluptate at illo. Iure a tempore laboriosam, ut assumenda saepe alias, quisquam odit ratione repellat pariatur rerum eveniet quam",
  },
  {
    title: "post 4",
    src: "https://www.shutterstock.com/shutterstock/photos/1037719192/display_1500/stock-vector-default-ui-image-placeholder-for-wireframes-for-apps-and-websites-1037719192.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo fugiat debitis itaque saepe mollitia nulla nostrum voluptate at illo. Iure a tempore laboriosam, ut assumenda saepe alias, quisquam odit ratione repellat pariatur rerum eveniet quam",
  },
  {
    title: "post 5",
    src: "https://www.shutterstock.com/shutterstock/photos/1037719192/display_1500/stock-vector-default-ui-image-placeholder-for-wireframes-for-apps-and-websites-1037719192.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo fugiat debitis itaque saepe mollitia nulla nostrum voluptate at illo. Iure a tempore laboriosam, ut assumenda saepe alias, quisquam odit ratione repellat pariatur rerum eveniet quam",
  },
  {
    title: "post 6",
    src: "https://www.shutterstock.com/shutterstock/photos/1037719192/display_1500/stock-vector-default-ui-image-placeholder-for-wireframes-for-apps-and-websites-1037719192.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo fugiat debitis itaque saepe mollitia nulla nostrum voluptate at illo. Iure a tempore laboriosam, ut assumenda saepe alias, quisquam odit ratione repellat pariatur rerum eveniet quam",
  },
];

export default function PostListPage() {
  return (
    <div className="container mt-4">
      <div className="row row-cols-3">
        {posts.map((post, index) => (
          <div className="col g-3" key={index}>
            <div className="card">
              <img src={post.src} alt={post.name} />
              <div className="card-body">
                <p className="card-text">{post.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
