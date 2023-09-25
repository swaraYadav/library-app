import { useState } from "react";

function LoginForm(){
    
    return(
            <div class="modal fade" id="login-form-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                    <form>
                    <div className="container closebtn">
                            <h4 class="model-v" id="exampleModalLabel">Login</h4>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                         </div><br/>
                            <div class="mb-3">
                                <label for="exampleInputEmail1" class="form-label">Email address</label>
                                <input type="email"name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input type="password" name="password"class="form-control" id="exampleInputPassword1"/>
                            </div>
                        
                            </form>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary log-button" ><a href="Homepage">Login</a></button>
                    </div>
                
                   
                    </div>
                </div>
            </div>
    )}

    export default LoginForm;