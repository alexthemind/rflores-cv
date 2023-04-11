import { Badge, Grid, Text, Col, Collapse, Container, Card, Row, Avatar } from "@nextui-org/react"

const jobway = [
    { 
        title: 'ActiveIT CL', 
        subtitle: 'Ingeniero en Sistemas (Actual)', 
        date: '04/2022', 
        description: 'javascript, typescript, git, css3, html5, Siebel, node js, java, Docker' ,
        image: 'https://media-exp1.licdn.com/dms/image/C560BAQG5mQf3_azRYA/company-logo_200_200/0/1569410131861?e=2147483647&v=beta&t=7CcRXXx79z2ZIkEOa37p1ykjYruw9X9sGlWx9EzE1sI'
    },
    { 
        title: 'Security Force', 
        subtitle: 'Full Stack Developer', 
        date: '06/2020 - 04/2022', 
        description: 'javascript, php, sql server, vue, git, css3, html5, laravel, codeigniter, node js',
        image: 'https://media-exp1.licdn.com/dms/image/C4D0BAQHvTnypIpPemw/company-logo_200_200/0/1519917600297?e=2159024400&v=beta&t=vFrtPAXG2ZXeL8hsH3dsQuR8gLAIWEyUrB9GfwGSMaM'
    },
    { 
        title: 'Grupo Peña Defilló', 
        subtitle: 'QA / Helpdesk Navision Dynamic', 
        date: '02/2019 – 04/2020', 
        description: 'Microsoft Dynamics',
        image: 'https://media-exp1.licdn.com/dms/image/C4E0BAQHweV6LQuezIA/company-logo_200_200/0/1565451832691?e=2159024400&v=beta&t=J7RfQZ0Hq90qLQ_1jFcYwIYQ5TWxBKUHNP1ellspfDU'
    },
    { 
        title: 'Security Force', 
        subtitle: 'Php developer', 
        date: '02/2019 – 08/2019', 
        description: 'javascript, php, sql server, vue, git, css3, html5, laravel, codeigniter, node js',
        image: 'https://media-exp1.licdn.com/dms/image/C4D0BAQHvTnypIpPemw/company-logo_200_200/0/1519917600297?e=2159024400&v=beta&t=vFrtPAXG2ZXeL8hsH3dsQuR8gLAIWEyUrB9GfwGSMaM'
    },
    { 
        title: 'Media Revolution', 
        subtitle: 'Full Stack Developer', 
        date: '03/2018 – 11/2018', 
        description: 'javascript, loopback(no-sql), cordova, css3, html5, php',
        image: 'https://media-exp1.licdn.com/dms/image/C4E0BAQF7sTqqSMgtrw/company-logo_200_200/0/1625691610768?e=2159024400&v=beta&t=OZyneSFabcK4Z14MQ3fu8jbBcqESHTx4bcd_O33rGqk'
    },
    { 
        title: 'Jardin Memorial', 
        subtitle: 'Php developer', 
        date: '01/2016 – 03/2018', 
        description: 'javascript, php, mysql, css3, html5',
        image: 'https://megacentro.com.do/content/uploads/2018/08/Sin-t%C3%ADtulo-2-1.jpg'
    },
    { 
        title: 'BDO Dominicana', 
        subtitle: 'Graphic design', 
        date: '07/2012 – 12/2015', 
        description: 'php, mysql, css3, html5',
        image: 'https://www.bdo.com.do/bdokit/assets/img/BDO_logo_150dpi_RGB_290709.jpg'
    },
];

const Track = () => {
    return (
        <Grid.Container gap={4}>
            <Grid xs></Grid>
            <Grid xs={8}>
                <Col>
                    <Text h1 css={{ margin: 0 }}>
                        <i className="fa fa-list"></i> Experiencia profesional
                    </Text>
                    <Text>Trayectoria profesional</Text>
                    <br />
                    <br />
                    { jobway.map((el,i) => <Card css={{ marginBottom: '1em' }} key={'card-' + i} >
                        <Card.Body>
                            <Row>
                                <Row>
                                    <Avatar 
                                    squared 
                                    bordered
                                    size={'xl'}
                                    src={ el.image }
                                    css={{ marginRight: '2.5em' }}
                                    />
                                    
                                    <Col>
                                        <Text h3 css={{ margin: 0 }} color="primary">{ el.title }</Text>
                                        <Text>{ el.subtitle }</Text>
                                        <Text color="error">{ el.date }</Text>
                                    </Col>
                                </Row>
                                <Col css={{ width: '50%' }}>
                                    <Text b>Tecnologías</Text>
                                    <Text>{ el.description }</Text>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card> ) }
                </Col>
            </Grid>
            <Grid xs></Grid>
        </Grid.Container>
    )
}

export default Track