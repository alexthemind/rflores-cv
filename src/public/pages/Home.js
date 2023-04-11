import { Avatar, Badge, Button, Col, Container, Grid, Row, Text, Link } from "@nextui-org/react";

const images = [
    {url:"https://static-00.iconduck.com/assets.00/flutter-icon-256x256-ngd48v7a.png"},
    {url:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png"},
    {url:"https://download.logo.wine/logo/React_(web_framework)/React_(web_framework)-Logo.wine.png"},
    {url:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png"},
    {url:"https://www.shareicon.net/download/2016/08/01/639868_development.ico"},
    {url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_ZECK3MFYsA4pdqpr_Dta3jX0Z_iIq3EUsg&usqp=CAU"},
    {url:"https://static-00.iconduck.com/assets.00/applications-php-icon-256x256-3si5b75s.png"},
    {url:"http://www.arvixe.com/images/landing_pages/net_framework_service_pack_1_hosting.png"},
    {url:"https://images.opencollective.com/bootstrap/fea8388/logo/256.png"},
    {url:"https://semantic-ui.com/images/logo.png"},
    {url:"https://cdn-1.webcatalog.io/catalog/mui-docs/mui-docs-icon-filled.png"},
    {url:"https://images.opencollective.com/nextui/93858ec/logo/256.png"},
    {url:"https://code.visualstudio.com/assets/apple-touch-icon.png"},
    {url:"https://dl2.macupdate.com/images/icons256/51370.png"},
    {url:"https://cdn.iconscout.com/icon/free/png-256/laravel-2752139-2284956.png"},
    {url:"https://linube.com/blog/wp-content/uploads/sql-server-min.png"},
    {url:"https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-mysql-logo-png-images-are-download-crazypng-15.png"},
    {url:"https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png"},
    {url:"https://images.opencollective.com/webpack/c517443/logo/256.png"},
    {url:"https://images.squarespace-cdn.com/content/v1/5d092c5193b409000129adc4/1561156687619-4HL4TCIN7ZFNF2DZCSOZ/jquery+logo.png"},
    {url:"https://assets.codepen.io/t-1003/internal/avatars/teams/default.png?fit=crop&format=auto&height=256&version=1513627136&width=256"},
];
const fontSize = 13;

const Home = () => {
    return(
        <Grid.Container gap={4}>
            <Grid xs className="col-hide"></Grid>
            <Grid xs={8} md={8}>
                <Col>
                    <br />
                    <Row>
                        <Col align={'center'} css={{width: '100px'}}>
                            <Link color={'text'} href="#"><i className="fa fa-linkedin fa-2x"></i></Link>
                            <br />
                            <Link color={'text'} href="#"><i className="fa fa-google fa-2x"></i></Link>
                            <br />
                            <Link color={'text'} href="#"><i className="fa fa-twitter fa-2x"></i></Link>
                            <br />
                            <Link color={'text'} href="#"><i className="fa fa-facebook fa-2x"></i></Link>
                            <br />
                        </Col>
                        <Container>
                            <Row justify="space-between">
                                <Container css={{
                                    width: '150%',
                                    background: 'linear-gradient(0deg, rgba(255,255,255,1),rgba(255,255,255,0))',
                                    padding: '1.5em',
                                    borderRadius: '10px'
                                }}>
                                    <Badge color={'secondary'} isSquared enableShadow disableOutline>
                                        <Text h3 color="white" css={{margin: 0}}><i className="fa fa-pencil"></i> Información Personal</Text>
                                    </Badge>
                                    <br />
                                    <Text h2 css={{ margin: 0 }}>Rafael Alejandro Flores Martínez</Text>
                                    <Text size={'14px'} b>
                                        Lic. Publicidad Diseño Gráfico <br /> 
                                        Desarrollador web y movil <br /> 
                                        Full Stack.</Text>
                                    <br />
                                    <br />
                                    <Text size={fontSize+'px'}>Se introdujo en 2016 en el desarrollo de aplicaciones debido a una experiencia de necesidad presentada en ese entonces, a partir de ahí ha seguido en su crecimiento personal y profesional en la carrera en la tecnología.</Text>
                                    <br />
                                    <Text size={fontSize+'px'}>Conocimientos avanzados en tecnologías de programación, base de datos sql y nosql, pruebas unitarias (testing), QA, metodologías scrum, entre otros, diseño de query builder, manipulación del DOM, manejo de datos, interfaces avanzadas para sistema moviles, web entre otros.</Text>
                                    <br />
                                    <Text size={fontSize+'px'}>Competitivo y adaptado a cambios, la implementación de nuevos métodos que hagan más eficaz el desarrollo de componentes que a su vez faciliten la mejora y rapidez en entrega de los proyectos propuestos en uno de los fuertes que más persigo en esta rama de la tecnología.</Text>
                                    <br />
                                    <br />
                                    <Button shadow auto color={'gradient'} onClick={() => window.location.href = "/contact"}>
                                        Contactame &nbsp; <i className="fa fa-send"></i>
                                    </Button>
                                </Container>
                                <div style={{width: '10%'}}></div>
                                <Col className="col-hide" justify={'start'} align={'center'}>
                                    <center>
                                        <Avatar 
                                        src="./personal/perfil.jpg" 
                                        color='secondary'
                                        css={{
                                            width: '10em',
                                            height: '10em',
                                        }}
                                        />
                                    </center>
                                    <br />
                                    <br />
                                    <Container css={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        flexWrap: 'wrap'
                                    }}>
                                        {images.map((el,i) => <Avatar zoomed src={el.url} key={'avatar-' + i} /> )}
                                    </Container>
                                </Col>
                            </Row>
                        </Container>
                    </Row>
                    <br />
                </Col>
            </Grid>
            <Grid xs className="col-hide"></Grid>
        </Grid.Container>
    );
}

export default Home