# California ICE Raids Map - MapLibre GL JS Version

Interactive heatmap visualization of ICE raid incidents across California using MapLibre GL JS.

🔗 **[View Live Map](https://albertkun.github.io/ca_raid_map/)** (replace with your GitHub username)

## Features

- **Interactive Heatmap**: Visualizes incident density with a pink-to-red gradient
- **Toggle View**: Switch between heatmap and individual point markers
- **Clean Design**: Uses CARTO Light basemap for minimal visual clutter
- **Responsive**: Full-screen map that works on all devices
- **Fast Performance**: GPU-accelerated rendering with MapLibre GL JS

## GitHub Pages Setup

This repository is configured for GitHub Pages. To enable:

1. Go to repository Settings → Pages
2. Select "Deploy from a branch"
3. Choose `main` branch and `/ (root)` folder
4. Save

The map will be available at: `https://[your-username].github.io/ca_raid_map/`

## Local Development

Open `index.html` directly in your browser - no build step or server required!

## Data Files

- `data/County_0.geojson` - California county boundaries (WGS84 projection)
- `data/ICERaid_1.geojson` - ICE raid incident locations (WGS84 projection)

Data is stored as GeoJSON for GitHub Pages compatibility (no symbolic links).

## Controls

- **Toggle Button** (top-right): Switch between heatmap and point view
- **Legend** (bottom-right): Shows density gradient from low (light pink) to high (dark red)
- **Navigation**: Zoom and pan controls in top-left corner

## Browser Support

Requires WebGL support:
- Chrome 50+
- Firefox 47+
- Safari 10+
- Edge 79+

## Libraries Used

- [MapLibre GL JS](https://maplibre.org/) v4.0.0 - Open-source mapping library
- OpenStreetMap - Base map tiles
