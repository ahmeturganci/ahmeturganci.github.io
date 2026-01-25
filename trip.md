---
title: "Trips"
permalink: "/trip/"
layout: page
---

After the pandemic, I made a decision and started to try to both travel and work like a digital immigrant in 81 provinces in Turkey to try and discover the beautiful places and foods in the provinces I have been to at least for 1 day. I have been in 47 of 81 provinces so far. I will update here.

<div id="turkey-map" style="height: 600px; width: 100%; margin: 2em 0; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);"></div>

<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
<script src="/assets/js/turkey-provinces.js"></script>

<script>
// Initialize map centered on Turkey
const map = L.map('turkey-map').setView([39.0, 35.0], 6);

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors',
  maxZoom: 18,
  minZoom: 5
}).addTo(map);

// Custom icons
const visitedIcon = L.divIcon({
  className: 'custom-marker-visited',
  html: '<div style="background-color: #27ae60; width: 14px; height: 14px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 6px rgba(0,0,0,0.4);"></div>',
  iconSize: [20, 20],
  iconAnchor: [10, 10]
});

const notVisitedIcon = L.divIcon({
  className: 'custom-marker-not-visited',
  html: '<div style="background-color: #95a5a6; width: 8px; height: 8px; border-radius: 50%; border: 2px solid white; box-shadow: 0 1px 3px rgba(0,0,0,0.3); opacity: 0.5;"></div>',
  iconSize: [12, 12],
  iconAnchor: [6, 6]
});

// Add markers for visited provinces
turkeyProvinces.visited.forEach(province => {
  const marker = L.marker([province.lat, province.lon], { icon: visitedIcon })
    .addTo(map)
    .bindPopup(`
      <div style="text-align: center; padding: 8px; min-width: 120px;">
        <strong style="color: #27ae60; font-size: 16px;">${province.name}</strong>
        <br>
        <span style="font-size: 12px; color: #666;">✓ Visited</span>
        ${province.visits > 1 ? `<br><span style="font-size: 11px; color: #999;">${province.visits} times</span>` : ''}
      </div>
    `);
  
  marker.on('mouseover', function() {
    this.openPopup();
  });
});

// Add markers for not visited provinces (optional, with lower opacity)
turkeyProvinces.notVisited.forEach(province => {
  L.marker([province.lat, province.lon], { icon: notVisitedIcon })
    .addTo(map)
    .bindPopup(`
      <div style="text-align: center; padding: 8px; min-width: 120px;">
        <strong style="color: #95a5a6; font-size: 16px;">${province.name}</strong>
        <br>
        <span style="font-size: 12px; color: #999;">Not visited yet</span>
      </div>
    `);
});

// Add custom CSS
const style = document.createElement('style');
style.textContent = `
  .leaflet-popup-content-wrapper {
    border-radius: 12px;
    box-shadow: 0 3px 14px rgba(0,0,0,0.4);
  }
  .leaflet-popup-tip {
    box-shadow: 0 3px 14px rgba(0,0,0,0.4);
  }
  .custom-marker-visited {
    transition: transform 0.2s;
    cursor: pointer;
  }
  .custom-marker-visited:hover {
    transform: scale(1.3);
  }
  .custom-marker-not-visited {
    transition: opacity 0.2s;
    cursor: pointer;
  }
  .custom-marker-not-visited:hover {
    opacity: 1 !important;
  }
  #turkey-map {
    z-index: 1;
  }
`;
document.head.appendChild(style);
</script>

<div style="background: #f8f9fa; padding: 1.5em; border-radius: 8px; margin: 2em 0;">
  <h3 style="margin-top: 0; color: #2c3e50;">📊 Travel Statistics</h3>
  <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1em; margin: 1em 0;">
    <div style="text-align: center;">
      <div style="font-size: 2em; font-weight: bold; color: #27ae60;">3</div>
      <div style="color: #7f8c8d; font-size: 0.9em;">Visited</div>
    </div>
    <div style="text-align: center;">
      <div style="font-size: 2em; font-weight: bold; color: #95a5a6;">78</div>
      <div style="color: #7f8c8d; font-size: 0.9em;">Remaining</div>
    </div>
    <div style="text-align: center;">
      <div style="font-size: 2em; font-weight: bold; color: #3498db;">4%</div>
      <div style="color: #7f8c8d; font-size: 0.9em;">Progress</div>
    </div>
  </div>
  <div style="background: #ecf0f1; height: 24px; border-radius: 12px; overflow: hidden; margin-top: 1em;">
    <div style="background: linear-gradient(90deg, #27ae60, #2ecc71); height: 100%; width: 4%; display: flex; align-items: center; justify-content: flex-end; padding-right: 10px; color: white; font-size: 0.85em; font-weight: bold;">
      4%
    </div>
  </div>
</div>

### 🗺️ Map Legend
- <span style="color: #27ae60;">●</span> **Green markers**: Visited provinces
- <span style="color: #95a5a6;">●</span> **Gray markers**: Not visited yet
- Hover over markers to see province names
- Larger markers indicate multiple visits

### 📝 How to Update
Gezdiğiniz illeri eklemek için `assets/js/turkey-provinces.js` dosyasındaki `visited` listesine il ekleyin:

```javascript
visited: [
  { name: 'İl Adı', lat: XX.XXXX, lon: YY.YYYY, visits: 1 },
]
```

### 📸 Journey Highlights
Add your favorite photos and stories from your travels here!

<details style="margin-top: 2em;">
<summary><strong>📸 View Original Map Reference</strong></summary>
<img src="/assets/images/20230408.png" alt="Turkey Trip Map" style="margin-top: 1em; border-radius: 8px;" />
</details>
