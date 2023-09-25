// import HeaderPage from "./Headerpage";
// import LoginHeader from "./LoginHeader";
// import Studentlist from "./Studentlist";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";

function Navbar(){
    return(
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid logo">
                    <a class="navbar-brand" href="#">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReYowpSqw9MmIDpFstpD6vW5CtsvEGyUjvig&usqp=CAU"></img>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav btnh">
                        <div className="btn-one">
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#login-form-modal">
                            Login
                            </button>
                                
                        </div>
                        <div className="btn-two">
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#reg-form-modal">
                            Sign Up
                            </button>
                        </div>
                    </div>
                    </div>
                </div>
             </nav>
             <LoginForm/>
             <RegistrationForm/>
        </div>
    )
}
export default Navbar;