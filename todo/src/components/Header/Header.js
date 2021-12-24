import { Box, Grid, Typography, AppBar } from '@mui/material'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export const Header = () => {
    const isMobile = useMediaQuery('(max-width:500px)');

    return (
        <>
            <AppBar sx={{ backgroundColor: '#FFFFFF', color: 'black' }}>
                <Box style={{ height: '64px' }}>
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
                    <Box style={{ float: 'right', width: isMobile ? '200px' : '300px', height: '100%' }}>
                        <Grid style={{ height: '100%', alignItems: 'center' }} container xs={12}>
                            <Grid container xs style={{ alignItems: 'center', justifyContent: 'right' }}>
                                <span style={{ whiteSpace: 'normal' }}>
                                    {isMobile ? '' : 'Leanne Graham'}
                                </span>
                            </Grid>
                            <Grid container xs style={{ alignItems: 'center' }}>
                                <Grid item xs>
                                    <img src='./profile.svg' alt="profile" style={{ width: '32px', height: '32px' }} />
                                </Grid>
                                <Grid item xs>
                                    <img src='./arrow.svg' alt="arrow" style={{ width: '13px', height: '13px', float: 'left' }} />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </AppBar>
        </>
    )
}