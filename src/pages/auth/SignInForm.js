// import React, { useState } from "react";
// import axios from "axios";

// import Form from "react-bootstrap/Form";
// import Alert from "react-bootstrap/Alert";
// import Button from "react-bootstrap/Button";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";
// import Image from "react-bootstrap/Image";
// import Container from "react-bootstrap/Container";

// import { Link, useHistory } from "react-router-dom";

// import styles from "../../styles/SignInUpForm.module.css";
// import btnStyles from "../../styles/Button.module.css";
// import appStyles from "../../App.module.css";
// import { useSetCurrentUser } from "../../contexts/CurrentUserContext";
// import { useRedirect } from "../../hooks/useRedirect";

// function SignInForm() {
//   const setCurrentUser = useSetCurrentUser();
//   useRedirect("loggedIn");

//   const [signInData, setSignInData] = useState({
//     username: "",
//     password: "",
//   });
//   const { username, password } = signInData;

//   const [errors, setErrors] = useState({});

//   const history = useHistory();
//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const { data } = await axios.post("/dj-rest-auth/login/", signInData);
//       setCurrentUser(data.user);
//       history.goBack();
//     } catch (err) {
//       setErrors(err.response?.data);
//     }
//   };

//   const handleChange = (event) => {
//     setSignInData({
//       ...signInData,
//       [event.target.name]: event.target.value,
//     });
//   };

//   return (
//     <Row className={styles.Row}>
//       <Col className="my-auto p-0 p-md-2" md={6}>
//         <Container className={`${appStyles.Content} p-4 `}>
//           <h1 className={styles.Header}>sign in</h1>
//           <Form onSubmit={handleSubmit}>
//             <Form.Group controlId="username">
//               <Form.Label className="d-none">Username</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Username"
//                 name="username"
//                 className={styles.Input}
//                 value={username}
//                 onChange={handleChange}
//               />
//             </Form.Group>
//             {errors.username?.map((message, idx) => (
//               <Alert key={idx} variant="warning">
//                 {message}
//               </Alert>
//             ))}

//             <Form.Group controlId="password">
//               <Form.Label className="d-none">Password</Form.Label>
//               <Form.Control
//                 type="password"
//                 placeholder="Password"
//                 name="password"
//                 className={styles.Input}
//                 value={password}
//                 onChange={handleChange}
//               />
//             </Form.Group>
//             {errors.password?.map((message, idx) => (
//               <Alert key={idx} variant="warning">
//                 {message}
//               </Alert>
//             ))}
//             <Button
//               className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`}
//               type="submit"
//             >
//               Sign in
//             </Button>
//             {errors.non_field_errors?.map((message, idx) => (
//               <Alert key={idx} variant="warning" className="mt-3">
//                 {message}
//               </Alert>
//             ))}
//           </Form>
//         </Container>
//         <Container className={`mt-3 ${appStyles.Content}`}>
//           <Link className={styles.Link} to="/signup">
//             Don't have an account? <span>Sign up now!</span>
//           </Link>
//         </Container>
//       </Col>
//       <Col
//         md={6}
//         className={`my-auto d-none d-md-block p-2 ${styles.SignInCol}`}
//       >
//         <Image
//           className={`${appStyles.FillerImage}`}
//           src={"https://codeinstitute.s3.amazonaws.com/AdvancedReact/hero.jpg"}
//         />
//       </Col>
//     </Row>
//   );
// }

// export default SignInForm;


import React, { useState } from "react";
import styles from "../../styles/SignInForm.module.css";
import logoImage from "../../assets/logo.jpg";
import btnStyles from "../../styles/Button.module.css";
// import shadowStyles from "../../App.module.css";
import { Form, Button, Container, Alert } from 'react-bootstrap';
// /
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
// import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
// import Alert from "react-bootstrap/Alert";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { useSetCurrentUser } from "../../contexts/CurrentUserContext";
import { useRedirect } from "../../hooks/useRedirect";
// import { setTokenTimestamp } from "../../utils/utils";

const LoginForm = () => {
  const setCurrentUser = useSetCurrentUser();
  useRedirect("loggedIn");

  const [signInData, setSignInData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = signInData;

  const [errors, setErrors] = useState({});

  const history = useHistory();
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await axios.post("/dj-rest-auth/login/", signInData);
      setCurrentUser(data.user);
      // setTokenTimestamp(data);
      history.goBack();
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  const handleChange = (event) => {
    setSignInData({
      ...signInData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Container className={styles.Container}>
      {/* <Container className={`bg-white col-md-8 ${shadowStyles.Shadow}`}> */}
      <Row className="p-4 mt-5 justify-content-md-center">
        <Col className="text-center">
          <Image className={styles.LogoImage} src={logoImage} />
          <h1 className="mb-3">Sign In</h1>
          <Row className="justify-content-center">
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="username" className="text-left mb-2">
                <Form.Label className="d-none">Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  name="username"
                  value={username}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors.username?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}

              <Form.Group controlId="password" className="text-left mb-2">
                <Form.Label className="d-none">Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                />
              </Form.Group>
              {errors.password1?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}

              <br />
              <Button
                className={btnStyles.Btn}
                variant="primary"
                aria-label="Click here to log in!"
                type="submit"
              >
                Signin!
              </Button>
              {errors.non_field_errors?.map((message, idx) => (
                <Alert key={idx} variant="warning" className="mt-3">
                  {message}
                </Alert>
              ))}
            </Form>
          </Row>
          <Row className="mt-4 justify-content-center">
            <p>
              Don't have an account yet?{" "}
              <span>
                <Link
                  className={styles.Link}
                  aria-label="Click here to sign up instead"
                  to="/signup"
                >
                  Sign up
                </Link>
              </span>{" "}
              instead!
            </p>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;
