// import { ReactNode } from "react";

import Employee from "../interfaces/Employee";

type ProfileCardProps = {
    employee: Employee,
    buttonText?: string,
    children: JSX.Element | string | null
};

const ProfileCard = ({ employee, buttonText = 'Aceptar', children }: ProfileCardProps) => {

    let disponible = <p>NO DISPONIBLE</p>;
    if (employee.available) disponible = <p>DISPONIBLE</p>;

    return (
        <div>
            <h3>{employee.name} {employee.surname}</h3>
            <p>Email: {employee.email}</p>
            <p>Departamento: {employee.department}</p>
            <p>{employee.available ? 'DISPONIBLE' : 'NO DISPONIBLE'}</p>
            {disponible}
            <article>{children}</article>
            <button>{buttonText}</button>
        </div>
    );

}

export default ProfileCard;