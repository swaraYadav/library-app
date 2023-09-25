import LoginHeader from "./LoginHeader";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";

function Booklist(){
    const books =[
        {name:"English" ,Author:"William shakspear"},
        {name:"Panchtantra" ,Author:"Vishnusharma"},
        {name:"Bagwat Geeta" ,Author:"Bedvyas ji"},
        {name:"And then one day" ,Author:"Nasiruddin khan"},
        {name:"Babur Nama",Author:"Babur"}
    ]
    return(
        <>
        <LoginHeader/>
           <table className="table">
            <thead>
                <tr>
                    <th> Name</th>
                    <th> Author</th>
                    <th> Action</th>
                </tr>
                </thead>
                {
                    books.map((items)=>{
                    return(
                    
                <tbody>
                    <tr>
                    <td>{items.name}</td>
                    <td>{items.Author}</td>
                    <td>
                    <button><FontAwesomeIcon icon={faEye} /></button>
                        <button>Assign</button>
                        <button><FontAwesomeIcon icon={faPen} /></button>
                        <button><FontAwesomeIcon icon={faTrash} /></button>
                    </td>
                    </tr>
                 </tbody>
                 )
                })
                }
           </table>
        </>
    )
}
export default Booklist;