import { Box, Button, TextField } from "@mui/material";
import { Component } from "react";
import { CharacterData } from "./Table";

export interface FormProps {
    onFormSubmit: (character: CharacterData) => void;
}


export interface ValidatedCharacterData extends CharacterData {
    nameError: string;
    jobError: string;
}

export class Form extends Component<FormProps> {

    initialState = {
        name: '',
        nameError: '',
        job: '',
        jobError: ''
    } as ValidatedCharacterData;

    state = this.initialState;

    handleChange = (event: any) => {


        event.preventDefault();

        const { name, value, } = event.target; 
 
        this.setState({
            [name]: value,
            [`${name}Error`]: '',
        })
    };


    onFormSubmit = (event: any) => {
        event.preventDefault();
        console.log(event)

        let doReturn = false;

        const { name, job } = this.state;

        if (name.trim() === "") {
            this.setState({ nameError: "Required!" });
            doReturn = true;
        } else {
            this.setState({ nameError: "" });
        }

        if (job.trim() === "") {
            this.setState({ jobError: "Required!" });
            doReturn = true;
        } else {
            this.setState({ jobError: "" });
        }

        if (doReturn) return;

        this.props.onFormSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {

        const { name, nameError, job, jobError } = this.state;
        console.log(nameError)
        return (
            <Box
                component="form"
                sx={{
                    '! > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
            >
                <TextField
                    id="name"
                    name="name"
                    label="Name"
                    variant="standard"
                    value={name}
                    onChange={this.handleChange}
                    error={nameError !== ""}
                    helperText={nameError !== "" ? nameError : ''}
                />

                <TextField
                    id="job"
                    name="job"
                    value={job}
                    label="Job"
                    variant="standard"
                    onChange={this.handleChange}
                    error={jobError !== ""}
                    helperText={jobError !== "" ? jobError : ''}
                />

                <Button onClick={this.onFormSubmit}>Submit</Button>
            </Box>

            // <form>
            //     <label htmlFor="name">Name</label>
            //     <Input
            //         type="text"
            //         name="name"
            //         id="name"
            //         value={name}
            //         onChange={this.handleChange}
            //     />

            //     <label htmlFor="job">Job</label>
            //     <Input
            //         type="text"
            //         name="job"
            //         id="job"
            //         value={job}
            //         onChange={this.handleChange}
            //     />

            //     <Button onClick={this.onFormSubmit}>Submit</Button>
            // </form>
        )
    }

}