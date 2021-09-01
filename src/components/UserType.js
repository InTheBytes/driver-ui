import React from 'react';
import {Container, makeStyles, Typography, Button} from "@material-ui/core";

//TODO: Move this component into User-UI whenever it's convenient and update references.

function UserType() {

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
		<Container component="main" alignContent="center" width="50">
			<div className={classes.paper}>
				<Typography component="h1" variant="h2">
					Choose an account type:
				</Typography>
			</div>
            <Button
				type="submit"
				variant="contained"
				color="primary"
				size="large"
				className={classes.submit}
                href="https://stacklunch.com/login"
            >
				Customer
			</Button>
            <Button
				type="submit"
				variant="contained"
				color="primary"
				size="large"
				className={classes.submit}
                href="/driverlogin"
            >
				Driver
			</Button>
            <Button
				type="submit"
				variant="contained"
				color="primary"
				size="large"
				className={classes.submit}
                href="https://manager.stacklunch.com"
            >
				Manager
			</Button>
            <Button
				type="submit"
				variant="contained"
				color="primary"
				size="large"
				className={classes.submit}
                href="https://admin.stacklunch.com/#/login"
            >
				Administrator
			</Button>
		</Container>
        
	);
}

export default UserType;