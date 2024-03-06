import { styled } from "@mui/material/styles";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import MuiAppBar from "@mui/material/AppBar";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "./reducer";
import SideBar from "./sideBar";

interface openInter {
  open: boolean;
}
interface ItemType {
  idCategor: string;
  strCategory: string;
  strCategoryDescription: string;
  strCategoryThumb: string;
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    },
  })
);
const drawerWidth = 0;
const Main = styled("main", {
  shouldForwardProp: (prop) => prop !== "open",
})<openInter>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const MenuItems: React.FC = () => {
  const classes = useStyles();
  const [sidebar, setSidebar] = useState(false);
  const [itemList, setItemList] = useState<ItemType[]>([]);
  const disptach = useDispatch();
  const CatagoryList = useSelector(
    (state: any) => state?.cart?.cart?.categories
  );
  useEffect(() => {
    disptach(cartAction.requestCart());
  }, [disptach]);

  useEffect(() => {
    if (CatagoryList?.length > 0) {
      const addKey =
        CatagoryList?.length > 0 &&
        CatagoryList?.map((el: any) => {
          return {
            ...el,
            addBtn: false,
            qty: 1,
          };
        });
      setItemList(addKey);
    }
  }, [CatagoryList]);

  useEffect(() => {
    if (itemList && itemList.length > 0) {
      const filterCart =
        itemList &&
        itemList.length > 0 &&
        itemList.filter((el: any) => el.addBtn === true);
      sessionStorage.setItem("CartList", JSON.stringify(filterCart));
    }
  }, [itemList]);
  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
  })<openInter>(({ theme, open }) => ({
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  }));

  const handleCount = (icon: string, data: any) => {
    if (icon === "+") {
      const incrment =
        
        (itemList?.map((els: any) => {
          if (els.idCategory === data.idCategory) {
            return {
              ...els,
              qty: els.qty + 1,
            };
          }
          return els;
        }) as ItemType[]);
        const setData= incrment?.filter((es:any)=>es.addBtn=== true)
        sessionStorage.setItem("CartList", JSON.stringify(setData))
      setItemList(incrment);
    }
    if (icon === "-") {
      const decrment =
        (itemList?.map((els: any) => {
          if (els.idCategory === data.idCategory) {
            return {
              ...els,
              qty: els.qty - 1,
            };
          }
          return els;
        }) as ItemType[]);
        const setData= decrment?.filter((es:any)=>es.addBtn=== true)
        sessionStorage.setItem("CartList", JSON.stringify(setData))
      setItemList(decrment);
    }
  };

  const handleAddBtn = (data: any) => {
    const BtnAdd =
      
      (itemList?.map((els: any) => {
        if (els.idCategory === data.idCategory) {
          return {
            ...els,
            addBtn: true,
          };
        }
        return els;
      }) as ItemType[]);
      setSidebar(false)
    setItemList(BtnAdd);
  };
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" open={sidebar}>
          <Toolbar>
            <Grid container alignItems="center">
              <Grid item xs={8} md={10}>
                <Typography variant="h6" noWrap component="div">
                  Menu
                </Typography>
              </Grid>
              <Grid item xs={4} md={2}>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={() => setSidebar(true)}
                  className="bg-color"
                  sx={{ ...(sidebar && { display: "none" }) }}
                >
                  <AddShoppingCartIcon />
                </IconButton>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>

        <Main open={sidebar}>
          <DrawerHeader />
          <div className="main-div">
            {
              itemList?.map((e: any) => (
                <>
                  <div className="sub-div" key={e.idCategory}>
                    <Card sx={{ maxWidth: 345 }} key={e.idCategory}>
                      <CardMedia
                        sx={{ height: 140 }}
                        image={e.strCategoryThumb}
                        title="green iguana"
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {e.strCategory}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          className={classes.root}
                        >
                          {e.strCategoryDescription}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        {e.addBtn ? (
                          <>
                            <Button
                              className="btn-color"
                              onClick={() => handleCount("+", e)}
                            >
                              +
                            </Button>
                            {e.qty}
                            <Button
                              className="btn-color"
                              onClick={() => handleCount("-", e)}
                            >
                              -
                            </Button>
                          </>
                        ) : (
                          <>
                            {" "}
                            <Button
                              className="btn-color"
                              onClick={() => handleAddBtn(e)}
                            >
                              Add
                            </Button>
                          </>
                        )}
                      </CardActions>
                    </Card>
                  </div>
                </>
              ))}
          </div>
        </Main>
        {sidebar && (
          <>
            <SideBar setSidebar={setSidebar} sidebar={sidebar} />
          </>
        )}
      </Box>
    </>
  );
};
export default MenuItems;
