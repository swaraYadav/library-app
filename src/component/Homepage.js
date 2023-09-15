import HeaderPage from "./Headerpage";
import Loginstudent from "./Loginstudent";
import Studentlist from "./Studentlist";

function Homepage(){
    return(
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid logo">
                    <a class="navbar-brand" href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReYowpSqw9MmIDpFstpD6vW5CtsvEGyUjvig&usqp=CAU"></img></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav btnh">
                        <div className="btn-one">
                                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Login
                                </button>
                                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                    <form>
                                            <div class="mb-3">
                                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                            </div>
                                            <div class="mb-3">
                                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                                <input type="password" class="form-control" id="exampleInputPassword1"/>
                                            </div>
                                           
                                            </form>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                  
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary">Login</button>
                                    </div>
                                    </div>
                                </div>
                                </div>
                        </div>
                        <div className="btn-two">
                                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Sign Up
                                </button>
                                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="model-v" id="exampleModalLabel">Login form</h5>
                                        <input type="text" placeholder="Enter Mobile No or Email address"/>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                   
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary">Create account</button>
                                    </div>
                                    </div>
                                </div>
                                </div>
                        </div>
                    </div>
                    </div>
                </div>
             </nav>
             <HeaderPage></HeaderPage>
             <Loginstudent></Loginstudent>
             <Studentlist></Studentlist>
        </div>
    )
}
export default Homepage;