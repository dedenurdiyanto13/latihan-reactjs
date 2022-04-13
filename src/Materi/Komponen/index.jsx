import React from "react";
import ClassComponent from "./pembahasan/ClassComponent";
import FunctionalComponent from "./pembahasan/FunctionalComponent";

export class Komponen extends React.Component {

    render() {
        return (
            <div>
                <ClassComponent nama="Dede Nurdiyanto" />
                <FunctionalComponent nama="React JS" />
            </div>
        )
    }
}