import LoginHeader from "../LoginHeader";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function Booklist() {
    const books = [
        { name: "English", Author: "William shakspear" },
        { name: "Panchtantra", Author: "Vishnusharma" },
        { name: "Bagwat Geeta", Author: "Bedvyas ji" },
        { name: "And then one day", Author: "Nasiruddin khan" },
        { name: "Babur Nama", Author: "Babur" }
    ]
    return (
        <div className="container-fluid">
            <LoginHeader />
            <hr />
            <table className="table">
                <thead>
                    <tr>
                        <th> Name</th>
                        <th> Author</th>
                        <th colspan="2"> Action</th>
                    </tr>
                </thead>
                {
                    books.map((items) => {
                        return (

                            <tbody>
                                <tr>
                                    <td>{items.name}</td>
                                    <td>{items.Author}</td>
                                    <td colspan="2" className="action">
                                        <button type="button" className=" btn"><FontAwesomeIcon icon={faEye} />
                                            <span className="tooltip-text">View</span>
                                        </button>
                                        <button type="button" className="btn"><FontAwesomeIcon icon={faPlus}/>
                                            <span className="tooltip-text">Assign</span>
                                        </button>
                                        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#editModal">
                                            <FontAwesomeIcon icon={faPen} />
                                            <span className="tooltip-text">Edit</span>
                                        </button>
                                        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
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
        </div>
    )
}
export default Booklist;