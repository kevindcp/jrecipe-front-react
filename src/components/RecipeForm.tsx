import {
    FormControl, 
    FormLabel, 
    FormErrorMessage,
    Input, 
    Button,
    Textarea,
    Select,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    HStack,
    Image,
    Box,
    Text,
} from '@chakra-ui/react';
import { RecipeFormInputs } from '../types/forms';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationRecipe } from '../validators/forms';
import { FC, useState, ChangeEvent } from 'react';
import { uploadImage } from '../utils/Recipes';

const RecipeForm: FC = () => {
    const { register, handleSubmit ,formState: {errors}} = useForm({
        resolver: yupResolver(validationRecipe),
        mode: 'onBlur'
    })

    const onSubmit = async (values: RecipeFormInputs) => {
        if (values.image[0]) {
            const imgur = await uploadImage(values.image[0])
            console.log(values.image[0])
            console.log(imgur)
            console.log(values)
            const request = {...values, image: imgur}
            console.log(request)
        } else {
            const imgur = ''
            console.log(values.image[0])
            console.log(imgur)
            console.log(values)
            const request = {...values, image: imgur}
            console.log(request)
        }
    }
    const [picture, setPicture] = useState('')
    const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (!event || !event.target.files){
            return
        }
        const imageFile: File = event.target.files[0]
        const imageURL: string = URL.createObjectURL(imageFile)
        setPicture(imageURL)
    }

    return (
        <FormControl 
            w = {['90vw', '80vw', '70vw', '60vw', '50vw']}
            maxW = "600px"
            h = {['70vh','50vh']}
        >
            <FormControl
                isInvalid = {!!errors?.title?.message}
                p = '2'
                isRequired
            >
                <FormLabel>Title</FormLabel>
                <Input type='text' placeholder='title' {...register('title')}/>
                <FormErrorMessage>{errors?.title?.message}</FormErrorMessage>
            </FormControl>
            <FormControl
                isInvalid = {!!errors?.category?.message}
                p = '2'
                isRequired
            >
                <FormLabel>Category</FormLabel>
                <Select placeholder='Select a category' {...register('category')}>
                    //placeholder for now
                    <option>Sweets</option>
                    <option>Bakery</option>
                </Select>
            </FormControl>
            <HStack>
                <FormControl
                    isInvalid = {!!errors?.prepTime?.message}
                    p = '2'
                    isRequired
                    width='50%'
                >
                    <FormLabel>Prep time (min) </FormLabel>
                    <NumberInput defaultValue={0} step={1}  >
                        <NumberInputField {...register('prepTime')}/>
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                </FormControl>
                <FormControl
                    isInvalid = {!!errors?.cooktime?.message}
                    p = '2'
                    isRequired
                    width='50%'
                >
                    <FormLabel>Cook time (min)</FormLabel>
                    <NumberInput defaultValue={0} step={1}>
                        <NumberInputField {...register('cookTime')}/>
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                    </NumberInput>
                </FormControl>
            </HStack>
            <FormControl
                isInvalid = {!!errors?.ingredients?.message}
                p = '2'
            >
                <FormLabel>Ingredients</FormLabel>
                <Textarea placeholder='ingredients' {...register('ingredients')}/>
                <FormErrorMessage>{errors?.ingredients?.message}</FormErrorMessage>
            </FormControl>
            <FormControl
                isInvalid = {!!errors?.steps?.message}
                p = '2'
            >
                <FormLabel>Steps</FormLabel>
                <Textarea placeholder='Steps' {...register('steps')}/>
                <FormErrorMessage>{errors?.steps?.message}</FormErrorMessage>
            </FormControl>
            <FormControl
                isInvalid = {!!errors?.image?.message}
                p = '2'
                isRequired
            >
                <FormLabel>Picture</FormLabel>
                <Input type='file' id='file' hidden accept='image/*' {...register('image')} onChange={handleImageChange}/>
                <Box align='center'>
                    <label htmlFor='file'>
                        <Text fontWeight='400' cursor='pointer' pb='2' hidden={!!picture}> Upload a picture of your recipe</Text>
                        <Image src={picture} maxW='300px' w='auto' h='auto' maxH='300px' fallbackSrc={'../assets/images/defaultImage.png'} cursor='pointer' />
                    </label>
                </Box>
                <FormErrorMessage>{errors?.image?.message}</FormErrorMessage>
            </FormControl> 
            <Button 
                onClick={handleSubmit(onSubmit)}
                w = '96%'
                ml = '2'
                mt = '4'
                colorScheme = 'blue'
                disabled = { !!errors.title || !!errors.category || !!errors.ingredients || !!errors.steps || !!errors.prepTime || !!errors.cookTime}
            >
                Submit
            </Button>
        </FormControl>
    )
}

export default RecipeForm