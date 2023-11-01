import { Spinner, Center } from "native-base";

export function Loading(){
    return (
        <Center flex={1} bg="black">
            <Spinner color="green.500"/>
        </Center>
    )
}