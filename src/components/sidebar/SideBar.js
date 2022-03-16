import React from "react";
import {useNavigate} from "react-router-dom";
import {SideBarStyles, SideBarTitle, SideBarButton, SideBarItems, SideBarItem} from './styles';
import { BsFillGrid1X2Fill, BsXOctagonFill, BsPersonFill,BsLayoutTextWindowReverse, BsPersonLinesFill, BsStickiesFill, BsTagsFill, BsMinecart, BsBookmarkHeart, BsFlower2, BsCreditCard2FrontFill, BsFillArrowUpRightSquareFill, BsBack } from "react-icons/bs";


function SideBar() {

    let navigation = useNavigate();
    function onHandleSubmit(evt) {
        evt.preventDefault();
        navigation('/');

    }

    return ( 
        <SideBarStyles>
            <SideBarTitle><BsFillGrid1X2Fill />&nbsp;&nbsp;DASHBOARD</SideBarTitle>
            
            <SideBarItems>
                <SideBarItem><SideBarButton><BsPersonFill />&nbsp;&nbsp;PROFILE</SideBarButton></SideBarItem>
                <SideBarItem><SideBarButton onClick={onHandleSubmit}><BsXOctagonFill />&nbsp;&nbsp;LOGOUT</SideBarButton></SideBarItem>
            </SideBarItems>

            <SideBarItems>
                <SideBarItem><SideBarButton><BsLayoutTextWindowReverse />&nbsp;&nbsp;VENDORS</SideBarButton></SideBarItem>
                <SideBarItem><SideBarButton><BsPersonLinesFill />&nbsp;&nbsp;USERS</SideBarButton></SideBarItem>
            </SideBarItems>

            <SideBarItems>
                <SideBarItem><SideBarButton><BsStickiesFill />&nbsp;&nbsp;CATEGORIES</SideBarButton></SideBarItem>
                <SideBarItem><SideBarButton><BsTagsFill />&nbsp;&nbsp;PRODUCTS</SideBarButton></SideBarItem>
                <SideBarItem><SideBarButton><BsMinecart />&nbsp;&nbsp;ORDERS</SideBarButton></SideBarItem>
                <SideBarItem><SideBarButton><BsBookmarkHeart />&nbsp;&nbsp;REVIEWS</SideBarButton></SideBarItem>
                <SideBarItem><SideBarButton><BsFlower2 />&nbsp;&nbsp;BRANDS</SideBarButton></SideBarItem>
            </SideBarItems>

            <SideBarItems>
                <SideBarItem><SideBarButton><BsCreditCard2FrontFill />&nbsp;&nbsp;AUTHENTICATION</SideBarButton></SideBarItem>
                <SideBarItem><SideBarButton><BsFillArrowUpRightSquareFill />&nbsp;&nbsp;ICONS</SideBarButton></SideBarItem>
                <SideBarItem><SideBarButton><BsBack />&nbsp;&nbsp;OTHER PAGES</SideBarButton></SideBarItem>
            </SideBarItems>


        </SideBarStyles>
     );
}

export default SideBar;