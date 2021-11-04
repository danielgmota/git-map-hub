import React, { useEffect } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import img from "../../assets/img/pointer.svg";
import { Container } from "./style";

interface MapProps {
  coord?: any;
  userLogin?: any;
  userName?: any;
  userAvatar?: any;
}

export function Map({ coord, userLogin, userName, userAvatar }: MapProps) {
  let locLat = coord[1] !== undefined ? coord[1] : 1,
    locLong = coord[0] !== undefined ? coord[0] : 1;

  const loc = {
    width: "100vh",
    height: "600px",
    latitude: locLat,
    longitude: locLong,
    zoom: 12,
  };

  const [viewport, setViewport] = React.useState(loc);
  const [toggle, setToggle] = React.useState(false);

  function updateMap() {
    setViewport(loc);
  }

  function clickPointer() {
    setToggle(!toggle);
  }

  useEffect(() => {
    updateMap();
  }, [locLat]);

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/mapbox/light-v10"
      mapboxApiAccessToken={process.env.REACT_APP_TOKEN_MAPBOX}
      onViewportChange={(viewport: any) => setViewport(viewport)}
      {...viewport}
    >
      <Marker
        latitude={locLat}
        longitude={locLong}
        offsetLeft={-10}
        offsetTop={-10}
      >
        <Container>
          <button onClick={clickPointer} title={userName}>
            <img src={img} alt="Pointer" width="25" height="25" />
          </button>
          {toggle && (
            <div className="popup">
              <img src={userAvatar} alt={userName} />
              <b>{userLogin}</b>
            </div>
          )}
        </Container>
      </Marker>
    </ReactMapGL>
  );
}
