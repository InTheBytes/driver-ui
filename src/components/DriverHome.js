import React from 'react';
import {Container, makeStyles, Typography, Button} from "@material-ui/core";

function DriverHome(props) {

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
					Welcome, {localStorage.getItem('activeName')}. 
				</Typography>
           		 <Button
					type="submit"
					variant="contained"
					color="primary"
					size="large"
					width="50%"
					margin-left=":25%"
					margin-right="25%"
					className={classes.submit}
					href="/deliveryhub"
				>
					Ready to deliver? Check in!
				</Button>
			</div>


		</Container>
		
        
	);
}
	

export default DriverHome;