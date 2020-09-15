import React, { useEffect, useState } from "react";
import { Form, Input, Button } from "reactstrap"
import Card from "./Card";
import JoblyApi from "./JoblyApi";
import "./Search.scss";

function Companies() {
    const INITIAL_STATE = {
        search: ""
    };
    const [companies, setCompanies] = useState([]);
    const [formData, setFormData] = useState(INITIAL_STATE);

    useEffect(() => {
        async function getCompanies() {
            const result = await JoblyApi.getCompanies();
            setCompanies(result);
        }
        getCompanies();
    }, [])

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            [name]: value
        });
    };

    async function handleSubmit(e) {
        e.preventDefault();
        const result = await JoblyApi.getCompanies(formData.search);
        setCompanies(result);
    }

    return(
        <div className="col-md-8 offset-md-2 Search">
            <div className="Search mb-4">
                <Form inline onSubmit={handleSubmit}>
                    <Input bsSize="lg" className="flex-grow-1" type="text" onChange={handleChange} name="search" placeholder="Enter search term.."></Input>
                    <Button size="lg" color="primary">Submit</Button>
                </Form>
            </div>
            <div className="Companies-cards">
                {companies.map(company => (
                    <Card key={company.handle} item={company}/>
                ))}
            </div>
        </div>
    )
}

export default Companies;