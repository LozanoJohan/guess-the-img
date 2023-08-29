import { useState, useEffect } from "react";
import { fetchImages } from "../utils/images";

export function useImage() {
    const [imgData, setImgData] = useState([]);
    const [image, setImage] = useState();

    useEffect(() => {

        async function fetchData() {
            try {
                const data = await fetchImages();
                setImgData(data);
            } catch (error) {
                console.log(error);            
            }
        }
        fetchData();
    }, []);

    return [imgData, image, setImage];
}