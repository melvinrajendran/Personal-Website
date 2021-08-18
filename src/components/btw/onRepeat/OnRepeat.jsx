import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Heading from "../../common/Heading";
import albums from "./albumCards.js";
import AlbumCard from "./AlbumCard";
import Anime from "react-anime";

function OnRepeat() {
  return (
    <Container className="p-4">
      <Heading text="// on repeat" />
      <Row className="g-4 pt-4">
        {albums.map((album, index) => {
          let fadeInManyFromBottom = {
            translateY: [75, 0],
            opacity: [0, 1],
            duration: 1000,
            easing: "easeOutCubic",
            delay: index * 500
          };

          return (
            <Col key={index} className="d-flex justify-content-center">
              <Anime {...fadeInManyFromBottom}>
                <AlbumCard songURL={album.songURL} imageURL={album.imageURL} imageAlt={album.imageAlt} albumTitle={album.albumTitle} artist={album.artist} />
              </Anime>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default OnRepeat;
