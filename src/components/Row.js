import { useImageContext } from "../context/image";
import Square from "./Square";

export function Row({ y }) {
    const { image, viewablePixels } = useImageContext();
    const { height, width, colors } = image;

    const drawingRate = 4 / Math.max(width, height);
    const xOffset = 2;
    const startOffset = -1;

    return (
      <div className='row'>{
        Array(width).fill(0).map((_, x) => {
            const hidden = drawingRate * (x + xOffset * y) + startOffset > viewablePixels;
            return <Square key={x} color={colors[x + y * width]} hidden={hidden}/>
        })
      }</div>
    )
  }