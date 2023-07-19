import Navbar from "../src/Navbar";
import AttractionCard from "../src/AttractionCard";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

function HomePage() {
  return (
    <div>
      <Navbar />
      <Container maxWidth="lg">
        <h1>I'm Home page</h1>
        {/* <div style={{ marginTop: "1em" }}>
          <Typography variant="h4" gutterBottom>
            Aroud the world
          </Typography>
          <Grid container spacing={3}>
            {data.map((attraction) => (
              <Grid item xs={12} lg={4} key={attraction.id}>
                <AttractionCard attraction={attraction} />
              </Grid>
            ))}
          </Grid>
        </div> */}
      </Container>
    </div>
  );
}

export default HomePage;
