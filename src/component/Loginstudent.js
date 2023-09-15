function Loginstudent(){
    return(
        <>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid logo">
                <a class="navbar-brand" href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReYowpSqw9MmIDpFstpD6vW5CtsvEGyUjvig&usqp=CAU"></img></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav list">
                    <a class="nav-link active" aria-current="page" href="#">Books</a>
                    <a class="nav-link" href="#">Student</a>
                    <a class="nav-link" href="#">check Assigned Books</a>
                </div>
                </div>
                <div class="navbar-nav list">
                    <a class="nav-link" href="#">Swara Vipin yadav</a>
                </div>
            </div>
        </nav>
        <div className="table text-center tblh">
           <table className="table">
            <thead>
                <tr>
                    <th> Name</th>
                    <th> Author</th>
                    <th> Action</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                <td>English</td>
                <td>Dr. gupta</td>
                <td>
                    <button>View</button>
                    <button>Assign</button>
                    <button>Delete</button>
                    <button>Edit</button>

                </td>
                </tr>
                <tr>
                <td>English</td>
                <td>Dr. gupta</td>
                <td>
                    <button>View</button>
                    <button>Assign</button>
                    <button>Delete</button>
                    <button>Edit</button>

                </td>
                </tr>
                <tr>
                <td>English</td>
                <td>Dr. gupta</td>
                <td>
                    <button>View</button>
                    <button>Assign</button>
                    <button>Delete</button>
                    <button>Edit</button>

                </td>
                </tr>
                <tr>
                <td>English</td>
                <td>Dr. gupta</td>
                <td>
                    <button>View</button>
                    <button>Assign</button>
                    <button>Delete</button>
                    <button>Edit</button>

                </td>
                </tr>
            </tbody>
           </table>
        </div>
        </>
    )
}
export default Loginstudent;