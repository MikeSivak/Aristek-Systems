import { Box, Grid, Typography } from '@mui/material'

const styles = {
    mainContainer: {
        margin: 0,
        backgound: '#FFFFFF',
        maxWidth: '1920px',
        minWidth: '320px',
        height: '64px',
        boxShadow: '1px 1px 19px 1px darkgray'
    }
}

export const Header = () => {
    return (
        <>
            <Box style={styles.mainContainer}>
                <Box style={{ float: 'left', width: '150px', height: '100%' }}>
                    <Grid style={{ height: '100%', alignItems: 'center' }} container xs={12}>
                        <Grid item xs>
                            <img src='./logo.svg' alt="logo" style={{ width: '46px', height: '46px' }} />
                        </Grid>
                        <Grid item xs>
                            <span style={{ fontWeight: '700', fontSize: '16px' }}>Tasks</span>
                        </Grid>
                    </Grid>
                </Box>
                <Box style={{ float: 'right', width: '300px', height: '100%' }}>
                    <Grid style={{ height: '100%', alignItems: 'center' }} container xs={12}>
                        <Grid container xs style={{alignItems: 'center', justifyContent:'right'}}>
                            <span>Leanne Graham</span>
                        </Grid>
                        <Grid container xs style={{alignItems: 'center'}}>
                            <Grid item xs>
                                <img src='./profile.svg' alt="profile" style={{ width: '32px', height: '32px' }} />
                            </Grid>
                            <Grid item xs>
                                <img src='./arrow.svg' alt="arrow" style={{ width: '13px', height: '13px', float:'left' }} />
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    )
}