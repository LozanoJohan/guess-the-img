import './App.css';
import { useState } from 'react';
import { MILK, HEART, GOKU } from './images.js'


const images = [MILK, HEART, GOKU];


export default function App() {
  const [viewablePixels, setViewablePixels] = useState(0);
  const next = () => setViewablePixels(viewablePixels + 1);

  const [imgIndex, setImg] = useState(0);
  const img = images[imgIndex];
  const changeImg = () => {
    setImg(Math.floor(Math.random() * images.length));
    setViewablePixels(0);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const guess = document.getElementById("myInput").value.toString();

    if (guess.toLowerCase() === img.name) alert('ganaste :D')
  }

  return (
    <div className="App">
      <h1>Guess the Image!</h1>
      <p>
        Press the button below to start the draw, try to guess it as fast as possible!
      </p>
      <Grid drawing={img.colors} viewablePixels={viewablePixels} width={img.width} height={img.height}/>
      <form id="myForm" onSubmit={handleSubmit}>
        <label for="myInput">Enter your guess:</label>
        <input type="text" className='text-box' id="myInput" />
        <input type="submit" value="Submit" />
      </form>
      <Button onClick={next}>Next</Button>
      <Button onClick={changeImg}>Next Image</Button>

      <p>Intentos restantes: 3</p>
    </div>
  );
}




const Square = ({ children, color, hidden, width, height }) => {
  color = hidden ? 'transparent' : color;

  const MIN_HEIGHT = 20;
  const length = MIN_HEIGHT * 16 / Math.max(width, height);

  const style = {
    backgroundColor: color,
    width: `${length}px`,
    height: `${length}px`
  }

  return (
    <div style={style}>{children}</div>
  )
}


const Row = ({ width, height, y, pixels, viewablePixels }) => {
  const squares = [];
  const drawingRate = 16 / Math.max(width, height);

  for (let x = 0; x < width; x += 1) {
    const hidden =  drawingRate * (x + 2 * y) > viewablePixels;

    squares.push(<Square key={x} color={pixels[x]} hidden={hidden} height={height} width={width}/>)
  }

  return (
    <div className='row'>{squares}</div>
  )
}


const Grid = ({ drawing, viewablePixels, width, height}) => {
  const rows = [];

  for (let i = 0; i < height; i += 1) {
    const pixels = drawing.slice(i * width, (i * width) + width);
    rows.push(<Row key={i} width={width} y={i} pixels={pixels} viewablePixels={viewablePixels} height={height}/>)
  }

  return (
    <div className='grid'>{rows}</div>
  )
}


const Button = ({ onClick, children }) => {
  return (
    <button onClick={onClick}>{children}</button>
  )
}
