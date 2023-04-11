import { Card, Col, Grid } from "@nextui-org/react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();

    console.log(error);

    return(
        <Grid.Container gap={8}>
            <Grid xs></Grid>
            <Grid xs={8}>
                <Card variant="bordered">
                    <Card.Body>
                        <Col>
                            <Text h1>No se encuentra la pagia</Text>
                            <hr />
                            <Text>
                                Verifica la ruta suministrada, ya que no se encuentra
                            </Text>
                            <br />
                            <Text>{ error.statusText || error.message }</Text>
                        </Col>
                    </Card.Body>
                </Card>
            </Grid>
            <Grid xs></Grid>
        </Grid.Container>
    );
}

export default ErrorPage