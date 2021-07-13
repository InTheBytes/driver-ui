import React from 'react';
import {Container, makeStyles, Typography, Button} from "@material-ui/core";
import { DataGrid } from '@material-ui/data-grid';

function DeliveryHub(props) {

	const useStyles = makeStyles((theme) => ({
		paper: {
			marginTop: theme.spacing(8),
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
		}
	}));

	const classes = useStyles();
	
	return (
		<Container 
		component="main"
		alignContent="center"
		width="50">
			<div className={classes.paper}>
				<Typography component="h1" variant="h2">
					You're on the clock! 
				</Typography>
                <Typography component="h4" variant="h5" padding-top="500">
					Select an available order:
				</Typography>
			</div>
            <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                checkboxSelection
                disableSelectionOnClick
             />
            </div>


		</Container>
		
        
	);
}

//Currently working on a backend error resulting in active orders failing to load. Below data is purely cosmetic.
//TODO: After fixing, re-add subsequent buttons and attach endpoints.

const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
    },
    {
      field: 'startTime',
      headerName: 'Window start',
      width: 170,
      editable: true,
    },
    {
      field: 'endTime',
      headerName: 'Window end',
      description: 'Whoa cool.',
      sortable: false,
      width: 170
    },
  ];
  
  const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', startTime: '5:30', endTime: '7:30'}, 
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', startTime: '5:30', endTime: '7:30'},
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', startTime: '5:30', endTime: '7:30'},
    { id: 4, lastName: 'Stark', firstName: 'Arya', startTime: '5:30', endTime: '7:30'},
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', startTime: '5:30', endTime: '7:30'},
    { id: 6, lastName: 'Melisandre', firstName: null, startTime: '5:30', endTime: '7:30' },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', startTime: '5:30', endTime: '7:30' },
    { id: 8, lastName: 'Frances', firstName: 'Rossini',startTime: '5:30', endTime: '7:30' }
  ];
  
	

export default DeliveryHub;



