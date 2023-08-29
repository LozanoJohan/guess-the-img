import { useImageContext } from "../context/image";
import { getSquareLength } from "../utils/images";

export default function Square({ color, hidden }) {
  const { image } = useImageContext();
  const { width, height } = image;
  color = hidden ? 'transparent' : color;

  const length = getSquareLength({ width, height });

  const style = {
    backgroundColor: color,
    width: `${length}px`,
    height: `${length}px`
  }

  return (
    <div style={style}></div>
  )
}