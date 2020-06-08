import React ,{useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuList from '@material-ui/core/MenuList';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LaptopChromebookIcon from '@material-ui/icons/LaptopChromebook';
import ExamSymbol from '@material-ui/icons/EmojiSymbols'
import Pencil from '@material-ui/icons/Create';
import Place from '@material-ui/icons/Place';
import { red } from '@material-ui/core/colors';
import { voilet } from '@material-ui/core/colors';
import NewReleases from '@material-ui/icons/NewReleases';

import Home from '../../home/js/Home';
import Training from '../../training/js/Training';
import About from '../../about/js/About';
import Education from '../../edu/js/Education.tsx';
import Aptitude from "../../apti/Aptitude";





const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 0),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(0),
        alignItems: 'center',

    },
    link: {
        textDecoration: 'none',
        color: theme.palette.text.primary
    },
    span: {
        color: red
    },
    listItem:{
        '&:hover':{
            color : 'red'
        },
       
    },
    active:{
        backgroundColor:'red'
    }
}));

export default function ResponsiveDrawer() {
    const classes = useStyles();
    const theme = useTheme();
    const [selectedIndex,setSelectedIndex] = useState(0);
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleListItemSeleted =(event,index) =>{
        setSelectedIndex(index)
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
   
        
            <div className={classes.root}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    className={clsx(classes.appBar, {
                        [classes.appBarShift]: open,
                    })}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            className={clsx(classes.menuButton, {
                                [classes.hide]: open,
                            })}
                        >
                            <MenuIcon />
                        </IconButton>
                        <div>
                            <Typography variant="h4">
                                <span className={classes.span}>R</span>ind<span className={classes.span}>M</span>ind
                            </Typography>
                            <Typography variant="subtitle1">
                                Mindful Technocrats
                            </Typography>

                        </div>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    className={clsx(classes.drawer, {
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    })}
                    classes={{
                        paper: clsx({
                            [classes.drawerOpen]: open,
                            [classes.drawerClose]: !open,
                        }),
                    }}
                >
                    <div className={classes.toolbar}>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                        </IconButton>
                    </div>
                    <Divider />
                    <Link to="/rindmind" className={classes.link}>
                        <MenuList >
                            <MenuItem button key="News" 
                             className={classes.listItem} 
                             selected = {selectedIndex === 0} 
                             onClick={(event) => handleListItemSeleted(event,0)}>
                                <ListItemIcon className={classes.listItem}>{< NewReleases />} </ListItemIcon>
                                <ListItemText primary="News" />
                            </MenuItem>
                        </MenuList>
                    </Link>

                    <Link to="/edu" className={classes.link}>
                        <MenuList button key="edu">
                            <MenuItem button key="edu" className={classes.listItem} 
                            selected = {selectedIndex === 1} onClick={(event) => handleListItemSeleted(event,1)}>
                                <ListItemIcon className={classes.listItem}>{< Pencil />} </ListItemIcon>
                                <ListItemText primary="Education" />
                            </MenuItem>
                        </MenuList>
                    </Link>

                    <Link to='/apti' className={classes.link}>
                        <MenuList>
                            <MenuItem button key="apti" className={classes.listItem} 
                            selected = {selectedIndex === 2} onClick={(event) => handleListItemSeleted(event,2)}>
                                <ListItemIcon className={classes.listItem}> {<ExamSymbol />} </ListItemIcon>
                                <ListItemText primary="Aptitude" />
                            </MenuItem>
                        </MenuList>
                    </Link>

                    <Link to="/about" className={classes.link}>
                        <MenuList>
                            <MenuItem button key="About" className={classes.listItem} 
                            selected = {selectedIndex === 3} onClick={(event) => handleListItemSeleted(event,3)}>
                                <ListItemIcon className={classes.listItem}>{< Place />} </ListItemIcon>
                                <ListItemText primary="About" />
                            </MenuItem>
                        </MenuList>
                    </Link>
                    <Divider />
                    <Divider />
                    <Link to="/training" className={classes.link}>
                        <MenuList>
                            <MenuItem button key="Training" className={classes.listItem} 
                            selected = {selectedIndex === 4} onClick={(event) => handleListItemSeleted(event,4)}>
                                <ListItemIcon className={classes.listItem}>{< LaptopChromebookIcon />} </ListItemIcon>
                                <ListItemText primary="Training" />
                            </MenuItem>
                        </MenuList>
                    </Link>
                </Drawer>
                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    <Switch>       
                        <Route exact path="/rindmind">
                            <Home />
                        </Route>
                        <Route exact path="/training">
                            <Training />
                        </Route>
                        <Route exact path="/edu">
                            <Education />
                        </Route>
                        <Route exact path="/apti">
                            <Aptitude />
                        </Route>
                        <Route exact path="/about">
                            <About />
                        </Route>
                    </Switch>

                </main>
            </div>
       
    );
}
