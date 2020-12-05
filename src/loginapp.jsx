import React from "react";
import { Login, Register } from "./component/login/index";
import auth from './value';
export default class LoginApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogginActive: true
    };
  }

  componentDidMount() {
    //Add .right by default
    // this.rightSide.classList.add("right");
  }

  changeState() {
    const { isLogginActive } = this.state;

    // if (isLogginActive) {
    //   this.rightSide.classList.remove("right");
    //   this.rightSide.classList.add("left");
    // } else {
    //   this.rightSide.classList.remove("left");
    //   this.rightSide.classList.add("right");
    // }
    this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }));
  }

  render() {
    const { isLogginActive } = this.state;
    const current = isLogginActive ? "Register" : "Login";
    const currentActive = isLogginActive ? "login" : "register";
    return (
      <div className="App">
        <div className="login">
          <div className="container" style={{display:"inline-block",marginLeft:"300px",marginRight:"100px"}} ref={ref => (this.container = ref)}>
            {isLogginActive && (
              <Login containerRef={ref => (this.current = ref)} />
            )}
            {!isLogginActive && (
              <Register containerRef={ref => (this.current = ref)} />
            )}
            
          </div>
          <div style={{display:"flex",width:"200px",marginRight:"250px"}}  >
                <button style={{width:"200px",height:"500px",backgroundColor:"rgb(28, 27, 27)",fontSize:"200%", borderColor:"whitesmoke",borderSize:"10px", color:"white",overflow:"visible"}} onClick={()=>{this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }))}}>
                  {current}
                </button>
          </div>
         
        </div>
      </div>
    );
  }
}

