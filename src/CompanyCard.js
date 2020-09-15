import React from "react";
import { CardBody, CardTitle, CardText } from "reactstrap"
import { Link } from "react-router-dom";

function CompanyCard({company}) {
    return (
        <Link className="Card card" to={`/companies/${company.handle}`}>
            <CardBody>
                <CardTitle>{company.name}</CardTitle>
                <CardText>{company.description}</CardText>
            </CardBody>
        </Link>
    )
}

export default CompanyCard;