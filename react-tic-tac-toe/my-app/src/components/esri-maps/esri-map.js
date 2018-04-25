import React, { Component } from 'react';
import { loadModules } from 'esri-loader';

const options = {
  url: 'https://js.arcgis.com/4.6/'
};

const styles =  {
  container: {
    height: '900px',
    width: '900px'
  },
  mapDiv: {
    padding: 0,
    margin: 0,
    height: '100%',
    width: '100%'
  },
}

class EsriMap extends Component {

  constructor(props) {
    super(props);
    this.state = {
      status: 'loading'
    }
  }

  componentDidMount() {
    loadModules([
        'esri/Map', 
        'esri/layers/FeatureLayer',
        'esri/views/MapView'], 
        options)
      .then(([Map, FeatureLayer, MapView]) => {
        const map = new Map({ basemap: "topo" });
        const view = new MapView({
          container: "viewDiv", 
          slider: false, 
          logo: true,
          map,
          zoom: 15, 
          showAttribution: false,
          center: [-90.39, 40.14],
        });
        view.then(() => {
          this.setState({
            map,
            view,
            status: 'loaded'
          });
        });
      })

  }

  renderMap() {
    if(this.state.status === 'loading') {
      return <div>loading</div>;
    }
  }

  render() {

    return(
          <div style={styles.container}>
            <div id='viewDiv' style={ styles.mapDiv } >
              {this.renderMap()}
            </div>
          </div>
    )
  }
}

export default EsriMap;