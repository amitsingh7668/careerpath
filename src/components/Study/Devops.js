import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HotelIcon from '@material-ui/icons/Hotel';
import RepeatIcon from '@material-ui/icons/Repeat';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import GitHubIcon from '@material-ui/icons/GitHub';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function Devops() {
  const classes = useStyles();

  return (
    
    <div className="cards">
      <h1>DEVOPS</h1>
    <Timeline align="alternate">
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            1
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
          <FontAwesomeIcon icon="coffee" fixedWidth />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={5} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Why Devops?
            </Typography>
            <Typography>Because you need strength</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            2
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
          <FontAwesomeIcon icon="coffee" fixedWidth />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={5} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Plan for an Application Developement
            </Typography>
            <Typography>Think of a small app as a starter for you Developement ex:- Todo List , calender</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            3
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={5} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Learn Developement
            </Typography>
            <Typography>Programming languages and frameworks, like java springboot, Python Flask, react</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
      <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            4
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined">
            <GitHubIcon />
          </TimelineDot>
          <TimelineConnector className={classes.secondaryTail} />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={5} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Code Repositories
            </Typography>
            <Typography>Store your code on cloud for easy accessbility , like Github , Bitbucket </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>




      <TimelineItem>
      <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            5
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <RotateLeftIcon />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={5} className={classes.paper}>
            <Typography variant="h6" component="h1">
              CI/CD Tool
            </Typography>
            <Typography>With the continuous method of software development, you continuously build, test, and deploy iterative code changes.It helps to ease devlopers life ex:- jenkins
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
      <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            6
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <RepeatIcon />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={5} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Testing
            </Typography>
            <Typography>Software testing in the DevOps world requires an automated test process that provides feedback at every build and change</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
      <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            7
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <RepeatIcon />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={5} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Deployement
            </Typography>
            <Typography>Time to make it available for everone to Use ex:- physical server , Docker container, Kube, Tomcat</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
      <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            8
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary">
            <RepeatIcon />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={5} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Monitor
            </Typography>
            <Typography>You need to keep an eye on your application , that how it behaves in Live environment. If there is any downtime ,
              Tools which helps here are like  ex:- ELK stack , splunk 
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>


    </Timeline>
    </div>
  );
}
