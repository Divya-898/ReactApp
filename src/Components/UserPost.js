import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import {useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button, Pagination } from "@mui/material";
import CommentPost from "./Comments";
import { Link } from "react-router-dom";
import User from "./User";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function UserPost() {
  const [expanded, setExpanded] = useState(false);
  const [page, setPage] = useState(1);
  const date = Date().toLocaleString();
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [posts, setPosts] = useState([]);

  const getData = () => {
    fetch(`http://localhost:3500/posts?_page=${page}`)
      .then((response) => response.json())
      .then((result) => setPosts(result))
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    getData();
  }, [page]);

  return (
    <div style={{ marginTop: "100px" }}>
      <Typography>{page}</Typography>
      {posts.map((post) => (
        <Grid item key={post.id}>
          <Card
            sx={{ maxWidth: 554, marginBottom: "40px", marginLeft: "40px" }}
          >
            <CardHeader
              avatar={
                <Avatar
                  sx={{ bgcolor: red[500], height: 50 }}
                  aria-label="recipe"
                >
                  {/* {post.id} */}
                  <User userId={post.userId} />
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={post.title}
              subheader={date}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                <b>body:</b> {post.body}
              </Typography>
            </CardContent>
            <Link to={`/user/${post.id}`}>
              <CardMedia
                component="img"
                height="194"
                image="https://upload.wikimedia.org/wikipedia/commons/f/fb/Breakfast%21.jpg"
                alt="Paella dish"
              />
            </Link>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <ExpandMore
                expand={expanded}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph>Comments:</Typography>
                <CommentPost postId={post.id}></CommentPost>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
      ))}

      <Pagination
        count={10}
        color="primary"
        page={page}
        showFirstButton={true}
        showLastButton={true}
        onChange={(event, value) => setPage(value)}
      />
    </div>
  );
}
