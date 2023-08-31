export const fetchImages = async () => { 
  const response = await fetch('https://color-extractor-api-jr6v-dev.fl0.io/images/');

  if (!response.ok) {
    throw new Error(`Failed to fetch images :( | ${response.status}`);
  }
  
  const data = await response.json();
  return data;
}

export const getNewImage = (imgData) => {
  const i = Math.floor(Math.random() * imgData.length);
  return imgData[i];
}

export const getSquareLength = ({ width, height }) => {
  const MIN_HEIGHT = 20;
  const length = MIN_HEIGHT * 16 / Math.max(width, height);

  return length;
}
