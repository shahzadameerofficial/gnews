import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../../utils/api";
import NewsCard from "../NewsCard/NewsCard";
import styles from "./CardsContainer.module.css";
import CardSkeleton from "../Skeletons/CardSkeleton";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

// eslint-disable-next-line react/prop-types
function CardsContainer({ path, params }) {
  let [news, setNews] = useState(undefined);
  let [error, setError] = useState(true);
  const skeletonEntities = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0,
  ];
  let [loader, setLoader] = useState(skeletonEntities);
  const commonErrors = {
    400: "Your Request is Tempered or Mis Configured, Try to remove some filters and try again.",
    401: "You are not Authorized for this request, Please Authenticate your request and try again.",
    429: "Too many request recieved from your IP for a while, Please Wait for a while and later try again.",
    500: "Server is unable to accept request at this time, try again later.",
  };
  useEffect(() => {
    setNews(undefined);
    setLoader(skeletonEntities);
    setError(null);
    fetchDataFromApi(path, params).then((data) => {
      const { articles } = data;
      setNews(articles);
      setLoader(undefined);
      if (data.name == "AxiosError" && !articles) {
        setError({
          code: data.code,
          message: commonErrors[data.response.status],
        });
      } else {
        setError(null);
      }
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path]);

  return (
    <div className={styles.cardsContainer}>
      {news?.map((data, index) => {
        if (
          data.title != "[Removed]" &&
          data.description &&
          data.content &&
          data.urlToImage
        ) {
          return <NewsCard key={index} data={data}></NewsCard>;
        }
      })}
      {loader?.map((load, index) => (
        <CardSkeleton key={index} />
      ))}
      {error ? (
        <Alert
          status="error"
          variant="subtle"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          height="100%"
        >
          <AlertIcon boxSize="40px" mr={0} />
          <AlertTitle mt={4} mb={1} fontSize="lg">
            {error.code}
          </AlertTitle>
          <AlertDescription maxWidth="sm">{error.message}</AlertDescription>
        </Alert>
      ) : (
        ""
      )}
    </div>
  );
}
export default CardsContainer;
