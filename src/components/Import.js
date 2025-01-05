import React, { useState } from 'react';
import { Button, Table, TableHead, TableBody, TableRow, TableCell, Menu, MenuItem } from '@mui/material';
import { MoreVert } from '@mui/icons-material';

const Import = (props) => {
    // State for menu anchor (open/close position)
    const [anchorEl, setAnchorEl] = useState(null);
    const [menuRowIndex, setMenuRowIndex] = useState(null); // Tracks the index of the row
    const rows = props.makes;

    // Handle opening the menu
    const handleClick = (event, index) => {
        setAnchorEl(event.currentTarget); // Set the menu position
        setMenuRowIndex(index); // Track the index of the clicked row
    };

    // Handle closing the menu
    const handleClose = () => {
        setAnchorEl(null); // Close the menu
        setMenuRowIndex(null); // Reset the index
    };

    // Handle deleting the car from the table
    const deleteMake = () => {
        if (menuRowIndex !== null) {
            props.removeCar(menuRowIndex); // Perform delete based on row index
        }
        handleClose(); // Close the menu after deleting
    };

    return (
        <>
            <h2>COUNT: {props.makes.length}</h2>
            <Button variant="contained" color="primary" onClick={props.fetchMakes}>
                Contained
            </Button>

            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="right">ID</TableCell>
                        <TableCell align="right">Make&nbsp;(g)</TableCell>
                        <TableCell align="right">Actions&nbsp;(g)</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => (
                        <TableRow
                            key={row.MakeId}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="right">{row.MakeId}</TableCell>
                            <TableCell align="right">{row.MakeName}</TableCell>
                            <TableCell align="right">
                                {/* Pass index to handleClick */}
                                <MoreVert onClick={(event) => handleClick(event, index)} />
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
              disableAutoFocus
              disableEnforceFocus
            >
              <MenuItem onClick={deleteMake}>Delete Make</MenuItem>
            </Menu>
        </>
    );
};

export default Import;
