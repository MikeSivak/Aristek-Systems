import { Grid } from "@mui/material"
import { Box } from "@mui/system"

export const Main = () => {
    return (
        <>
            <Box>
                <Box style={{ height: '708px', width: '52px', position: 'absolute', backgroundColor: '#550DC9', float: 'left' }}>
                    <img src="./Tasks.svg" alt="icon" style={{ marginTop: '24px', height: '32px' }} />
                </Box>
                {/* <Box> */}
                <Grid container xs={12}>
                    <Grid item xs>
                        Left Block
                    </Grid>
                    <Grid item xs>
                        Right Block
                    </Grid>
                </Grid>
                {/* </Box> */}
            </Box>
        </>
    )
}