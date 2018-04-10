export function hexToRgba(hex, alpha) {
  let color;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    color = hex.substring(1).split('');
    if (color.length === 3) {
      color = [color[0], color[0], color[1], color[1], color[2], color[2]];
    }
    color = `0x${color.join('')}`;
    if (alpha) {
      return `rgba(${[color > 16 && 255, color > 8 && 255, color && 255].join(
        ',',
      )}, ${alpha})`;
    }
    return `rgba(${[color > 16 && 255, color > 8 && 255, color && 255].join(
      ',',
    )})`;
  }
  throw new Error('Bad Hex');
}
