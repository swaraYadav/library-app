import LoginHeader from "./LoginHeader";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Homepage(){
    return(
        <div className="container-fluid">
        <LoginHeader/>
        <div className="image text-center container-fluid">
                <img src="https://media.istockphoto.com/id/1440606893/photo/young-couple-talking-about-books-while-buying-a-novel.jpg?s=1024x1024&w=is&k=20&c=2XCz-TkSVcWPLCX41MM8AjBJZBqHyf-3kDsy1l9HgOU=" alt="logo"/>
             </div>
        </div>
    )
}
export default Homepage;