import React from "react";
import City from "./City";

import { Row } from "reactstrap";


class CitiesList extends React.Component {

    render() {

        const { allCities } = this.props;
        return (
            <div >
                <Row className="hour">
                    {allCities.map((oneCity, index) => (
                        <City key={index} {...oneCity} />
                    ))}
                </Row>
            </div>
        );
    }
}

export default CitiesList;