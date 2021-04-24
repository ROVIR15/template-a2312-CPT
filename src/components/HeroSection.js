import React from 'react'
import { Parallax } from 'react-parallax'
import { Typography } from '@material-ui/core';

const insideStyles = {
  padding: 20,
  position: "absolute",
  top: "50%",
  left: "20%",
  transform: "translate(-50%,-50%)",
  color: 'white'
};

const image4 =
  "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/empire-state-building-black-and-white-square-format-john-farnan.jpg";

function HeroSection() {
  return (
    <Parallax
      bgImage={image4}
      strength={200}
      renderLayer={(percentage) => (
        <div>
          <div
            style={{
              position: "absolute",
              background: `rgba(0, 0, 0, ${percentage * 0.6})`,
              left: "20%",
              top: "50%",
              maxHeight: '250px',
              borderRadius: '10px',
              transform: "translate(-50%,-50%)",
              width: percentage * 500,
              height: percentage * 500
            }}
          />
        </div>
      )}
    >
      <div style={{ height: 500 }}>
        <div style={insideStyles}>
          <Typography variant="h4">
            ITS HEADING <br/>THAT EXPLAIN
          </Typography>
          <Typography variant="caption">
            very small text that you can describe more detail
          </Typography>
        </div>
      </div>
    </Parallax>
  )
}

export default HeroSection;
