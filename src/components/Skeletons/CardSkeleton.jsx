
import { Skeleton, Stack } from '@chakra-ui/react'
function CardSkeleton() {
  return (
      <Stack direction='column' padding='1rem'>
        <Skeleton aspectRatio="16/9" width='100%' mb='1' borderRadius='10px'/>
        <Skeleton  width='100%' height='22px' mb='1' borderRadius='10px'/>
        <Skeleton width='50%' height='22px' mb='1' borderRadius='10px'/>
        <Skeleton  width='70%' height='16px' mb='1' borderRadius='10px'/>
        <Skeleton height='30%' width='100%' mb='1' borderRadius='10px'/>
        <Skeleton  width='60%' height='18px' mb='1' borderRadius='10px'/>
    </Stack>
  )
}

export default CardSkeleton