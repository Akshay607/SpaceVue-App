import react, { useState,useEffect }  from "react"; 
import { Container, Paper, Typography, TextField, Button } from '@mui/material';
import { useNavigate } from "react-router-dom";



const LoginPage = () => {
    const UserID ='Admin';
    const UserPassword='1234';
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const [isValidCred, setIsValidCred] = useState(0);
  const handleLogin = () => {
    if(username==UserID && UserPassword==password){
        setIsLogin(true);
        setIsValidCred(1);
        navigate("/dashboard");

    }else{
        setIsLogin(false);
        setIsValidCred(-1);
    }
 
  }
  useEffect(()=>{
      setIsValidCred(0);
    },[username,password])

  return (
    <Container component="main" maxWidth="xs"  style={{ height: '100vh',  display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Paper elevation={3} style={{ padding: 16, display: 'flex',width:"300px", flexDirection: 'column', alignItems: 'center'}}>
        <Typography variant="h5">Login</Typography>
        {isValidCred==-1 && <Typography color="red" fontSize="12px">Invalid UserName/Password </Typography>}
         <TextField
          label="Username"
          margin="normal"
          fullWidth
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          margin="normal"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
         <Button variant="contained" color="primary" onClick={handleLogin} style={{ marginTop: 16 }}>
          Login
        </Button>
      </Paper>
    </Container>
  );
};

export default LoginPage;