import { Navbar, Text, Button, Badge, Collapse, Link } from "@nextui-org/react";

const MainNavigation = () => {

    const items = [
        {text: 'Sobre mi', url: '/'},
        {text: 'Trayectoria', url: '/track'},
        {text: 'Habilidades', url: '/skills'},
        {text: 'Portafolio', url: '/portfolio'},
        {text: 'Contacto', url: '/contact'},
    ];

    return(
        <Navbar isBordered disableShadow variant={'sticky'} css={{ fontSize: '14px' }}>
            <Navbar.Brand>
                <Navbar.Toggle showIn="xs" />
                <Badge className="col-hide" color={'secondary'} isSquared enableShadow disableOutline>
                    <Text weight={'bold'} hideIn="xs" color="white" size={12}>
                        <i className="fa fa-user-circle"></i> RFLORES
                    </Text>
                </Badge>
                &nbsp;
                &nbsp;
                &nbsp;
                <Text h4 css={{ margin: 0 }}><i className="fa fa-phone-square"></i> +1 (829)-647-8546</Text>
            </Navbar.Brand>
            <Navbar.Content css={{
                width: '20%'
            }}></Navbar.Content>
            <Navbar.Collapse>
                { items.map((item,index) => (
                    <Navbar.CollapseItem key={'item-'+index}>
                        <Link 
                        color="inherit"
                        css={{
                          minWidth: "100%",
                        }}
                        href={item.url}>
                            <Text size={'30px'}><i className="fa fa-caret-right" aria-hidden="true"></i> 
                            &nbsp;
                            {item.text}</Text>
                        </Link>
                    </Navbar.CollapseItem>
                )) }
            </Navbar.Collapse>
            <Navbar.Content 
                enableCursorHighlight
                activeColor="secondary"
                hideIn="xs"
                variant="highlight"
            >
                { items.map((item,index) => (
                    <Navbar.Link href={item.url} key={'it-'+index}>{item.text}</Navbar.Link>
                )) }
            </Navbar.Content>
        </Navbar>
    );
}

export {
    MainNavigation
}