# California ICE Raids Map - MapLibre GL JS Version

This is a MapLibre GL JS implementation of the California ICE raids map, originally created with Leaflet.

## Key Features

- **Modern Vector-Based Rendering**: Uses MapLibre GL JS for smooth, hardware-accelerated map rendering
- **Clustering**: Automatically clusters nearby points for better performance and visualization
- **Responsive Design**: Full-screen map that adapts to any screen size
- **Interactive Popups**: Click on points to see incident details
- **OpenStreetMap Tiles**: Uses OSM raster tiles as the base layer

## Differences from Original

The original Leaflet version (`/public/camap/`) uses:
- Leaflet.js library
- Leaflet MarkerCluster plugin
- Fixed dimensions (840x659px)

This MapLibre version offers:
- More modern, GPU-accelerated rendering
- Built-in clustering (no plugins needed)
- Full-screen responsive design
- Better performance with large datasets
- Support for vector tiles (if needed in the future)

## Usage

Simply open `index.html` in a web browser. The map will:
1. Load OpenStreetMap tiles as the base layer
2. Display California county boundaries
3. Show ICE raid incidents as clustered points
4. Allow zooming and panning with smooth animations

## Data

The map uses the same data files as the original:
- `data/County_0.js` - California county boundaries
- `data/ICERaid_1.js` - ICE raid incident locations

## Browser Compatibility

MapLibre GL JS requires a modern browser with WebGL support:
- Chrome 50+
- Firefox 47+
- Safari 10+
- Edge 79+

## Libraries Used

- [MapLibre GL JS](https://maplibre.org/) v4.0.0 - Open-source mapping library
- OpenStreetMap - Base map tiles
