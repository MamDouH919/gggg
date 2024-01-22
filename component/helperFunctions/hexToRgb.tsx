export function hexToRgb(hex: any) {
    // Remove the '#' symbol if it's present
    hex = hex.replace(/^#/, '');

    // Parse the hex color value to RGB components
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return `${r}, ${g}, ${b}`;
}