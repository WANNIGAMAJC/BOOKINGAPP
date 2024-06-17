import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const {data,loading,error} = useFetch("/api/hotels/countByCity?cities=Tangalle,Matara,Galle");
 
  return (
    <div className="featured">
      {loading ? ("Loading please wait"

      ) : (
      <><div className="featuredItem">
        <img
          src="https://i0.wp.com/gotravelyourworld.com/wp-content/uploads/2019/01/tangallesilentbeach.jpg?resize=1024%2C768&ssl=1"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Tangalle</h1>
          <h2>{data[0]} properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://img.traveltriangle.com/blog/wp-content/uploads/2019/04/Things-To-Do-in-Matara.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Matara</h1>
          <h2>{data[1]} properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://media1.thrillophilia.com/filestore/aobaf1yw2mrowt8a50rvhq5jhavm_1582217692_galle_lighthouse.jpg?w=1440&dpr=2"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Galle</h1>
          <h2>{data[2]} properties</h2>
        </div>
      </div></>
      )}
    </div>
  );
};

export default Featured;
