import LoginHeader from "../LoginHeader";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
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
        <div className="container-fluid">
            <LoginHeader />
            <hr></hr>
            <table className="table table-responsive">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Roll No</th>
                        <th>Class</th>
                        <th className="action text-center">Action</th>
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
                                    <td className="action text-center">
                                        <button type="button" className=" btn"><FontAwesomeIcon icon={faEye} />
                                            <span className="tooltip-text">View</span>
                                        </button>
                                        <button type="button" className="btn "><FontAwesomeIcon icon={faPlus} />
                                            <span className="tooltip-text">Assign</span>
                                        </button>
                                        <button type="button" class="btn " data-bs-toggle="modal" data-bs-target="#editModal">
                                            <FontAwesomeIcon icon={faPen} />
                                            <span className="tooltip-text">Edit</span>
                                        </button>
                                        <button type="button" class="btn " data-bs-toggle="modal" data-bs-target="#exampleModal">
                                            <FontAwesomeIcon icon={faTrash} />
                                            <span className="tooltip-text">Delete</span>
                                        </button>

                                    </td>
                                </tr>
                            </tbody>
                        )
                    })
                }
            </table>
            <Deletestudent />
            <Studentmodel />
        </div>
    )
}
export default Studentlist;