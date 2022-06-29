import React, { useRef, useState } from "react";
import {
  EmailOutlined,
  LockOpenOutlined,
  FaceOutlined,
  ScreenLockLandscapeOutlined,
  PhoneAndroidOutlined,
  Visibility,
  VisibilityOff,
} from "@material-ui/icons";
import "./account.scss";
const Account = () => {
  //login register control
  const switcher = useRef();
  const switchLogin = useRef();
  const switchRegister = useRef();

  const switchTab = (tab) => {
    switch (tab) {
      case "login":
        switcher.current.classList.add("switch-to-left");
        switcher.current.classList.remove("switch-to-right");

        switchLogin.current.classList.add("login-container-switched");
        switchRegister.current.classList.remove("register-container-switched");

        break;
      case "register":
        switcher.current.classList.add("switch-to-right");
        switcher.current.classList.remove("switch-to-left");

        switchRegister.current.classList.add("register-container-switched");
        switchLogin.current.classList.remove("login-container-switched");

        break;
      default:
        break;
    }
  };
  //password visibility control
  const [visible, setVisible] = useState(false);
  //
  //

  return (
    <>
      <div className="account-container">
        <div className="user-account-container">
          <div className="login-signUp-button">
            <div className="logiin-signUp-button-action">
              <p className="login-button" onClick={() => switchTab("login")}>
                LOGIN
              </p>
              <p
                className="singup-button"
                onClick={() => switchTab("register")}
              >
                REGISTER
              </p>
            </div>
            <div className="switch-to-left" ref={switcher}></div>
          </div>
          {/*  */}
          <div
            className="login-container login-container-switched"
            ref={switchLogin}
          >
            <form className="login-form">
              <div className="input-container">
                <EmailOutlined />
                <input type="email" name="emial" placeholder="Email" required />
              </div>
              <div className="input-container">
                <LockOpenOutlined />
                <input
                  type={!visible ? "password" : "text"}
                  name="password"
                  placeholder="Password"
                  required
                />
                <div
                  className="login-visibility-conrtol"
                  onClick={() => setVisible(!visible)}
                >
                  {!visible ? <VisibilityOff /> : <Visibility />}
                </div>
              </div>
              <p className="forget-password">Forget Password ?</p>
              <div className="login-button-container">
                <button type="submit" className="login-button">
                  LOGIN
                </button>
              </div>
            </form>
          </div>
          {/*  */}
          <div
            className="register-container register-container-switched"
            ref={switchRegister}
          >
            <form className="register-form">
              <div className="register-input-container">
                <FaceOutlined />
                <input type="text" name="name" placeholder="Name" required />
              </div>
              <div className="register-input-container">
                <EmailOutlined />
                <input type="email" name="email" placeholder="Email" required />
              </div>
              <div className="register-input-container">
                <PhoneAndroidOutlined />
                <input
                  type="number"
                  name="password"
                  placeholder="(number with country code)"
                  required
                />
              </div>
              <div className="register-input-container">
                <ScreenLockLandscapeOutlined />
                <input
                  type={!visible ? "password" : "text"}
                  name="password"
                  placeholder="Password"
                  required
                />
                <div
                  className="register-visibility-conrtol"
                  onClick={() => setVisible(!visible)}
                >
                  {!visible ? <VisibilityOff /> : <Visibility />}
                </div>
              </div>

              <div className="Register-button-container">
                <button type="submit" className="register-button">
                  REGISTER
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Account;
