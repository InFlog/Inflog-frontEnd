import React from 'react'

import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import  {Link} from "react-router-dom"; 
import Menu from "./Menu";
import TrendingPost from "./TrendingPost";
import InfluencerCategory from "./InfluencersCategory";
import ServicesEcommerce from "./ServicesEcommerce";



function Copyright() {
  return (
    
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Inflog Group
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3, 4];


export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      
      <main>
      
        {/* Hero unit */}
        <Menu />
        <TrendingPost />
        <ServicesEcommerce />
        <InfluencerCategory />
        
      </main>
      {/* Footer */}

      <footer className={classes.footer}>
       
   
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}

/* getBlogPost = () => {
  axios.get(`http://localhost:1000/brand`);
  .then((response) => {
    const data = response.data;
    console.log('Data has been recieved');

  }
  
  )
}
 */



// var storage = multer.diskStorage({ //multers disk storage settings
//   destination: function (req, file, cb) {
//       cb(null, './')
//   },
//   filename: function (req, file, cb) {
//       var datetimestamp = Date.now();
//       cb(null, file.originalname)
//       // cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1])
//   }
// });

// var upload = multer(
//   { storage: storage }
// ).single('file');
// /** API path that will upload the files */
// axios.get(`http://localhost:1000/brand`);
// app.post('/upload', function (req, res) {
//   upload(req, res, function (err) {
//       console.log('hi')
//       console.log(req.file)
//       if (req.file) {

//           if (err) {
//               res.json({ error_code: 1, err_desc: err });
//               return;
//           }
//           /** Multer gives us file info in req.file object */
//           if (!req.file) {
//               res.json({ error_code: 1, err_desc: "No file passed" });
//               return;
//           } else {

//               res.json(200);
//           };
//       } else {
//           res.json({ error_code: 1, err_desc: "No file passed" });
//           return;
//       }
//   })
// });
// const csv = require("fast-csv");
// var multer = require('multer');