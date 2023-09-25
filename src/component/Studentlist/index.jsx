import LoginHeader from "../LoginHeader";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Studentmodel from "./Studentmodel";
import Deletestudent from "./Deletestudent";
function Studentlist() {

    const Details = [
        { Name: "Sapna", Rollno: "62", class: "12th" },
        { Name: "Ankit", Rollno: "27", class: "10th" },
        { Name: "Ashu", Rollno: "60", class: "11th" },
        { Name: "Aman", Rollno: "57", class: "9th" },
        { Name: "Suraj", Rollno: "67", class: "10th" },
        { Name: "Samita", Rollno: "40", class: "12th" }

    ];
    return (
        <>
            <LoginHeader />
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Roll No</th>
                        <th>Class</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {
                    Details.map((items) => {
                        return (
                            <tbody>
                                <tr>
                                    <td>{items.Name}</td>
                                    <td>{items.Rollno}</td>
                                    <td>{items.class}</td>
                                    <td>
                                        <button><FontAwesomeIcon icon={faEye} /></button>
                                        <button>Assign</button>
                                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <FontAwesomeIcon icon={faTrash} />
                                        </button>
                                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editModal">
                                            <FontAwesomeIcon icon={faPen} />
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        )
                    })
                }
            </table>
            <Studentmodel />
            <Deletestudent />
        </>
    )
}
export default Studentlist;