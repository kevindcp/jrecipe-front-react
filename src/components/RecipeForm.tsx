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
    HStack
} from '@chakra-ui/react';
import { RecipeFormInputs } from '../types/forms';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { validationRecipe } from '../validators/forms';
import { FC, useState } from 'react';

const RecipeForm: FC = () => {
    const { register, handleSubmit ,formState: {errors}} = useForm({
        resolver: yupResolver(validationRecipe),
        mode: 'onBlur'
    })

    const onSubmit = async (values: RecipeFormInputs) => {
        console.log(values)
    }
    const [prepTime, setPrepTime] = useState("0")
    const [cookTime, setCookTime] = useState("0")

    return (
        <FormControl 
            w = {['90vw', '80vw', '70vw', '60vw', '50vw','20vw']}
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
            <Button 
                onClick={handleSubmit(onSubmit)}
                w = '96%'
                ml = '2'
                mt = '4'
                colorScheme = 'blue'
                disabled = { !!errors.title || !!errors.category || !!errors.ingredients || !!errors.steps || !!errors.prepTime || !!errors.cookTime }
            >
                Submit
            </Button>
        </FormControl>
    )
}

export default RecipeForm