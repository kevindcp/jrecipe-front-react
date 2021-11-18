import {
    FormControl, 
    FormLabel, 
    FormErrorMessage,
    Input, 
    Button,
} from "@chakra-ui/react";
import { LoginFormInputs } from "../types/forms";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { validationLogin } from "../validators/forms";
import { FC } from "react";

const LoginForm: FC = () => {
    const { register, handleSubmit , formState: {errors} } = useForm<LoginFormInputs>({ 
        resolver: yupResolver(validationLogin),
        mode: 'onBlur',
    })

    // placeholder
    const onSubmit = (values: LoginFormInputs) => console.log(values);
    return (
        <FormControl
        w = {['90vw', '80vw', '70vw', '60vw', '50vw','20vw']}
        h = '50vh'
        >
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
                disabled = {!!errors.email || !!errors.password}
            >
                Log In
            </Button>
        </FormControl>
    );
}

export default LoginForm