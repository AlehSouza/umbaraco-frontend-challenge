import { Flex, Text, Input, Button } from "@chakra-ui/react"
import Link from "next/link"

const Login = () => {
    return (
        <Flex bgColor={"white"} w={"400px"} h={"100%"} p={12} borderRadius={"lg"} flexDirection={"column"} justifyContent={"space-between"} boxShadow={"lg"}>
            <Flex>
                <Text fontWeight={"bold"} letterSpacing={"1px"} color={"#5A3C34"}>HealthCare</Text>
            </Flex>
            <Flex flexDirection={"column"} color={"black"}>
                <Text fontSize={"2rem"}>Bem-vindo a</Text>
                <Text fontSize={"2rem"} fontWeight={"bold"}>HealthCare 😎</Text>
            </Flex>
            <Flex flexDirection={"column"} gap={4} >
                <Input placeholder="Nome" fontSize={"13px"} />
                <Input placeholder="Senha" fontSize={"13px"} />
            </Flex>
            <Flex flexDirection={"column"} gap={4} >
                <Link href={"/dashboard"}>
                    <Button colorScheme="green" variant="solid" w={"100%"}>
                        Entrar
                    </Button>
                </Link>
                <Button colorScheme="gray" variant="link" w={"100%"}>
                    <Text fontSize={"13px"}>
                        Cadastre-se
                    </Text>
                </Button>
            </Flex>
            <Flex justifyContent={"center"} alignItems={"center"} pb={"50px"} fontSize={"13px"} color={"#5A3C34"}>
                <Text textAlign={"center"}>
                    Ao se cadastrar, você concorda com os nossos <br />
                    <b>Termos de uso</b> e <b>Política de privacidade</b>
                </Text>
            </Flex>
        </Flex>
    )
}

export default Login