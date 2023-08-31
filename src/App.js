import './App.css';
import { useState } from 'react';
import { Grid } from './components/Grid';
import { Header } from './components/Header';
import { Form } from './components/Form';
import { getNewImage } from './utils/images';
import { useImage } from './hooks/images';
import { Alert } from './components/Alert';
import { LOST_MESSAGE, WON_MESSAGE } from './constants.js/messages';


export default function App() {
  const [message, setMessage] = useState('');

  const [isClicked, setIsClicked] = useState(false);
  const [isAlertVisible, setAlertVisible] = useState(false);

  const [viewablePixels, setViewablePixels] = useState(0);
  const [imageData, image, setImage] = useImage();

  function stepForward() {
    setViewablePixels(viewablePixels + 1);
    setIsClicked(true);

    const textElement = document.getElementById("myInput");
    textElement.focus();
  }

  function changeImage() {
    const newImage = getNewImage(imageData);
    setImage(newImage);
    setViewablePixels(0);

    setIsClicked(false);
    setAlertVisible(false);
    setMessage('');

    const textElement = document.getElementById("myInput");
    textElement.value = '';
  }

  function handleSubmit(event) {
    event.preventDefault();
    const textElement = document.getElementById("myInput");
    const guess = textElement.value;

    setIsClicked(false);
    setAlertVisible(true);
    guess.toLowerCase() === image.name ? setMessage(WON_MESSAGE) : setMessage(LOST_MESSAGE);
  }

  return (
    <>
      <Header/>
      {image ? 
      <main>
        <Grid image={image} viewablePixels={viewablePixels}/>
        <Form onSubmit={handleSubmit}/>

        <button onClick={stepForward} disabled={isClicked}>Show more🤐</button>
        <button onClick={changeImage}>Next Image⏭️</button>

      </main> : 
      <div style={{heigth: '100px'}}>
        <div>
          <h2>Ready?</h2>
          <img src='https://parspng.com/wp-content/uploads/2022/06/imojipng.parspng.com-4.png' width={'400px'}></img>
        </div>
        <button onClick={changeImage}>Start</button>
      </div>}
      <p>{image && image.name}</p>
      <Alert visible={isAlertVisible} message={message} onHide={() => setAlertVisible(false)}/>
    </>
  );
}


