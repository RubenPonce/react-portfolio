import React, { Component } from 'react'
import {Form, Input, Label, Button} from 'reactstrap'
//whoops this became the actual admin panel instead of a login lol
//Change this to AdminPanel or something 
const addMoreSelection = (e) =>{
    e.preventDefault();
    return (<Input type="select" id="technologies">
    <option>1</option>
    <option>2</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
</Input>)
}
export class Login extends Component {
    state={
        totalTech: 3,
        technologies: [],
    }
    

    render() {
        return (
            <div className="login-form">
            <h2>Create A Project</h2>
                <Form>
                {/* 
                "name": "MUDAMUDAMUDAMUDA",
                "technologies": [
                    "javascript",
                    "React",
                    "Core Java",
                    "Spring",
                    "CSS"
                ],
                "description": "MUDAMUDA MUDA MUDA",
                "liveLink": "muda",
                "sourceCode": "muda",
                "shown": true 
                */}
                    <Label for="projectname">Project Name</Label>
                    <Input placeholder="project: wryyyy" id="projectname"></Input>

                    <div>
                    <Label for="technologies">Technologies</Label>
                    <Button  color="success" style={{margin: "1em"}} onClick={this.addMoreSelection}>+</Button>
                    </div>
                    <Input type="select" id="technologies">
                        <option>1</option>
                        <option>2</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </Input>
                    
                    

                    <Label for="description">Description</Label>
                    <Input type="textarea" id="description"/>
                    
                </Form>
            </div>
        )
    }
}

export default Login
