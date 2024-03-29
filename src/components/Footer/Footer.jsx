import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Divider, Text } from "@chakra-ui/react"


function Footer() {
  return (
    <>
      <Divider mt={3}></Divider>
      <Text textAlign='center' backgroundColor='gray.300' padding='1rem' fontSize='.8rem'>This App is the Demo of NEWSAPI. Build In React JS with Cakra UI and Developed by <a href="https://shahzadameerofficial.github.io" target="_blank">Shahzad Ameer <ExternalLinkIcon /></a></Text>
    </>
  )
}

export default Footer