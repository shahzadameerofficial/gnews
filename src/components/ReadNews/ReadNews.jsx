import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Heading,
  Text,
  HStack
} from "@chakra-ui/react";

import dayjs from "dayjs";
import IMG from "../common/IMG";
import styles from './ReadNews.module.css'

function ReadNews({ article }) {
  const { onClose, isOpen, onOpen } = useDisclosure();
  return (
    <>
      <Modal onClose={onClose} size="full" isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{article?.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <article className={styles.body}>
              <section className={styles.left}>
                <IMG src={article?.urlToImage} style={{ aspectRatio: "16/9" }}/>
                <Heading size='sm'>Descriptions:</Heading>
                  <Text>{article?.description || 'Unknown'}</Text>
                <HStack>
                  <Heading size="xs">Author: </Heading>
                  <Text>{article?.author || 'Unknown'}</Text>
                </HStack>
                <HStack>
                  <Heading size="xs">Published By: </Heading>
                  <Text>{article?.source?.name || 'Unknown'} <span>{'at '+dayjs(article?.publishedAt).format("MMM D, YYYY h:mm A") || 'Unknown'}</span></Text>
                </HStack>
                  
              </section>
              <section className="right">
              <Text>
                <Heading size='md'>Article:</Heading>
                  {article?.content}
                </Text>
              </section>
            </article>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Button onClick={onOpen} colorScheme='blue' mt='2'>Read</Button>
    </>
  );
}

export default ReadNews;
