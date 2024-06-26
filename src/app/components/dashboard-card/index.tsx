import { Box, Card, CardBody, CardHeader, Flex, Heading, IconButton, Text, Tooltip } from "@chakra-ui/react"
import { ReactNode } from "react"
import { FaInfoCircle } from "react-icons/fa"

type IDashboardCard = {
    quantity: number,
    icon: ReactNode,
    color: string,
    title: string,
    tooltip: string,
}

const DashboardCard = ({ title, color, icon, quantity, tooltip }: IDashboardCard) => {
    return (
        <Card
            width={{
                base: "0em",
                sm: "100%",
                md: "100%",
                lg: "100%",
                xl: "47%",
                "2xl": "48%",
            }}
            borderTop={`5px solid ${color}`}
        >
            <CardHeader>
                <Flex alignItems={"center"}>
                    <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                        <Box
                            borderRadius={"100%"}
                            bgColor={color}
                            p={4}
                        >
                            {icon}
                        </Box>
                        <Box>
                            <Heading size="md">{title || title}</Heading>
                        </Box>
                    </Flex>
                    <Tooltip label={tooltip} placement={"top"} textAlign={"center"} p={2} bgColor={"black"} borderRadius={"lg"}>
                        <IconButton
                            variant="ghost"
                            colorScheme="gray"
                            aria-label="See menu"
                            icon={<FaInfoCircle color={color} fontSize={"16px"} />}
                        />
                    </Tooltip>
                </Flex>
            </CardHeader>
            <CardBody pt={5} display={"flex"} alignItems={"center"}>
                <Text width={"100%"} fontWeight={"bold"} textAlign={"left"} pb={2}>
                    Qtd. de Registros
                </Text>
                <Text fontSize={"36px"} width={"100%"} textAlign={"right"}>
                    {quantity}
                </Text>
            </CardBody>
        </Card>
    )
}

export default DashboardCard