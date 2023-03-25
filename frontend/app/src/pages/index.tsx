import axios from "axios";

const Home = () => {
  const handleClick = async() => {
    const result = await axios.get("http://localhost:8080/api/hello")
    console.log(result);
  }
  return (
    <div>
      <h1>test</h1>
      <button onClick={handleClick}>click</button>
    </div>
  )
}
export default Home;