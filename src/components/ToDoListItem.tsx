import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import { IToDoList } from "./InterfacesToDo";
import  "./card.css";
 


export const ListItem:React.FC<{ item: IToDoList; }>=props=>{
    return <ListGroup.Item>
        <Card style={{ width: '18rem',height:"4rem" }}>
      <Card.Img variant="top" />
      <Card.Body> 
  <section className="mx-auto my-1"> 
    {/* <div className="card testimonial-card mt-2 mb-3"> */}
      {/* <div className="card-up aqua-gradient"></div>
      <div className="avatar mx-auto white"> 
      </div> */}
      <div >
        <p className="afont-weight-bold" style={{marginBottom:"-1rem"}}>{props.item.name}</p>
       -------------------------
        <p><i className="fas fa-quote-left" style={{marginBottom:"1rem"}}></i> {props.item.value}</p>
      {/* </div> */}
    </div>
    
  </section>
{/* </div> */}
        {/* <Card.Title>{props.item.name}</Card.Title>
        <Card.Text>
        {props.item.value}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>

    </ListGroup.Item>
}
