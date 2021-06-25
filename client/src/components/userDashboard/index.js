import { Grid } from "@material-ui/core";
import UserMap from "./components/Map";
import Track from "./components/Track";




function userDashboard() {
    return (
        <div>
            <Grid container>
                <Grid item md={6}>
                    <Track />
                </Grid>
                <Grid item md={6} xs={12}>
                <UserMap />
                </Grid>
            </Grid>
            
        </div>
    )
}

export default userDashboard
