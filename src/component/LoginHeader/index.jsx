import { useState } from "react";

function LoginHeader() {
    const [active, setActive] = useState("true")
    function changecolor() {
        setActive(active);
    }

    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid logo" >
                    <a class="navbar-brand" href="/"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReYowpSqw9MmIDpFstpD6vW5CtsvEGyUjvig&usqp=CAU"></img></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav menubar">
                            <a class="nav-link" href="Booklist" onClick={changecolor}
                                style={{ color: active ? "red" : "white" }}
                            >Books</a>
                            <a class="nav-link" href="student">Student</a>
                            <a class="nav-link" href="Assignpage">Assign Books</a>
                        </div>
                    </div>
                    <div class="nav-loginname">
                        <a class="nav-link " href="#">Swara Vipin yadav</a>
                        <a className="nav-link" href="#">8726486970</a>
                    </div>
                </div>
            </nav>

        </>
    )
}
export default LoginHeader;