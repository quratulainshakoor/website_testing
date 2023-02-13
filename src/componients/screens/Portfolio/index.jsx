import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

import Container from "@mui/material/Container";

const Portfolio = () => {
  const itemData = [
    {
      img: "https://images.unsplash.com/photo-1503146234394-631200675614?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      title: "Bed",
      author: "Harry bell",
    },
    {
      img: "https://images.unsplash.com/photo-1487376480913-24046456a727?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Books",
      author: "Pavel Nekoranec",
    },

    {
      img: "https://images.unsplash.com/photo-1502741224143-90386d7f8c82?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
      title: "Books",
      author: "Pavel Neikil",
    },
    {
      img: "https://images.unsplash.com/photo-1483918793747-5adbf82956c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      title: "Bed",
      author: "AlishbaSHah",
    },
    {
      img:  "https://images.unsplash.com/photo-1503146234394-631200675614?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      title: "Bed",
      author: "Swabdesign",
    },
    {
      img:  "https://images.unsplash.com/photo-1487376480913-24046456a727?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      title: "Bed",
      author: "Washigntona",
    },
  ];
  return (
    <>
  
      <Container maxWidth="lg">
        <ImageList variant="masonry" cols={3} gap={9}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar position="below" title={item.author}  sx={{fontSize: "20px", color: " #D61355", fontWeight : "bold"}} />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    </>
  );
};

export default Portfolio;
