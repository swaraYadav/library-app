
function RegistrationForm(){
    return(
        <div class="modal fade" id="reg-form-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <form>
                        <div className="container-fluid closebtn">
                            <h4 class="model-v" id="exampleModalLabel">Resigter</h4>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                         </div>
                        <br/>
                            <div class="mb-3">
                                <label class="form-label">Enter Name</label>
                                <input type="Name" class="form-control" id="exampleName"/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Surname</label>
                                <input type="text" class="form-control" id="exampleInputPassword1"/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1"/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1"/>
                            </div>
                    </form>
                </div>
            
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Signup</button>
                </div>
                </div>
            </div>
        </div>
    )}

    export default RegistrationForm;