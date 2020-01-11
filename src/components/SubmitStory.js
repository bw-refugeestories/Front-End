import React, { useState } from "react";
import axios from "axios";
import { withFormik, Form as MyForm, Field } from "formik";
import * as Yup from "yup";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
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
  const [story, setStory] = useState({
    storyName: "",
    storyContent: "",
    image: ""
  });
  const [isFailed, setIsFailed] = useState(false);

  console.log({ values });
  console.log({ touched });
  console.log({ errors });
  console.log({ status });

  // const handleUpdate = e => {
  //   const { name, value } = e.target;
  //   setStory({ ...story, [name]: value });
  // };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(story);
    axios
      .post("https://refugees-lambda.herokuapp.com/pendingStories/add", story)
      .then(res => {
        setIsFailed(false);
        history.push("/");
      })
      .catch(err => {
        console.error(err);
        setIsFailed(true);
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.blue}></Avatar>
        <Typography component="h1" variant="h5">
          Tell us your story
        </Typography>
        <MyForm className={classes.form} noValidate>
          <Field
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Name of Story"
            name="storyName"
            autoFocus
          />
          <Field
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
          {isFailed ? (
            <p className="failed">Submitting story failed. Please try again!</p>
          ) : null}
        </MyForm>
      </div>
    </Container>
  );
};

const FormWithFormik = withFormik({
  mapPropsToValues(props) {
    return {
      storyName: props.storyName || "",
      storyContent: props.storyContent || "",
      image: props.image || ""
    };
  },
  validationSchema: Yup.object().shape({
    storyName: Yup.string()
      .min(10, "Too short!")
      .max(90, "Too long!")
      .required("Story name is required"),
    storyContent: Yup.string()
      .min(50, "Too short!")
      .max(5000, "Too long!")
      .required("Story content is required"),
    image: Yup.string().url("Please provide a valid image url")
  }),
  handleSubmit(values, { setStatus, resetForm }) {
    axios
      .post("https://refugees-lambda.herokuapp.com/pendingStories/add", values)
      .then(res => {
        console.log("Then", res);
        // setIsFailed(false);
        // history.push("/");
      })
      .catch(err => {
        console.error(err);
        // setIsFailed(true);
      });
  }
})(SubmitStory);

export default FormWithFormik;
