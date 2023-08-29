import { ImageProvider } from "../context/image";
import { Row } from "./Row";

export function Grid({ image, viewablePixels }) {
    return (
        <div className='grid'>
            <ImageProvider value={{image, viewablePixels}}>
                {Array(image.height).fill(0).map((_, i) => <Row key={i} y={i}/>)}
            </ImageProvider>
        </div>
    )
  }
  