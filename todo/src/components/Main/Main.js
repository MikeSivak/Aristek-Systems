import { Grid, TextField, Button, Typography, Checkbox, FormControlLabel, IconButton, ButtonGroup } from "@mui/material"
import { Box } from "@mui/system"
import { useState } from "react"

export const Main = () => {

    const [labels, setLabels] = useState(
        [
            'Add Icon to Dashboard',
            'Create To-Do List',
            'Add Icon to Das '
        ]
    );

    return (
        <>
            <Box style={{ height: '708px', width: '52px', position: 'absolute', backgroundColor: '#550DC9', float: 'left' }}>
                <img src="./Tasks.svg" alt="icon" style={{ marginTop: '24px', height: '32px' }} />
            </Box>
            <Box>
                <Box style={{ marginLeft: '76px' }}>
                    <Grid container xs={12} columnSpacing={8} rowSpacing={4} >
                        <Grid item xs md={8}>
                            <Box style={{ minWidth: '400px' }}>
                                <Grid container xs={12}>
                                    <Grid item xs>
                                        <TextField fullWidth size="small" placeholder="+ Add a task, press Enter to save"></TextField>
                                        <Typography style={{ float: 'left', backgroundColor: '#FEF6FF', minWidth: '50px', maxWidth: '100px', fontSize: '12px', marginTop: '12px' }}>Total: 7</Typography>
                                    </Grid>
                                    <Grid item ml={2}>
                                        <Button variant="contained" style={{ textTransform: 'none', fontSize: '16px', backgroundColor: '#550DC9' }}>Add</Button>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box style={{ marginTop: '16px', minWidth: '400px' }}>
                                <Typography style={{ textAlign: 'left', fontSize: '16px', fontWeight: '600' }}>To do (3)</Typography>
                                {labels.map((label) => (
                                    <Box style={{ marginTop: '16px' }}>
                                        <Box style={{ height: '48px', boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.08)' }}>
                                            <Box style={{ padding: '6px 12px' }}>
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox
                                                            size="small"
                                                            sx={{ '&.Mui-checked': { color: '#550DC9', }, color: '#ECECEC' }}
                                                        />
                                                    }
                                                    label={label}
                                                    style={{ float: 'left' }} />
                                                <ButtonGroup style={{ float: 'right' }}>
                                                    <IconButton >
                                                        <img src="./edit.png" />
                                                    </IconButton>
                                                    <IconButton >
                                                        <img src="./delete.png" />
                                                    </IconButton>
                                                </ButtonGroup>
                                            </Box>
                                        </Box>
                                    </Box>
                                ))}
                            </Box>
                        </Grid>
                        <Grid item xs md={4}>
                            <Box>
                                <Typography style={{ textAlign: 'left', fontSize: '16px', fontWeight: '600' }}>Completed (4)</Typography>
                                {labels.map((label) => (
                                    <Box style={{ marginTop: '16px', minWidth: '400px' }}>
                                        <Box style={{ height: '48px', boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.08)' }}>
                                            <Box style={{ padding: '6px 12px' }}>
                                                <FormControlLabel
                                                    control={
                                                        <Checkbox
                                                            size="small"
                                                            sx={{ '&.Mui-checked': { color: '#550DC9', }, color: '#ECECEC' }}
                                                        />
                                                    }
                                                    label={label}
                                                    style={{ float: 'left' }}
                                                />
                                                <ButtonGroup style={{ float: 'right' }}>
                                                    <IconButton >
                                                        <img src="./delete.png" />
                                                    </IconButton>
                                                </ButtonGroup>
                                            </Box>
                                        </Box>
                                    </Box>
                                ))}
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    )
}