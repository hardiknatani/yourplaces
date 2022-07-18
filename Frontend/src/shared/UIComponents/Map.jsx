import React, { useRef, useEffect, useState } from 'react';
import WebMap from "@arcgis/core/WebMap";
import MapView from '@arcgis/core/views/MapView';
import esriConfig from "@arcgis/core/config";

import "./Map.css"

function MapComponent(props){
  const {latitude,longitude} = props.center

  const mapDiv = useRef(null);
  const [address,setAddress] = useState("")

  esriConfig.apiKey = "AAPKf876d851d13f4d90adadf2a6c1681336T0RPdFpwKjxw5LR1wnwiIYki7_u5x_TZVdpFnU_zmHs_0kDSelbELDO2rVSY16Q7";





  useEffect(() => {
 
      const webmap = new WebMap({
        basemap: "arcgis-navigation"
      });

      const view = new MapView({
        container: mapDiv.current,
        map: webmap,
        center: [
         latitude,longitude
        ],
        zoom:5
      });

    
  }, [props.center]);





  return (
    <React.Fragment>
<div className="mapDiv" ref={mapDiv}></div>
    </React.Fragment>
  );
}


export default MapComponent;