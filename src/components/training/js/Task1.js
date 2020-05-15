import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { Typography } from "@material-ui/core";
import { Container } from "react-bootstrap";


const useStyles = makeStyles((theme) => ({

    rootContainer:{
        paddingTop:theme.spacing(3),
        padding: theme.spacing(1),
        margin: theme.spacing(0),
        marginTop:theme.spacing(2),
    },

    table: {
        
    },
    formControl: {
        margin: theme.spacing(0),
    },
    selectEmpty: {
        marginTop: theme.spacing(0),
    },
}));


function Task1() {
    const classes = useStyles();
    return (
       <Container className = {classes.rootContainer}>
            <Typography variant="h5"> 1 - Use of react Component </Typography>
        <TableContainer component={Paper}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell scope="col"> Project Name </TableCell>
                        <TableCell scope="col"> Task Name </TableCell>
                        <TableCell scope="col"> Task Type </TableCell>
                        <TableCell scope="col"> Desc </TableCell>
                        <TableCell scope="col"> Assignee </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell scope="row">1</TableCell>
                        <TableCell>Android</TableCell>
                        <TableCell>
                            <SelectControl/>
                        </TableCell>
                        <TableCell>Welbuild application technician Android application </TableCell>
                        <TableCell>Prafull</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell scope="row">2</TableCell>
                        <TableCell>IOS </TableCell>
                        <TableCell>
                            <SelectControl/>
                        </TableCell>
                        <TableCell>Welbuild application technician IOS application </TableCell>
                        <TableCell>Nitin</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell scope="row">3</TableCell>
                        <TableCell>WEB</TableCell>
                        <TableCell>
                            <SelectControl/>
                        </TableCell>
                        <TableCell>Welbuild application technician web app</TableCell>
                        <TableCell>Sakshi</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell scope="row">3</TableCell>
                        <TableCell>NODE</TableCell>
                        <TableCell>
                            <SelectControl/>
                        </TableCell>
                        <TableCell>Welbuild application technician Node server</TableCell>
                        <TableCell>Harish </TableCell>
                    </TableRow>

                </TableBody>
            </Table>
        </TableContainer>
        </Container>
    );
}


/**
 * to draw select control
 */
function SelectControl() {
    const classes = useStyles();
    return (
        <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel htmlFor="outlined-age-native-simple">Task</InputLabel>
            <Select
                native
                label="task"
                inputProps={{
                    name: 'task',
                    id: 'outlined-age-native-simple',
                }}
            >
                <option aria-label="None" value="" />
                <option >Frontend</option>
                <option >Backend</option>
                <option >Testing</option>
            </Select>
        </FormControl>
    )
}


export default Task1;

