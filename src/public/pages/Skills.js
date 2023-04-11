import { Collapse, Grid, Text, Col } from "@nextui-org/react"


const collection = [
    {
        title: 'Perfil',
        data: [
            {text: '- Experiencia en analisis y lógica de negocios.'},
            {text: '- Experiencia trabajando con frameworks de diseño y desarrollo.'},
            {text: '- Trabajo en equipo.'},
            {text: '- Adaptabilidad a cambios.'},
            {text: '- Auto crítico.'},
            {text: '- Enfocado a resultados.'},
            {text: '- Respeta los criterios de sus colegas de trabajo.'},
            {text: '- Discreto.'},
        ]
    },
    {
        title: 'Experiencia',
        data: [
            {text: '- 6+ POO'},
            {text: '- 6+ Php'},
            {text: '- 6+ Javascript'},
            {text: '- 4+ SQL Server'},
            {text: '- 4+ Mysql'},
            {text: '- 4+ BD y diseño de lógica de negocios'},
            {text: '- 6+ Html, Css'},
            {text: '- Reciente .Net FrameWorks 6.0 core 4.7.2'},
            {text: '- 4+ Jquery, Jquery UI'},
            {text: '- 2+ Vue.js'},
            {text: '- 2+ Angular'},
            {text: '- 3+ Flutter y Dart (desarrollo movil y web)'},
            {text: '- 4+ en diagramación de contenidos'},
            {text: '- 2+ Node js'},
            {text: '- 3+ Api rest'},
            {text: '- 2+ Worpress'},
            {text: '- 2+ Joomla'},
            {text: '- 1 Oracle DB (Forms and Report)'},
            {text: '- 7m React'},
            {text: '- 7m Webpack'},
            {text: '- 1m Docker'},
        ]
    },
    {
        title: 'Herramientas',
        data: [
            {text: '- 3+ Android Studio'},
            {text: '- 3+ Visual Studio Code'},
            {text: '- Reciente Visual Studio 2019 - 2022'},
            {text: '- 1 Netbeans'},
            {text: '- 1 Eclipse'},
            {text: '- 4+ Sql Server Management'},
            {text: '- 4+ Mysql Workbench, Sql yog'},
            {text: '- 4+ AdobeSuite (Photoshop, Illustrator,XD)'},
        ]
    },
    {
        title: 'Herramientas de Diseño',
        data: [
            {text: '- 6+ Bootstrap'},
            {text: '- 6+ Semantic UI'},
            {text: '- 2+ Materialize'},
            {text: '- 2+ Material UI'},
            {text: '- 2+ Angular'},
            {text: '- 3+ Vue js'},
            {text: '- 3+ Material (Flutter)'},
        ],
    },
    {
        title: 'Herramientas de Desarrollo',
        data: [
            {text: '- Laravel'},
            {text: '- CodeIgniter'},
            {text: '- Node js'},
            {text: '- Framework 6.0'},
            {text: '- Linq'},
            {text: '- Entities'},
            {text: '- Filtros'},
            {text: '- MVC'},
            {text: '- Web api'},
        ]
    }
];

const Skills = () => {
    return (
        <Grid.Container gap={4}>
            <Grid xs></Grid>
            <Grid xs={8}>
                <Col>
                    <Text h1 css={{margin: 0}}>Experiencia y conocimientos</Text>
                    <br />
                    <Text>Listado de herramientas</Text>
                    <br />
                    <Collapse.Group shadow>
                        { collection.map((el,i) => <Collapse 
                            title={ el.title } 
                            subtitle='Expandir para ver información' 
                            contentLeft={<i className="fa fa-globe fa-2x"></i>}
                            key={'collapse-' + i}
                        >
                            { el.data.map((d,n) => <Text css={{marginLeft: '3em'}} key={'text-' + n}>{ d.text }</Text> ) }
                        </Collapse>) }
                    </Collapse.Group>
                </Col>
            </Grid>
            <Grid xs></Grid>
        </Grid.Container>
    )
}

export default Skills