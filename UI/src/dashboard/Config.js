import 'date-fns';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Switch, Button } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const useStyles = makeStyles(theme => ({
  timePicker: {
    paddingRight: theme.spacing(0),
    marginBottom: theme.spacing(0),
    textAlign: 'center',
  },
  switch: {
    paddingTop: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default function Config() {

  const classes = useStyles();

  const [selectedDate, setSelectedDate] = React.useState({
    monday: new Date(),
    tuesday: new Date(),
    wednesday: new Date(),
    thursday: new Date(),
    friday: new Date(),
    saturday: new Date(),
    sunday: new Date(),
  });

  const [dayEnabled, setDayEnabled] = React.useState({
    monday: true,
    tuesday: true,
    wednesday: true,
    thursday: true,
    friday: true,
    saturday: true,
    sunday: true,
  });

  const handleDayEnabledChange = name => event => {
    setDayEnabled({ ...dayEnabled, [name]: event.target.checked});
  }

  const handleDateChange = date => event => {
    setSelectedDate({ ...selectedDate, [date]: event});
  }
  
  function exportJson() {
    var toJson = {
      selectedDate,
      dayEnabled
    }

    console.log(JSON.parse(JSON.stringify(toJson)));
  }

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        {/* <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date picker inline"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <KeyboardDatePicker
          margin="normal"
          id="date-picker-dialog"
          label="Date picker dialog"
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        /> */}
        <Grid item xs={11}>
          <KeyboardTimePicker
            className={classes.timePicker}
            margin="normal"
            id="time-picker"
            label="Monday"
            value={selectedDate.monday}
            onChange={handleDateChange('monday')}
            KeyboardButtonProps={{
              'aria-label': 'change time',
            }}
          />
        </Grid>
        <Grid item xs={11}>
          <Switch
            checked={dayEnabled.monday}
            onChange={handleDayEnabledChange('monday')}>
          </Switch>
        </Grid>
        <Grid item xs={11}>
          <KeyboardTimePicker
            className={classes.timePicker}
            margin="normal"
            id="time-picker"
            label="Tuesday"
            value={selectedDate.tuesday}
            onChange={handleDateChange('tuesday')}
            KeyboardButtonProps={{
              'aria-label': 'change time',
            }}
          />
        </Grid>
        <Grid item xs={11}>
          <Switch
            checked={dayEnabled.tuesday}
            onChange={handleDayEnabledChange('tuesday')}>
          </Switch>
        </Grid>
        <Grid item xs={11}>
          <KeyboardTimePicker
            className={classes.timePicker}
            margin="normal"
            id="time-picker"
            label="Wednesday"
            value={selectedDate.wednesday}
            onChange={handleDateChange('wednesday')}
            KeyboardButtonProps={{
              'aria-label': 'change time',
            }}
          />
        </Grid>
        <Grid item xs={11}>
          <Switch
            checked={dayEnabled.wednesday}
            onChange={handleDayEnabledChange('wednesday')}>
          </Switch>
        </Grid>
        <Grid item xs={11}>
          <KeyboardTimePicker
            className={classes.timePicker}
            margin="normal"
            id="time-picker"
            label="Thursday"
            value={selectedDate.thursday}
            onChange={handleDateChange('thursday')}
            KeyboardButtonProps={{
              'aria-label': 'change time',
            }}
          />
        </Grid>
        <Grid item xs={11}>
          <Switch
            checked={dayEnabled.thursday}
            onChange={handleDayEnabledChange('thursday')}>
          </Switch>
        </Grid>
        <Grid item xs={11}>
          <KeyboardTimePicker
            className={classes.timePicker}
            margin="normal"
            id="time-picker"
            label="Friday"
            value={selectedDate.friday}
            onChange={handleDateChange('friday')}
            KeyboardButtonProps={{
              'aria-label': 'change time',
            }}
          />
        </Grid>
        <Grid item xs={11}>
          <Switch
            checked={dayEnabled.friday}
            onChange={handleDayEnabledChange('friday')}>
          </Switch>
        </Grid>
        <Grid item xs={11}>
          <KeyboardTimePicker
            className={classes.timePicker}
            margin="normal"
            id="time-picker"
            label="Saturday"
            value={selectedDate.saturday}
            onChange={handleDateChange('saturday')}
            KeyboardButtonProps={{
              'aria-label': 'change time',
            }}
          />
        </Grid>
        <Grid item xs={11}>
          <Switch
            checked={dayEnabled.saturday}
            onChange={handleDayEnabledChange('saturday')}></Switch>
        </Grid>
        <Grid item xs={11}>
          <KeyboardTimePicker
            margin="normal"
            id="time-picker"
            label="Sunday"
            value={selectedDate.sunday}
            onChange={handleDateChange('sunday')}
            KeyboardButtonProps={{
              'aria-label': 'change time',
            }}
          />
        </Grid>
        <Grid item xs={11}>
          <Switch
            checked={dayEnabled.sunday}
            onChange={handleDayEnabledChange('sunday')}></Switch>
        </Grid>
      </Grid>
      <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() => { exportJson()} }>Save</Button>
    </MuiPickersUtilsProvider>
  );
}