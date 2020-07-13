import React, {useState, useEffect} from 'react';
import EmployeeManager from '../../modules/EmployeeManager';
import './EmployeeDetail.css';

const EmployeeDetail = props => {
    const [employee, setEmployee] = useState({name:"", experience: "", location: "", picture: ""})
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        //get(id) from EmployeeManager and hang on to data, put it into state
        EmployeeManager.get(props.employeeId)
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
        EmployeeManager.delete(props.employeeId).then(() =>
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
