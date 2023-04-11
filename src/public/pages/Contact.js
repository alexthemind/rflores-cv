import { Grid, Text, Col, Link } from "@nextui-org/react"


const Contact = () => {
    return(
        <Grid.Container gap={4}>
            <Grid xs></Grid>
            <Grid xs={8}>
                <Col>
                    <Text h1>Contacto</Text>
                    <br />
                    <hr />
                    <br />
                    <Text>
                        Comunicate conmigo a traves de los siguientes medios de una manera mas personal.
                        <br />
                        Te estaré respóndiendo cuanto antes.
                    </Text>
                    <br />
                    <Text h3><i className="fa fa-whatsapp"></i> Celular: +1 (829)-647-8546</Text>
                    <br />
                    <Text h3><i className="fa fa-envelope"></i> Correo: rafael.flores.martinez@gmail.com</Text>
                    <br />
                    <Text h3>
                        <i className="fa fa-external-link-square"></i> Linkedin: <a href="https://www.linkedin.com/in/rafael-a-flores-m-77540549?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BakuWq851TZyRyxXa08xd5A%3D%3D" target={'_blank'}>Rafael A. Flores M.</a>
                    </Text>
                </Col>
            </Grid>
            <Grid xs></Grid>
        </Grid.Container>
    )
}

export default Contact