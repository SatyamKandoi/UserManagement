import React from "react";
import { useGetBirthdayQuery } from "../../services/employee";
import { useState } from "react";
import { useEffect } from "react";

const Greeting = () => {
    const set = useGetBirthdayQuery();
    const [greetings, setGreetings] = useState([]);
    useEffect(() => {
        if (set) {
            setGreetings(set?.data);
        }
    }, [set.data]);

    return (
        <div style={{ marginLeft: "70px" }}>
            {greetings?.map((employee, id) => (
                <h1
                    key={id}
                    className="text-xl"
                >{`Happy Birthday ${employee.firstName} 
        ${employee.lastName}`}</h1>
            ))}
        </div>
    );
};

export default Greeting;
