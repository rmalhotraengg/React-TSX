import React, { FC } from "react"; 
import { IToDoForm, IToDoList } from "./InterfacesToDo";
import { Button, Form } from "react-bootstrap"; 
import './ToDo.css';

interface Fields{
name:string;    
type:string;
id:string; 
action?:()=>void;
value?:string; 
}

const formFields:Fields[]=[  
    
    {name:"Item",type:"text",id:"item"},
    {name:"Description",type:"text",id:"Description"},
    
    // {name:"Submit",type:"text",id:"submit" }
]
// itm.value=e.value

export const ToDoForm:FC<IToDoForm>=(props)=>{ 
    const onItemAdd=(e:React.FormEvent)=>{
    e.preventDefault();     
    let obj:Partial<IToDoList>={};
    obj.id=Math.random().toString();
    let itemVals=formFields.filter(itm=>itm.name==="Item")[0];    
    let descVals=formFields.filter(itm=>itm.name==="Description")[0];
    obj.name=itemVals.value; 
    obj.value=descVals.value;
//    let vals=formFields.map(itm=>{
//          if(itm.name==="item"){
//             obj.name=itm.value!;
//          }
//          if(itm.name==="description"){
//             obj.value=itm.value!;
//          }
//          return {
//             name: itm.name,value:itm.value, 
//         }
//         });     
    props.onItemAdd(obj);
    }
    return  <Form onSubmit={onItemAdd}>
        {
         formFields.map(itm=>(
            <Form.Group className="mb-3">
                <Form.Label  htmlFor={itm.id} id={itm.id+'lbl'} key={Math.random()} >{itm.name}</Form.Label>
               <input  key={Math.random()} className="form-control" type={itm.type} id={itm.id}  onKeyUp={(e: any) => { itm.value = e.target.value; } }></input> 
          </Form.Group>
         )) 
        } 
        <Button variant="primary" type="submit" >Submit</Button>
        </Form>  
}