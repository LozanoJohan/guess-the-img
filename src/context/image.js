import { createContext, useContext } from 'react';

const ImageContext = createContext();
export const useImageContext = () => useContext(ImageContext);
export const ImageProvider = ImageContext.Provider;