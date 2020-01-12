import React from "react";
import axios from "axios";
import { withFormik, Form as MyForm, Field } from "formik";
import * as Yup from "yup";
import {
  Avatar,
  Button,
  CssBaseline,
  Typography,
  makeStyles,
  Container
} from "@material-ui/core";
import { Alert, AlertTitle } from "@material-ui/lab";
import { TextField } from "formik-material-ui";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  title: {
    marginBottom: theme.spacing(3)
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const SubmitStory = ({ values, errors, touched, status, history }) => {
  const classes = useStyles();
  // const [story, setStory] = useState({
  //   storyName: "",
  //   storyContent: "",
  //   image: ""
  // });
  // const [isFailed, setIsFailed] = useState(false);

  // const handleUpdate = e => {
  //   const { name, value } = e.target;
  //   setStory({ ...story, [name]: value });
  // };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   console.log(story);
  //   axios
  //     .post("https://refugees-lambda.herokuapp.com/pendingStories/add", story)
  //     .then(res => {
  //       setIsFailed(false);
  //       history.push("/");
  //     })
  //     .catch(err => {
  //       console.error(err);
  //       setIsFailed(true);
  //     });
  // };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.blue}></Avatar>
        <Typography className={classes.title} component="h1" variant="h5">
          Tell us your story
        </Typography>
        {status ? (
          <Alert severity="success" variant="filled">
            <AlertTitle>{status.message}</AlertTitle>
            Your story is pending for admin approval. When approved, it will
            appear on our stories list in homepage.
          </Alert>
        ) : (
          <MyForm className={classes.form} noValidate>
            <Field
              component={TextField}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Name of Story"
              name="storyName"
              autoFocus
            />
            <Field
              component={TextField}
              rows="12"
              variant="outlined"
              margin="normal"
              required
              fullWidth
              multiline
              name="storyContent"
              label="Story Content"
              type="text"
            />
            <Field
              component={TextField}
              variant="outlined"
              margin="normal"
              fullWidth
              label="Optional URL for image"
              name="image"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Submit Story
            </Button>
            {/* {isFailed ? (
            <p className="failed">Submitting story failed. Please try again!</p>
          ) : null} */}
          </MyForm>
        )}
      </div>
    </Container>
  );
};

const FormWithFormik = withFormik({
  mapValuesToPayload({ history }) {
    return {
      history: history
    };
  },
  mapPropsToValues(props) {
    return {
      storyName: props.storyName || "",
      storyContent: props.storyContent || "",
      image: props.image || ""
    };
  },
  validationSchema: Yup.object().shape({
    storyName: Yup.string()
      .min(10, "Too short! Minimum 10 characters")
      .max(90, "Too long! Maximum 90 characters")
      .required("Story name is required"),
    storyContent: Yup.string()
      .min(50, "Too short! Minimum 50 characters")
      .max(5000, "Too long! Maximum 5000 characters")
      .required("Story content is required"),
    image: Yup.string().url("Please provide a valid image url")
  }),
  handleSubmit(values, { setStatus, resetForm }) {
    axios
      .post("https://refugees-lambda.herokuapp.com/pendingStories/add", values)
      .then(res => {
        console.log("Then", res);
        resetForm();
        setStatus(res.data);
        // setIsFailed(false);
        // props.history.push("/");
      })
      .catch(err => {
        console.error(err);
        // setIsFailed(true);
      });
  }
})(SubmitStory);

export default FormWithFormik;
