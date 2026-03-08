// Random color generator for titles
const colorPalette = [
  'hsl(174, 72%, 56%)',    // Primary cyan
  'hsl(200, 80%, 50%)',    // Light blue
  'hsl(280, 70%, 55%)',    // Purple
  'hsl(20, 90%, 55%)',     // Orange
  'hsl(130, 80%, 50%)',    // Green
  'hsl(0, 80%, 55%)',      // Red
  'hsl(340, 75%, 55%)',    // Pink
  'hsl(60, 90%, 50%)',     // Yellow
];

export const getRandomColor = (): string => {
  return colorPalette[Math.floor(Math.random() * colorPalette.length)];
};

export const useRandomTitleColor = (key?: string): string => {
  // Use key if provided for consistent colors per component, otherwise truly random
  if (key) {
    const hash = key.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return colorPalette[hash % colorPalette.length];
  }
  return getRandomColor();
};
