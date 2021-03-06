import React from 'react';
import {Container, makeStyles, Typography} from "@material-ui/core";
import StripeButton from "./StripeButton"

function Home() {

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
		<Container component="main">
			<div className={classes.paper}>
				<Typography component="h1" variant="h2">
					Welcome to StackLunch
				</Typography>
			</div>

			<div className="checkout">
				<StripeButton price="50"/>
			</div>
		</Container>
		
	);
}

export default Home;