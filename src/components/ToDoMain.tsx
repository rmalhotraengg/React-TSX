import { FC, useState } from "react";
import { ToDoForm } from "./ToDoForm";
import { ToDoList } from "./ToDoList";
import { IToDoList } from "./InterfacesToDo";
import { SideNav } from "./SideNav/sideNav";
import "./ToDoMain.css"

export const ToDo: FC = () => { 
  
  let [openNav,setNav]=useState<boolean>(false);
  let [toDoListItems, setToDoListItems] = useState<IToDoList[]>([]);
  const onItemAdd: any = (item: IToDoList) => {
    setToDoListItems([item, ...toDoListItems]);
    console.log(toDoListItems);
  };
  return (
    <> 
   
      <div className="wrapper">
        <SideNav openNav={openNav}>
          <ToDoForm onItemAdd={onItemAdd}></ToDoForm>
        </SideNav>

        <div id="content">
        <div style={{position: "fixed",left: "179px",top: "1px",zIndex:1}} >
        <div className="container-fluid">
          <button onClick={()=>{setNav(!openNav)}} type="button" id="sidebarCollapse" className="btn btn-info">
            <i className="fas fa-align-left"></i>
            <span>Toggle Sidebar</span>
          </button>{" "}
        </div></div>
          <div className="grid">
            <ToDoList items={toDoListItems}></ToDoList>
          </div>{" "}
        </div>
      </div>
    </>
  );
};
