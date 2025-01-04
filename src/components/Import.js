import React, { useState } from 'react';
import { Button, Table, TableHead, TableBody, TableRow, TableCell, Menu, MenuItem } from '@mui/material';
import { MoreVert } from '@mui/icons-material';

const Import = (props) => {
    // State for menu anchor (open/close position)
    const [anchorEl, setAnchorEl] = useState(null);
    const rows = props.makes;

    // Handle opening the menu
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    // Handle closing the menu
    const handleClose = () => {
        setAnchorEl(null);
    };

    // Handle deleting the car from the table
    const deleteMake = () => {

    }

    return (
        <>
            <Button variant="contained" color="primary" onClick={props.fetchMakes}>Contained</Button>

            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="right">ID</TableCell>
                        <TableCell align="right">Make&nbsp;(g)</TableCell>
                        <TableCell align="right">Actions&nbsp;(g)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.MakeId}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="right">{row.MakeId}</TableCell>
                            <TableCell align="right">{row.MakeName}</TableCell>
                            <TableCell align="right">
                                {/* MoreVert button to open the menu */}
                                <MoreVert onClick={handleClick} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>

            {/* Menu component */}
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={deleteMake}>Action 1</MenuItem>
            </Menu>
        </>
    );
};

export default Import;
