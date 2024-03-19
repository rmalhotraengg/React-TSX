import React, { FC } from "react";
import { ListItem } from "./ToDoListItem";   
import { IToDoList } from "./InterfacesToDo"; 
import ListGroup from "react-bootstrap/esm/ListGroup";


export const ToDoList:FC<{ items: IToDoList[] }>=(props)=>{

    return   <ListGroup>  
        {props.items.map(item=><ListItem   key={item.id} item={item}  ></ListItem>) } 
         </ListGroup>  
}