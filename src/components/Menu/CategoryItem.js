import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import datas from "./Data";
import MenuItem from "./MenuItem";
import { Box, Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import { useDispatch } from "react-redux";
import { removeCategory } from "../../store/actions/menuActions";
const Accordion = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

const CategortItem = ({ category }) => {
  const dispatch = useDispatch();
  const menuList = category.FoodItems.map((menu) => (
    <MenuItem menu={menu} key={menu.id} categoryID={category.id} />
  ));
  const handleDelete = (categoryId) => {
    console.log("sd");
    dispatch(removeCategory(categoryId));
  };
  return (
    <div>
      <Accordion square>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <div className="container-fluid">
            <div className="row">
              <Typography>{category.name}</Typography>
              <Button
                className="ml-auto"
                variant="outlined"
                color="secondary"
                onClick={() => handleDelete(category.id)}
              >
                <DeleteIcon fontSize="small" color="secondary" />
              </Button>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Link
            color="primary"
            variant="contained"
            to={{
              pathname: `/menu/${category.id}/add`,
              state: { categoryID: category.id },
            }}
            style={{ textDecoration: "none" }}
          >
            <AddIcon fontSize="large" />
          </Link>
          {menuList}
          <Grid item md={12} xs={12}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                p: 3,
              }}
            ></Box>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default CategortItem;
