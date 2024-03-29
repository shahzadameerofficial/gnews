import { Card, CardBody, Stack, Text, Link } from "@chakra-ui/react";
import IMG from "../common/IMG";
import styles from "./NewsCard.module.css";
import dayjs from "dayjs";
import ReadNews from "../ReadNews/ReadNews";
function NewsCard({ data }) {
  return (
    <>
    <Card>
      <CardBody
        textAlign="left"
        padding="1rem"
        backgroundColor="#ececec"
        borderRadius=".5rem"
      >
        <IMG
          src={data.urlToImage}
          style={{ aspectRatio: "16/9" }}
        />
        <Stack>
          <Link href={data.url} target="_blank" className={styles.title}>
            {data.title}
          </Link>
          <Text
            fontSize="xs"
            className={styles.author}
            title={data.author + " | " + data.source.name}
          >
            {data.author} &bull; {data.source.name}
          </Text>
          <Text className={styles.description} color="gray.600">
            {data.description}
          </Text>
          <Text
            fontSize="xs"
            color="blue.600"
            className={styles.author}
            title={dayjs(data.publishedAt).format("MMM D, YYYY h:mm A")}
          >
            &bull; {dayjs(data.publishedAt).format("MMM D, YYYY h:mm A")}
          </Text>
        </Stack>
      </CardBody>
      <ReadNews article={data} />
    </Card>
    </>
  );
}
export default NewsCard;
