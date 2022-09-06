import Box from "@suid/material/Box";
import Card from "@suid/material/Card";
import CardContent from "@suid/material/CardContent";
import CardMedia from "@suid/material/CardMedia";
import Typography from "@suid/material/Typography";
import { Component } from "solid-js";

export interface ItemCardMenuProps {
    /**
     * Make location accessible to components.
     */
    item_name: string
}

const ItemCardMenu: Component<ItemCardMenuProps> = ( props ) => {
  return (
    <Card sx={{ display: "flex", flexDirection: "column", minWidth: "275" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
        <Typography component="div" variant="h5">
            { props.item_name }
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row"}}>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              Mac Miller
            </Typography>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image=""
              alt="Live from space album cover"
            />
          </Box>
        </CardContent>
    </Card>
  );
}

export default ItemCardMenu;