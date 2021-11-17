import { 
    Flex,
    FormControl, 
    FormLabel, 
    FormErrorMessage,
    Input, 
    Button,
} from "@chakra-ui/react";
import { RegisterFormInputs } from "../types/forms";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationRegister } from "../validators/forms";
import { FC } from "react";

const RegisterForm: FC = () => {
    const { register, handleSubmit , formState: {errors} } = useForm<RegisterFormInputs>({ 
        resolver: yupResolver(validationRegister),
        mode: 'onBlur',
    })

    // placeholder
    const onSubmit = (values: RegisterFormInputs) => console.log(values);

    return (
        <FormControl
            w = '15%'
        >
            <FormControl
                isInvalid = {!!errors?.name?.message}
                p = '2'
                isRequired
            >
                <FormLabel>
                    Name
                </FormLabel>
                <Input type='name' placeholder='John Doe' {...register('name')}/>
                <FormErrorMessage>
                    {errors?.name?.message}
                </FormErrorMessage>
            </FormControl>
            <FormControl
                isInvalid = {!!errors?.email?.message}
                p = '2'
                isRequired
            >
                <FormLabel>Email</FormLabel>
                <Input type='email' placeholder='JohnDoe@email.com' {...register('email')}/>
                <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
            </FormControl>
            <FormControl
                isInvalid = {!!errors?.password?.message}
                p = '2'
                isRequired
            >
                <FormLabel>
                    Password
                </FormLabel>
                <Input type='password' placeholder='password' {...register('password')}/>
                <FormErrorMessage>
                    {errors?.password?.message}
                </FormErrorMessage>
            </FormControl>
            <Button 
                onClick={handleSubmit(onSubmit)}
                w = '94%'
                ml = '2'
                mt = '4'
                colorScheme = 'blue'
                disabled = {!!errors.name|| !!errors.email || !!errors.password}
            >
                Sign Up
            </Button>
        </FormControl>
    );
}

export default RegisterForm