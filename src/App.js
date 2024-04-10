import "./App.css";
import { useState } from "react";
import Header from "./Header";
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";


function App() {
  const navigate = useNavigate();
 
  const array = [
    { Name: "Rupu", Password: 12345 },
    { Name: "Shalom", Password: 54321 },
  ];

  const [IsLogin, setIsLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [Input, setInput] = useState({
    Name: "",
    Password: "",
  });
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const HandlemyLogin = (key, text) => {
    const _newarr = { ...Input };
    _newarr[key] = text;
    setInput({ ..._newarr });
  };

  const handleauthentication = () => {
    array.find((item, index) => {
      if (
        item?.Name?.toLowerCase() === Input?.Name?.toLowerCase() &&
        item?.Password == Input.Password
      ) {
        alert("success");
        setIsLogin(true);
        setInput({
          ...Input,
          Name: "",
          Password: "",
        });
        navigate("/Maincomponent");
      } else if (index == array.length - 1) {
        setInput({
          ...Input,
          Name: "",
          Password: "",
        });
        alert("invalid");
      } else {
        return;
      }
    });
  };

  return (
    <>
      <Header />

      <div className="Login">
        <div className="Logform">
          <div
            style={{
              textAlign: "center",
              padding: "0 0 15px 0",
            }}
          >
            <h1>Login</h1>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <TextField
              value={Input.Name}
              onChange={(event) => HandlemyLogin("Name", event.target.value)}
            />
            <br />
            <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                value={Input.Password}
                onChange={(event) =>
                  HandlemyLogin("Password", event.target.value)
                }
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            <Button
              variant="contained"
              onClick={() => {
                handleauthentication();
              }}
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
