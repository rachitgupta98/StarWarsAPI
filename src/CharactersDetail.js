import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles({
  card: {
    marginTop: "40px",
    maxWidth: 345,
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "50%"
  },
  media: {
    height: 140
  }
});

export default function CharactersDetail() {
  const classes = useStyles();
  let history = useHistory();
  const [info, setInfo] = useState([]);

  useEffect(() => {
    setInfo(
      history.location.state.fullData.map(d => {
        if (d.name === history.location.state.datas[0]) {
          return d;
        }
        return null;
      })
    );
  }, []);
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={require("./image/starwar.jpg")}
        />
        <CardContent>
          {info.map(d =>
            d !== null ? (
              <Typography gutterBottom variant="h5" component="h2" key={d}>
                {d.name}
              </Typography>
            ) : (
              ""
            )
          )}

          {info.map(d =>
            d !== null ? (
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                key={d}
              >
                <li>{"Height :" + d.height}</li>
                <li>{"Mass :" + d.mass}</li>
                <li>{"Hair Color :" + d.hair_color}</li>
                <li>{"Skin Color :" + d.skin_color}</li>
                <li>{"Eye Color :" + d.eye_color}</li>
                <li>{"Birth Year :" + d.birth_year}</li>
                <li>{"Gender :" + d.gender}</li>
                <li>{"HomeWorld :" + d.homeworld}</li>
                <li>
                  {"Films :"} <Link href={d.films[0]}>{d.films[0]}</Link>
                </li>
                <li>
                  {"Species :"}
                  <Link href={d.species}>{d.species}</Link>
                </li>
                <li>
                  {"Vehicles :"}
                  <Link href={d.vehicles[0]}>{d.vehicles[0]}</Link>
                </li>
                <li>
                  {"StarShips :"}
                  <Link href={d.starships[0]}>{d.starships[0]}</Link>
                </li>
              </Typography>
            ) : (
              ""
            )
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
