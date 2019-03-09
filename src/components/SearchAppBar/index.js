import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Drawer from '@material-ui/core/Drawer';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import purple from '@material-ui/core/colors/purple';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import PeopleIcon from '@material-ui/icons/People';
import DirectionsIcon from '@material-ui/icons/DirectionsBike';
import CardTravelIcon from '@material-ui/icons/CardTravel';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const styles = theme => ({
  grow: {
    flexGrow: 0.75,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 200,
      '&:focus': {
        width: 500,
      },
    },
  },
  list: {
    width: 250,
  },
  growFull: {
      flexGrow: 1,
      marginLeft: 16
  },
  drawerTitle: {
      marginLeft: 16,
      marginTop: 16
  }
});

const sectors = {
  Home: [ "Grocery", "Utility", "Kitchen", "Waterworks", "Furniture", "Other" ],
  Fashion: [ "Men", "Women", "Kids", "Innerwear", "Formal", "Casual" ],
  Entertainment: [ "Grocery", "Utility", "Kitchen", "Waterworks", "Furniture", "Other" ],
  Automobile: [ "Grocery", "Utility", "Kitchen", "Waterworks", "Furniture", "Other" ],
  Miscellaneous: [ "Grocery", "Utility", "Kitchen", "Waterworks", "Furniture", "Other" ]
};

class SearchAppBar extends React.PureComponent {
    state = {
        drawer_open: false,
        sectorName: "Home",
        tabValue: 0
    };

    render() {
        const { classes } = this.props;

        const sideList = (
            <div className={classes.list}>
                <Typography className={classes.drawerTitle} variant="h5" color="inherit" noWrap>
                    <b>Sectors</b>
                </Typography>
                <List>
                    <ListItem button key={0} onClick={ () => this.setState({ sectorName: "Home" }) }>
                        <ListItemIcon><HomeIcon color='secondary' /></ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItem>

                    <ListItem button key={2} onClick={ () => this.setState({ sectorName: "Fashion" }) }>
                        <ListItemIcon><PeopleIcon color='secondary' /></ListItemIcon>
                        <ListItemText primary="Fashion" />
                    </ListItem>

                    <ListItem button key={1} onClick={ () => this.setState({ sectorName: "Entertainment" }) }>
                    <ListItemIcon><ShoppingBasketIcon color='secondary' /></ListItemIcon>
                        <ListItemText primary="Entertainment" />
                    </ListItem>

                    <ListItem button key={3} onClick={ () => this.setState({ sectorName: "Automobile" }) }>
                    <ListItemIcon><DirectionsIcon color='secondary' /></ListItemIcon>
                        <ListItemText primary="Automobile" />
                    </ListItem>

                    <ListItem button key={4} onClick={ () => this.setState({ sectorName: "Miscellaneous" }) }>
                    <ListItemIcon><CardTravelIcon color='secondary'/></ListItemIcon>
                        <ListItemText primary="Miscellaneous" />
                    </ListItem>
                </List>
                <Divider />
            </div>
        );

        return (
            <AppBar elevation={8} style={ {backgroundColor: purple[800]} }>
              <Toolbar>
                <IconButton onClick={()=>this.setState({ drawer_open: true })} className={classes.menuButton} color="inherit" aria-label="Open drawer">
                  <MenuIcon />
                </IconButton>
                <Typography className={classes.title} variant="h5" color="inherit" noWrap>
                  Apparel
                </Typography>
                <div className={classes.grow} />
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    placeholder="Search…"
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput,
                    }}
                  />
                </div>
                <div className={classes.growFull} />
                <Badge badgeContent={16} color='secondary'>
                    <ShoppingCartIcon />
                </Badge>
                <Drawer open={this.state.drawer_open} onClose={()=>this.setState({ drawer_open: false })}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={()=>this.setState({ drawer_open: false })}
                        onKeyDown={()=>this.setState({ drawer_open: false })}
                    >
                        {sideList}
                    </div>
                </Drawer>
              </Toolbar>
              <Tabs variant='scrollable' value={this.state.tabValue} onChange={ (event,value)=>this.setState({ tabValue: value }) }>
                {
                  sectors[this.state.sectorName].map(categoryName => <Tab key={categoryName} label={categoryName} />)
                }
              </Tabs>
            </AppBar>
        );
    }
};

export default withStyles(styles)(SearchAppBar);