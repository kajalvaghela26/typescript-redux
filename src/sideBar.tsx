import { styled, useTheme } from "@mui/material/styles";
import { Button, Divider, Drawer, IconButton, List } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AspectRatio from "@mui/joy/AspectRatio";
import Link from "@mui/joy/Link";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { useEffect, useState } from "react";

const drawerWidth = 325;
const SideBar = (props: any) => {
  const theme = useTheme();
  const [cartData, setCartData] = useState([]);
  useEffect(() => {
    const cartData: any = sessionStorage.getItem("CartList");
    const CartShow = JSON.parse(cartData);
    setCartData(CartShow);
  }, [sessionStorage.getItem("CartList")]);
  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  }));
  return (
    <>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="right"
        open={props.sidebar}
      >
        <DrawerHeader>
          Cart
          <IconButton onClick={() => props.setSidebar(!props.sidebar)}>
            {theme.direction === "ltr" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {
            cartData?.length > 0 &&
            cartData?.map((el: any) => {
              console.log("el :>> ", el);
              return (
                <>
                  <Card
                    variant="outlined"
                    key={el.idCategory}
                    orientation="horizontal"
                    sx={{
                      width: 320,
                      "&:hover": {
                        boxShadow: "md",
                        borderColor: "neutral.outlinedHoverBorder",
                      },
                    }}
                  >
                    <AspectRatio ratio="1" sx={{ width: 90 }}>
                      <img
                        src={el.strCategoryThumb}
                        srcSet={el.strCategoryThumb}
                        loading="lazy"
                        alt=""
                      />
                    </AspectRatio>
                    <CardContent>
                      <Typography level="title-lg" id="card-description">
                        {el.strCategory}
                      </Typography>
                      <Typography
                        level="body-sm"
                        aria-describedby="card-description"
                        mb={1}
                      >
                        <Link
                          overlay
                          underline="none"
                          href="#interactive-card"
                          sx={{ color: "text.tertiary" }}
                        >
                          {el.addBtn ? (
                            <>
                              <Button
                                className="btn-color"
                                // onClick={() => setBtn(!btn)}
                              >
                                +
                              </Button>
                              {el.qty}
                              <Button
                                className="btn-color"
                                // onClick={() => setBtn(!btn)}
                              >
                                -
                              </Button>
                            </>
                          ) : (
                            <>
                              {" "}
                              <Button
                                className="btn-color"
                                // onClick={() => handleAddBtn(e)}
                              >
                                Some Issue
                              </Button>
                            </>
                          )}
                        </Link>
                      </Typography>
                    </CardContent>
                  </Card>
                </>
              );
            })}
        </List>
      </Drawer>
    </>
  );
};
export default SideBar;
