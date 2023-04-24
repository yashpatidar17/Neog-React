import { useEffect, useState } from "react";
import { fakeFetch } from "../APIs/Fakefetch4";

export const Question4 = () => {
  const [data, setData] = useState([]);
  //const[show,setShow] = useState(data)

  // const deletehandler =()=>{
  //     setData((pre) => (pre.slice(1)))
  // }

  const deletehandler = () => {
    setData((pre) => {
      const [, ...newVideo] = pre;
      return newVideo;
    });
  };

  // const handleDeleteVideo = () => {
  //     setVideos((prevVideos) => {
  //       const [, ...newVideos] = prevVideos; // Destructure first element
  //       return newVideos;
  //     });
  //   };
  const getData = async () => {
    try {
      const { status, data } = await fakeFetch(
        "https://example.com/api/videos"
      );
      if (status === 200) {
        setData(data.videos);
      }
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h2>Question 4</h2>
      <div style={{ display: "grid" }}>
        {data.map(({ title, thumbnail, views, likes }) => (
          <>
            <img src={thumbnail} alt="sample" />
            <p>{title}</p>
            <p>Like : {likes}</p>
            <p>Views : {views}</p>
          </>
        ))}
      </div>

      {data.length > 0 && (
        <button onClick={deletehandler}>Delete Videos</button>
      )}
    </div>
  );
};
