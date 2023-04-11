import { Card, Col, Container, Grid, Image, Text, Badge, Row, Navbar, Button, Collapse, Avatar } from "@nextui-org/react";
import { useEffect, useState } from "react";

var globalContainers = [true,false];
var globalSetContainer = new Object();
const webApplications = [
    {
        title:'User Manager', 
        subtitle: 'Administrador de usuarios',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        url: 'https://user-manager-system.herokuapp.com/'
    },
    {
        title:'Autocar Superstore', 
        subtitle: 'Renta de vehiculos',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        url: 'https://autocar-superstore.herokuapp.com/'
    },
    {
        title:'App Audio', 
        subtitle: 'Reproductor de música',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        url: ''
    },
];

const showPicture = (index) => {
    let number = (index + 1);
    swal({
        title: '',
        text: '',
        icon: './images/' + number + '.jpg',
        buttons: false
    });
} 

const showCol = (col) => {
    let arr = [true,false];
    if(col != 2)
    {
        arr[0] = true;
        arr[1] = false;
    }
    else
    {
        arr[0] = false;
        arr[1] = true;
    }

    globalContainers = arr;

    globalSetContainer(globalContainers);
}

const Options = () => {
    return(
        <Container>
            <Row justify={'center'}>
                <Button auto bordered color={'gradient'} onPress={() => showCol(1)}>
                    Imagenes &nbsp; <i className="fa fa-image"></i>
                </Button>
                <div style={{ width: '20px'}}></div>
                <Button auto bordered color={'gradient'} onPress={() => showCol(2)}>
                    Aplicaciones &nbsp; <i className="fa fa-file-text"></i>
                </Button>
            </Row>
        </Container>
    )
}

const goTo = (url) => {
    window.open(url,'_blank').focus();
}

const Portfolio = () => {
    const [containers,setContainer] = useState(globalContainers);

    useEffect(() => {
        console.log('Se cargaron los contenedores');
        globalSetContainer = setContainer;
    },[]);

    return (
        <Grid.Container gap={4}>
            <Grid xs></Grid>
            <Grid xs={8}>
                <Col>
                    <Text h1 css={{margin: 0}}>Portafolio</Text>
                    <Text>Elija una opción para ampliar la imagen</Text>
                    <br />
                    { Options() }
                    <br />
                    <hr />
                    <br />
                    {containers.map((c,i) => i == 0 ? <Container key={'con-'+i} css={{
                        padding: 0,
                        display: containers[i] != false ? 'flex' : 'none',
                        flexWrap: 'wrap',
                        justifyContent: 'center'
                    }}>
                        {Array.from({length: 136}).map((el,i) => <Card 
                        variant="bordered" 
                        isHoverable  
                        css={{
                            width: '100px',
                            margin: '0 10px 10px 0',
                            cursor: 'pointer'
                        }}
                        key={'card-'+i}>
                            <Card.Body>
                                <Image 
                                    showSkeleton
                                    width={'100%'}
                                    height={'100px'}
                                    src={'./images/'+(i+1)+'.jpg'} 
                                    alt="Default Image"
                                    objectFit="cover"
                                    onClick={() => showPicture(i)}
                                    key={'image-'+i}
                                />
                            </Card.Body>
                        </Card>)}
                    </Container> : <Container key={'con-'+i}
                    css={{
                        padding: 0,
                        display: containers[i] != false ? 'flex' : 'none',
                        flexWrap: 'wrap',
                        justifyContent: 'center'
                    }}
                    >
                        <Collapse.Group css={{width:'100%'}}>
                            {webApplications.map((el,i) => (
                                <Collapse 
                                title={el.title}
                                subtitle={el.subtitle}
                                contentLeft={
                                    <Avatar 
                                    rounded 
                                    bordered 
                                    color={'secondary'} 
                                    text='Web'
                                    textColor={'white'}/>
                                }
                                key={'collapse-' + i}
                                >
                                    <Button shadow bordered auto flat color={'secondary'} onPress={() => goTo(el.url)}>
                                        <Text>ver webapp</Text> 
                                        &nbsp; 
                                        <i className="fa fa-send"></i>
                                    </Button>
                                </Collapse>
                            ))}
                        </Collapse.Group>
                    </Container>)}
                </Col>
            </Grid>
            <Grid xs></Grid>
        </Grid.Container>
    )
}

export default Portfolio