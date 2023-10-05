export const SavedPalletes = ({ color }) => {
  console.log(color);
  return (
    <div>
      <h2>Saved Color Palettes</h2>
      {color.map((palette, paletteIndex) => (
        <div key={paletteIndex} className="saved-palatte">
          {palette.map((color, colorIndex) => (
            <div
              key={colorIndex}
              className="saved-color-swatch"
              style={{ backgroundColor: color }}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};
