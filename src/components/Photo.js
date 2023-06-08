import "./Photo.css";
import { Container } from "react-bootstrap";
import { Card, CardImg } from "reactstrap";
function Photo() {
  return (
    <div className="parentdiv13">
      <Container className="div113">
        <div class=' mb-2'>
          <h1 class="text-4xl  text-center text-white mr-3 mb-2 ">Frames📸</h1>
          <div class=" flex flex-wrap gap-2 ">
            <Card style={{ width: "24rem", height: "17rem",border: "2px solid white", objectFit:"cover",borderRadius:"6%",}}>
              <CardImg
                src={require("../components/assets/photos/0.jpeg")}
                style={{ width: "24rem", height: "268px",borderRadius:"5%", }}
              />
            </Card>
            <Card style={{ width: "24rem", height: "17rem",border: "2px solid white", objectFit:"cover",borderRadius:"6%",}}>
              <CardImg
                src={require("../components/assets/photos/1.jpeg")}
                style={{ width: "24rem", height: "268px",borderRadius:"5%", }}
              />
            </Card>
            <Card style={{ width: "24rem", height: "17rem",border: "2px solid white", objectFit:"cover",borderRadius:"6%",}}>
              <CardImg
                src={require("../components/assets/photos/2.jpeg")}
                style={{ width: "24rem", height: "268px",borderRadius:"5%", }}
              />
            </Card>
            <Card style={{ width: "24rem", height: "17rem",border: "2px solid white", objectFit:"cover",borderRadius:"6%",}}>
              <CardImg
                src={require("../components/assets/photos/3.jpeg")}
                style={{ width: "24rem", height: "268px",borderRadius:"5%", }}
              />
            </Card>
            <Card style={{ width: "24rem", height: "17rem",border: "2px solid white", objectFit:"cover",borderRadius:"6%",}}>
              <CardImg
                src={require("../components/assets/photos/4.jpeg")}
                style={{ width: "24rem", height: "268px",borderRadius:"5%", }}
              />
            </Card>
            <Card style={{ width: "24rem", height: "17rem",border: "2px solid white", objectFit:"cover",borderRadius:"6%",}}>
              <CardImg
                src={require("../components/assets/photos/5.jpeg")}
                style={{ width: "24rem", height: "268px",borderRadius:"5%", }}
              />
            </Card>
            <Card style={{ width: "24rem", height: "17rem",border: "2px solid white", objectFit:"cover",borderRadius:"6%",}}>
              <CardImg
                src={require("../components/assets/photos/6.jpeg")}
                style={{ width: "24rem", height: "268px",borderRadius:"5%", }}
              />
            </Card>
            <Card style={{ width: "24rem", height: "17rem",border: "2px solid white", objectFit:"cover",borderRadius:"6%",}}>
              <CardImg
                src={require("../components/assets/photos/7.jpeg")}
                style={{ width: "24rem", height: "268px",borderRadius:"5%", }}
              />
            </Card>
            <Card style={{ width: "24rem", height: "17rem",border: "2px solid white", objectFit:"cover",borderRadius:"5%",}}>
              <CardImg
                src={require("../components/assets/photos/8.jpeg")}
                style={{ width: "24rem", height: "268px",borderRadius:"5%", }}
              />
            </Card>
            <Card style={{ width: "24rem", height: "17rem",border: "2px solid white", objectFit:"cover",borderRadius:"6%",}}>
              <CardImg
                src={require("../components/assets/photos/9.jpeg")}
                style={{ width: "24rem", height: "268px",borderRadius:"5%", }}
              />
            </Card>
            <Card style={{ width: "24rem", height: "17rem",border: "2px solid white", objectFit:"cover",borderRadius:"6%",}}>
              <CardImg
                src={require("../components/assets/photos/10.jpeg")}
                style={{ width: "24rem", height: "268px",borderRadius:"5%", }}
              />
            </Card>
            <Card style={{ width: "24rem", height: "17rem",border: "2px solid white", objectFit:"cover",borderRadius:"6%",}}>
              <CardImg
                src={require("../components/assets/photos/11.jpeg")}
                style={{ width: "24rem", height: "268px",borderRadius:"5%", }}
              />
            </Card>
            <Card style={{ width: "24rem", height: "17rem",border: "2px solid white", objectFit:"cover",borderRadius:"5%",}}>
              <CardImg
                src={require("../components/assets/photos/12.jpeg")}
                style={{ width: "24rem", height: "268px",borderRadius:"5%", }}
              />
            </Card>
            <Card style={{ width: "24rem", height: "17rem",border: "2px solid white", objectFit:"cover",borderRadius:"6%",}}>
              <CardImg
                src={require("../components/assets/photos/13.jpeg")}
                style={{ width: "24rem", height: "268px",borderRadius:"5%", }}
              />
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Photo;
