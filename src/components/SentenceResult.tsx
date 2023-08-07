import { useSelector } from 'react-redux'
import { RootState } from '../redux/store';
import { Box, Heading } from '@chakra-ui/react'
import { SentenceType } from '../types/types';
import { memo } from "react"
export default memo(function SentenceResult() {
    const { who, where, when, what } = useSelector((state: RootState): SentenceType => state.sentence)
    let text = `${who} ${what} ${where} ${when}`;
    if (text.trim() === "") {
        text = "...";
    } else {
        text += "."
    }
    return (
        <Box bgColor={"white"} borderRadius={"1rem"} p={"1rem"} mt={"2rem"}>
            <Heading as='h1' size='lg'>{text}</Heading>
        </Box>
    )
})