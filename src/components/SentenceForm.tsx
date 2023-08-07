import {
    FormControl,
    FormLabel,
    Input,
    Button,
    Heading,
    Stack,
    useToast
} from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { clear, set } from "../redux/sentenceReducer";
import { Formik, Form, Field, FieldProps } from 'formik';
import "./Sentence.css";
export default function SentenceForm() {
    const dispatch = useDispatch()
    const toast = useToast()
    const clearSentence = (resetForm: () => void) => {
        dispatch(clear());
        toast({
            title: 'Cleared.',
            description: "Successfuly cleared, you can start again.",
            status: 'success',
            duration: 9000,
            isClosable: true,
        })
        resetForm()
    }
    return (
        <div className='sentence-form'>
            <Heading textAlign={"center"} as='h1' size='xl' mb={"1rem"}>
                Sentence Form
            </Heading>
            <Formik
                initialValues={{ who: '', what: "", when: "", where: "" }}
                onSubmit={(values, { resetForm }) => {
                    console.log(values);
                    toast({
                        title: 'Saved.',
                        description: "Successfuly saved.",
                        status: 'success',
                        duration: 9000,
                        isClosable: true,
                    })
                    dispatch(set(values));
                    resetForm();
                }}
            >
                {({ resetForm }) => (
                    <Form>
                        <Field name='who'>
                            {({ field }: FieldProps<string>) => (
                                <FormControl isRequired>
                                    <FormLabel >Who:</FormLabel>
                                    <Input {...field} />
                                </FormControl>
                            )}
                        </Field>

                        <Field name='what'>
                            {({ field }: FieldProps<string>) => (
                                <FormControl isRequired>
                                    <FormLabel>What:</FormLabel>
                                    <Input {...field} />
                                </FormControl>
                            )}
                        </Field>
                        <Field name='where'>
                            {({ field }: FieldProps<string>) => (
                                <FormControl isRequired>
                                    <FormLabel>Where:</FormLabel>
                                    <Input {...field} />
                                </FormControl>
                            )}
                        </Field>
                        <Field name='when'>
                            {({ field }: FieldProps<string>) => (
                                <FormControl isRequired>

                                    <FormLabel>When:</FormLabel>
                                    <Input {...field} />
                                </FormControl>
                            )}
                        </Field>
                        <FormControl>
                            <Stack mt={"1rem"}>
                                <Button colorScheme='teal' variant='solid' type="submit">Save</Button>
                                <Button colorScheme='teal' variant='outline' onClick={() => clearSentence(resetForm)}>Clear</Button>
                            </Stack>
                        </FormControl>
                    </Form>
                )}
            </Formik>
        </div >
    )
}
