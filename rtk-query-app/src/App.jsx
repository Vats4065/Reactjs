import "./App.css";
import {
  useGetpostByIdQuery,
  useGetPostsQuery,
  useGetPostByLimitQuery,
  useDeletePostsMutation,
} from "./Services/post";

function App() {
  // const { data, isError, isLoading, isSuccess } = useGetPostsQuery();
  // console.log(data, " ,", isError, " ,", isLoading, ",", isSuccess);
  // const { data, isError, isLoading, isSuccess } = useGetpostByIdQuery(5);
  // const { data, isError, isLoading, isSuccess } = useGetPostByLimitQuery(5);
  const { deletePosts, res } = useDeletePostsMutation();
  console.log(deletePosts);

  // if (isLoading) {
  //   return <h1>Loading...</h1>;
  // }

  // if (isError) {
  //   return <h1>Error...</h1>;
  // }

  // console.log(data);

  return (
    <>
      <div className="app">
        <h1>Get All Data</h1>
        <button onClick={() => deletePosts(2)}>Delete</button>
        {/* {data.map((item) => {
          return (
            <div key={item.id} className="card">
              <h2>{item.id}</h2>
              <h1>{item.title}</h1>
              <p>{item.body}</p>
            </div>
          );
        })} */}

        {/* <div key={data.id} className="card">
          <h2>{data.id}</h2>
          <h1>{data.title}</h1>
          <p>{data.body}</p>
        </div> */}
      </div>
    </>
  );
}

export default App;
