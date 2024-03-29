import { Image } from "@chakra-ui/react";
import { useState } from "react";
import styles from "./IMG.module.css";
import { Spinner } from "@chakra-ui/react";

function IMG({ src, style }) {
  const [url, setUrl] = useState(src);
  const [loading, setLoading] = useState(true)
  const setPlaceHolder = () => {
    const placeholder =
      "https://icon-library.com/images/no-picture-available-icon/no-picture-available-icon-1.jpg";
    setUrl(placeholder);
  };
  const imageLoaded = () => {
    setLoading(false)
  }
  return (
    <div className={styles.IMG}>
      <Image
        src={url}
        style={style}
        onError={setPlaceHolder}
        borderRadius="10px"
        width="100%"
        onLoad={imageLoaded}
        loading="lazy"
        className={loading ? styles.loading : styles.loaded}
      />
      {
        loading ? (<Spinner className={styles.Loader} />) : ''
      }
    </div>
  );
}

export default IMG;
