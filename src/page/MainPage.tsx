import React from 'react';
import {Layout, Menu} from "antd";
import { Fas } from '../App';
import '../App.css';


const { Header, Footer, Sider, Content } = Layout;

export const MainPage : React.FC<{}> = () => {
    const [collapsed, setCollapsed] = React.useState<boolean>(false);
    return <Layout style={{height: "100%"}}>
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className={"logo"}/>
                <div className={"trigger"}>
                    <Fas icon={collapsed ? "indent" : "outdent"} onClick={() => setCollapsed(!collapsed)}/>
                </div>
                <Menu
                    style={{height: "90vh"}}
                    theme={"dark"}
                    mode={"inline"}
                    defaultSelectedKeys={['1']}
                    items={[
                        {key: '1', icon:<Fas icon={"home"}/>, label: "Home" },
                        {key: '2', icon:<Fas icon={"home"}/>, label: "O Nas" },
                        {key: '3', icon:<Fas icon={"home"}/>, label: "Oferta" },
                        {key: '4', icon:<Fas icon={"home"}/>, label: "Opinie" },
                        {key: '5', icon:<Fas icon={"home"}/>, label: "Galeria" },
                        {key: '6', icon:<Fas icon={"home"}/>, label: "Kontakt" },
                    ]}
                />
            </Sider>
            <Layout className={"site-layout"} style={{}}>

                <Content className={"site-layout-background"} style={{margin: "24px 16px 0 16px", padding: 24, minHeight:280, overflow:"auto"}}>

                    dupa
                </Content>

            </Layout>

        </Layout>
        <Layout>
            <Footer style={{padding: "5px !important", textAlign:"center"}}>
                2022 Copyright&nbsp;&copy; Marcin Guzy
            </Footer>
        </Layout>
    </Layout>
}