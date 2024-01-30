// import React, { useState, useEffect } from "react";

// const InfiniteScroll = () => {
//   const [dataList, setDataList] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           "https://englishapi.pinkvilla.com/app-api/v1/photo-gallery-feed-page/page/1"
//         ); // Replace with your actual API endpoint
//         const result = await response.json();
//         setDataList(result.nodes.map((item) => item.node));
//         console.log(result);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);
//   return (
//     <div>
//       {dataList.map((data) => (
//         <div className="card_main" key={data.nid}>
//           <div className="card">
//             <div className="card_info">
//               <div className="card_left">
//                 <img src={data.field_photo_image_section} alt={data.title} />
//               </div>
//               <div className="card_right">
//                 <p className="cardTitle">{data.title}</p>
//                 <span>
//                   <p>Jun 05 2024 03:16 PM IST</p>
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default InfiniteScroll;
// import React, { useState, useEffect } from "react";

// const InfiniteScroll = () => {
//   const [dataList, setDataList] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch(
//         "https://englishapi.pinkvilla.com/app-api/v1/photo-gallery-feed-page/page/1"
//       ); // Replace with your actual API endpoint

//       if (response.ok) {
//         const result = await response.json();
//         setDataList(result.nodes.map((item) => item.node));
//         console.log(result);
//       } else {
//         console.error("Error fetching data. Status:", response.status);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       {dataList.map((data) => (
//         <div className="card_main" key={data.nid}>
//           <div className="card">
//             <div className="card_info">
//               <div className="card_left">
//                 <img src={data.field_photo_image_section} alt={data.title} />
//               </div>
//               <div className="card_right">
//                 <p className="cardTitle">{data.title}</p>
//                 <span>
//                   <p>Jun 05 2024 03:16 PM IST</p>
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default InfiniteScroll;

// import React, { useState, useEffect, useRef } from "react";

// const InfiniteScroll = () => {
//   const [dataList, setDataList] = useState([]);
//   const [page, setPage] = useState(1);
//   const loaderRef = useRef(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           `https://englishapi.pinkvilla.com/app-api/v1/photo-gallery-feed-page/page/${page}`
//         ); // Replace with your actual API endpoint
//         const result = await response.json();
//         setDataList((prevDataList) => [
//           ...prevDataList,
//           ...result.nodes.map((item) => item.node),
//         ]);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     const options = {
//       root: null,
//       rootMargin: "20px",
//       threshold: 0.5,
//     };

//     const observer = new IntersectionObserver((entries) => {
//       if (entries[0].isIntersecting) {
//         setPage((prevPage) => prevPage + 1);
//         fetchData(); // Call fetchData when the loader is in view
//       }
//     }, options);

//     if (loaderRef.current) {
//       observer.observe(loaderRef.current);
//     }

//     return () => {
//       if (loaderRef.current) {
//         observer.unobserve(loaderRef.current);
//       }
//     };
//   }, [page]);

//   return (
//     <div>
//       {dataList.map((data) => (
//         <div className="card_main" key={data.nid}>
//           <div className="card">
//             <div className="card_info">
//               <div className="card_left">
//                 <img src={data.field_photo_image_section} alt={data.title} />
//               </div>
//               <div className="card_right">
//                 <p className="cardTitle">{data.title}</p>
//                 <span>
//                   <p>Jun 05 2024 03:16 PM IST</p>
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//       <div ref={loaderRef}></div>
//     </div>
//   );
// };

// export default InfiniteScroll;

import React, { useState, useEffect, useRef } from "react";

// const InfiniteScroll = () => {
//   const [dataList, setDataList] = useState([]);
//   const [page, setPage] = useState(1);
//   const loaderRef = useRef(null);

//   useEffect(() => {
//     const fetchData = () => {
//       fetch(
//         `https://englishapi.pinkvilla.com/app-api/v1/photo-gallery-feed-page/page/${page}`
//       ) // Replace with your actual API endpoint
//         .then((response) => {
//           if (!response.ok) {
//             throw new Error(`Error fetching data. Status: ${response.status}`);
//           }
//           return response.json();
//         })
//         .then((result) => {
//           setDataList((prevDataList) => [
//             ...prevDataList,
//             ...result.nodes.map((item) => item.node),
//           ]);
//         })
//         .catch((error) => {
//           console.error("Error fetching data:", error.message);
//         });
//     };

//     const options = {
//       root: null,
//       rootMargin: "20px",
//       threshold: 0.5,
//     };

//     const observer = new IntersectionObserver((entries) => {
//       if (entries[0].isIntersecting) {
//         setPage((prevPage) => prevPage + 1);
//         fetchData(); // Call fetchData when the loader is in view
//       }
//     }, options);

//     if (loaderRef.current) {
//       observer.observe(loaderRef.current);
//     }

//     return () => {
//       if (loaderRef.current) {
//         observer.unobserve(loaderRef.current);
//       }
//     };
//   }, [page]);

//   return (
//     <div>
//       {dataList.map((data) => (
//         <div className="card_main" key={data.nid}>
//           <div className="card">
//             <div className="card_info">
//               <div className="card_left">
//                 <img src={data.field_photo_image_section} alt={data.title} />
//               </div>
//               <div className="card_right">
//                 <p className="cardTitle">{data.title}</p>
//                 <span>
//                   <p>Jun 05 2024 03:16 PM IST</p>
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//       <div ref={loaderRef}></div>
//     </div>
//   );
// };

// export default InfiniteScroll;
// ... (other imports)

const InfiniteScroll = () => {
  const [dataList, setDataList] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMoreData, setHasMoreData] = useState(true); // New state to track if there is more data
  const loaderRef = useRef(null);

  useEffect(() => {
    const fetchData = () => {
      fetch(
        `https://englishapi.pinkvilla.com/app-api/v1/photo-gallery-feed-page/page/${page}`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Error fetching data. Status: ${response.status}`);
          }
          return response.json();
        })
        .then((result) => {
          if (result.nodes.length > 0) {
            setDataList((prevDataList) => [
              ...prevDataList,
              ...result.nodes.map((item) => item.node),
            ]);
            setPage((prevPage) => prevPage + 1);
          } else {
            setHasMoreData(false); // No more data, stop showing the loader
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error.message);
        });
    };

    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMoreData) {
        fetchData();
      }
    }, options);

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => {
      if (loaderRef.current) {
        observer.unobserve(loaderRef.current);
      }
    };
  }, [page, hasMoreData]);

  return (
    <div>
      {dataList.map((data) => (
        <div className="card_main" key={data.nid}>
          <div className="card">
            <div className="card_info">
              <div className="card_left">
                <img src={data.field_photo_image_section} alt={data.title} />
              </div>
              <div className="card_right">
                <p className="cardTitle">{data.title}</p>
                <span>
                  <p>Jun 05 2024 03:16 PM IST</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
      {hasMoreData && <div ref={loaderRef}></div>}
    </div>
  );
};

export default InfiniteScroll;
