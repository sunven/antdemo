import React from 'react';
import {
    BrowserRouter,
    Route,
    Link
} from 'react-router-dom';
import 'antd/dist/antd.css';
import '../../index.css';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
export default class Home extends React.Component {
    constructor() {
        super();
        this.data = {
            "topMenu": [
                {
                    "Id": "8797095327872057670",
                    "ParentId": 0,
                    "MenuName": "询价中心",
                    "Url": "Entrust/MyBacklog/FormList",
                    "Children": null
                },
                {
                    "Id": "21",
                    "ParentId": null,
                    "MenuName": "估价作业",
                    "Url": "http://172.16.2.14:8080",
                    "Children": null
                },
                {
                    "Id": "8797095327872057689",
                    "ParentId": 0,
                    "MenuName": "押品监测",
                    "Url": "Collateral/EvaluativeTask/Index",
                    "Children": null
                },
                {
                    "Id": "8792602373830737920",
                    "ParentId": 0,
                    "MenuName": "地址标准化",
                    "Url": "Standardizer/Task/Index",
                    "Children": null
                },
                {
                    "Id": "8797095327872057818",
                    "ParentId": 0,
                    "MenuName": "收费管理",
                    "Url": "Entrust/BusinessReport/PaymentAnalysis",
                    "Children": null
                }
            ],
            "leftMenu": [
                {
                    "Id": "8797095327872057671",
                    "ParentId": 8797095327872057000,
                    "MenuName": "创建业务",
                    "Url": "/entrust/EntrustOwn/HistoryList",
                    "Children": []
                },
                {
                    "Id": "8797095327872057672",
                    "ParentId": 8797095327872057000,
                    "MenuName": "抢单中心",
                    "Url": "/entrust/assigncenter/formlist",
                    "Children": []
                },
                {
                    "Id": "8797095327872057673",
                    "ParentId": 8797095327872057000,
                    "MenuName": "我的待办",
                    "Url": "/entrust/MyBacklog/formlist",
                    "Children": []
                },
                {
                    "Id": "8797095327872057681",
                    "ParentId": 8797095327872057000,
                    "MenuName": "我的已办",
                    "Url": "/entrust/Completed/formlist",
                    "Children": []
                },
                {
                    "Id": "8797095327872057808",
                    "ParentId": 8797095327872057000,
                    "MenuName": "业务查询",
                    "Url": "/entrust/BusinessSearch/Index",
                    "Children": []
                },
                {
                    "Id": "8797095327872057809",
                    "ParentId": 8797095327872057000,
                    "MenuName": "业务统计",
                    "Url": "/entrust/BusinessReport/Index",
                    "Children": [
                        {
                            "Id": "8797095327872057810",
                            "ParentId": 8797095327872057000,
                            "MenuName": "业务统计报表",
                            "Url": "/entrust/BusinessReport/Index",
                            "Children": []
                        },
                        {
                            "Id": "8797095327872057812",
                            "ParentId": 8797095327872057000,
                            "MenuName": "询价机构业务量分析",
                            "Url": "/entrust/BusinessReport/AdvisorBusinessAnalysis",
                            "Children": []
                        },
                        {
                            "Id": "8797095327872057813",
                            "ParentId": 8797095327872057000,
                            "MenuName": "区域业务量分析",
                            "Url": "/entrust/BusinessReport/AreaBusinessAnalysis",
                            "Children": []
                        },
                        {
                            "Id": "8797095327872057814",
                            "ParentId": 8797095327872057000,
                            "MenuName": "产品类型业务量分析",
                            "Url": "/entrust/BusinessReport/ProductTypeBusinessAnalysis",
                            "Children": []
                        },
                        {
                            "Id": "8792602882695233536",
                            "ParentId": 8797095327872057000,
                            "MenuName": "估价师回价业务量分析",
                            "Url": "/Entrust/BusinessReport/AssessUserBusinessAnalysis",
                            "Children": []
                        },
                        {
                            "Id": "7423533338581794816",
                            "ParentId": 8797095327872057000,
                            "MenuName": "估价师工作量统计",
                            "Url": "/Entrust/BusinessReport/AssessUserWorkloadAnalysis",
                            "Children": []
                        },
                        {
                            "Id": "8797095327872057817",
                            "ParentId": 8797095327872057000,
                            "MenuName": "微信服务包收费统计",
                            "Url": "/Entrust/BusinessReport/WeChatProductBoughtAnalysis",
                            "Children": []
                        },
                        {
                            "Id": "8797114352131901761",
                            "ParentId": 8797095327872057000,
                            "MenuName": "微信查询明细统计",
                            "Url": "/entrust/WeChat/Index",
                            "Children": []
                        },
                        {
                            "Id": "9157399877535137864",
                            "ParentId": 8797095327872057000,
                            "MenuName": "手机绑定信息查询",
                            "Url": "/wechat/WeChatUserBind/index",
                            "Children": []
                        },
                        {
                            "Id": "9157399877535138865",
                            "ParentId": 8797095327872057000,
                            "MenuName": "系统询价异常记录",
                            "Url": "/entrust/BusinessReport/AssessmentFailedAnalysis",
                            "Children": []
                        },
                        {
                            "Id": "7423530889144958976",
                            "ParentId": 8797095327872057000,
                            "MenuName": "状态管理",
                            "Url": "/setting/ModifyEntrust/index",
                            "Children": []
                        },
                        {
                            "Id": "7423530889144959040",
                            "ParentId": 8797095327872057000,
                            "MenuName": "查勘字段配置",
                            "Url": "/setting/SurveyField/index",
                            "Children": []
                        },
                        {
                            "Id": "7423530889144959104",
                            "ParentId": 8797095327872057000,
                            "MenuName": "查勘字段映射配置",
                            "Url": "/setting/SurveyMapping/index",
                            "Children": []
                        }
                    ]
                }
            ]
        };
        this.state = {
            arr: {}
        };
        this.get = this.get.bind(this);
    }
    get() {

    }
    render() {
        return (
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%' }}
            >
                {
                    this.data.leftMenu.map(function (item) {
                        return (<SubMenu key={item.Id} title={<span><Icon type="user" /><Link to={item.Url.toLocaleLowerCase()}>{item.MenuName}</Link></span>}>
                            {
                                item.Children.map(function (itemChildren) {
                                    return (<Menu.Item key={itemChildren.Id}><Link to={itemChildren.Url.toLocaleLowerCase()}>{itemChildren.MenuName}</Link></Menu.Item>)
                                })
                            }
                        </SubMenu>)
                    })
                }
            </Menu>
        )
    }
}