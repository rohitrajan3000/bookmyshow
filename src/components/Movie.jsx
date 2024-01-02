// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Button, Col, Row } from "react-bootstrap";
// import { useLocation, useNavigate } from "react-router-dom";

// const IMAGE_API = 'https://image.tmdb.org/t/p/w500/';
// const TIMINGS = ["10:30 AM","03:00 AM","06:00 PM","09:00 PM"];


// const Movie = () =>{

    
//     const navigate = useNavigate();

//     const location = useLocation();
//     const {title,overview,poster_path}= location.state;
//     const [latLng, setLatLng] = useState({});
//     const [theatres, setTheatres] = useState([]);


//     useEffect(()=>{
//         if('geolocation' in navigator){
//             navigator.geolocation.getCurrentPosition((position) =>{
//                 setLatLng({
//                     lat: position.coords.latitude,
//                     lng: position.coords.longitude
//                 });
//             })
//         }
//     },[]);

//     useEffect(()=>{
//         console.log(latLng);
//         if(Object.keys(latLng).length > 0){
//         const geoAPI = `https://api.geoapify.com/v2/places?categories=entertainment.cinema&filter=circle:${latLng.lng},${latLng.lat},5000&bias=proximity:78.44202,17.3707564&limit=20&apiKey=fde6ce7ca3674761a4b07f617635dfdb`;
//         axios.get('')
//         axios.get(geoAPI).then(res => {
//             const featuresArr = res.data.features;
//             const names = [];
//             featuresArr.map((feature) => names.push(feature.properties.name));
//             setTheatres(names);
//         });
//         }
//     },[latLng])


    
//     return(
//         <div>
//            <Row>
//             <Col style={{padding:70}}>
//                 <img src={IMAGE_API+poster_path}/>
//                 <h4>{title}</h4>
//                 <div>
//                     {overview}
//                 </div>
            
            
//             </Col>
//             <Col style={{padding:70}}> 
//             <div>
//                 {
//                     theatres.map((theatre) => {
//                         return(
//                             <div   style = {{marginBottom: 20}}>
//                                 <div style={{marginBottom:10}}>{theatre}</div>
//                                 {TIMINGS.map((time) =>{
//                                     return <Button onClick={()=>{
//                                         navigate('/select',{state: {title: title}})
//                                     }}  style={{marginRight:5}}>{time}</Button>
//                                 })}
//                             </div>
//                         )
//                     })
//                 }

//             </div>

//             </Col>
            
//            </Row>
//         </div>
//     )
// }

// export default Movie;