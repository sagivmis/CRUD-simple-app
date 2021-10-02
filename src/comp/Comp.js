import React from "react";
import Button from "./Button";

const sendRequest = (method) => {
    fetch("http://localhost:3000/", {
        method: method,
    })
        .then((res) => res.text())
        .then((data) => console.log(data));
};
const Comp = () => {
    return (
        <div>
            <Button
                onClick={() => sendRequest("GET")}
                text={"GET request"}
                color={"hsl(236, 21%, 26%)"}
            />
            <br />
            <Button
                onClick={() => sendRequest("PUT")}
                text={"PUT request"}
                color={"hsl(236, 21%, 26%)"}
            />
            <br />
            <Button
                onClick={() => sendRequest("POST")}
                text={"POST request"}
                color={"hsl(236, 21%, 26%)"}
            />
            <br />
            <Button
                onClick={() => sendRequest("DELETE")}
                text={"DELETE request"}
                color={"hsl(236, 21%, 26%)"}
            />
            <br />
        </div>
    );
};

export default Comp;
