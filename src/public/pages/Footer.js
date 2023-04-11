import { Container, Row, Text } from "@nextui-org/react"

const Footer = () => {
    return(
        <Container className="footer" css={{
            borderTop: 'solid 1px lightgray',
            padding: '4em',
            maxWidth: '100%'
        }}>
            <Row justify="center">
                <Text color="white" size={12}>CopyRight© Rafael A. Flores M. 2022</Text>
            </Row>
        </Container>
    )
}

export default Footer