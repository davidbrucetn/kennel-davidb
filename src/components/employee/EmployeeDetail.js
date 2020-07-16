import React, {useState, useEffect} from 'react';
import APIManager from "../../modules/APIManager";
import './EmployeeDetail.css';

const EmployeeDetail = props => {
    const [employee, setEmployee] = useState({name:"", experience: "", location: "", picture: ""})
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        //get(id) from APIManager and hang on to data, put it into state
        APIManager.get(props.employeeId,"employees")
            .then(employee => {
                setEmployee({
                    name: employee.name,
                    experience: employee.experience,
                    location: employee.location,
                    picture: employee.picture
                });
        setIsLoading(false);
        });
    }, [props.employeeId]);

    const handleDelete = () => {
        //invoke the delete function in Employee Mgr and re-direct to the emp list
        setIsLoading(true);
        APIManager.delete(props.employeeId,"employees").then(() =>
        props.history.push("/employees")
        );
    };

    return (
        (!isLoading) ? 
        <div className="card">
            <div className="card-content">
                {(!isLoading) ?
                    <picture>
                    <img src={require(`${employee.picture}`)} alt="Employee" />
                    </picture> : <img src={require("./employee.jpg")} alt="Employee" />
                }
                <h3>Name: <span style={{ color: 'darkslategrey' }}>{employee.name}</span></h3>
                <div className="div__detail">
                    <p>Experience: {employee.experience}</p>
                    <p>Location: {employee.location}</p>
                    <button type="button" disabled={isLoading} onClick={handleDelete}>Re-home Employee</button>
                </div>
            </div>
        </div>
        :null
    );
}

export default EmployeeDetail;
