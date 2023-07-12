import React, { useState } from 'react';
import { ScheduleMeeting } from 'react-schedule-meeting';

const availableTimeslots = [0, 1, 2, 3, 4, 5].map((id) => {
  return {
    id,
    startTime: new Date(new Date().setDate(new Date().getDate() + id)).setHours(9, 0, 0, 0),
    endTime: new Date(new Date().setDate(new Date().getDate() + id)).setHours(17, 0, 0, 0),
  };
});

const CalendarModal = () => {
  const [selectedTime, setSelectedTime] = useState(null);

  const handleScheduleMeeting = () => {
    const email = prompt('Enter your email ID:');
    if (email) {
      const eventName = prompt('Enter the event name:');
      if (eventName) {
        const gapi = window.gapi;
        const CLIENT_ID = '442860453941-spqo92mr0i2qtpb27e58hflqr4j2gvb4.apps.googleusercontent.com';
        const API_KEY = 'AIzaSyDuyjPM7_gEW1h-LZrza7aEz03OPstyXQc';
        const DISCOVERY_DOCS = ['https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest'];
        const SCOPES = 'https://www.googleapis.com/auth/calendar.events';

        gapi.load('client:auth2', () => {
          console.log('loaded client');

          gapi.client.init({
            apiKey: API_KEY,
            clientId: CLIENT_ID,
            discoveryDocs: DISCOVERY_DOCS,
            scope: SCOPES,
          });

          gapi.client.load('calendar', 'v3', () => console.log('bam!'));

          gapi.auth2.getAuthInstance().signIn().then(() => {
            const event = {
              summary: eventName,
              start: {
                dateTime: selectedTime.startTime.toISOString(),
                timeZone: 'YOUR_TIMEZONE', // Replace with your desired time zone
              },
              end: {
                dateTime: selectedTime.endTime.toISOString(),
                timeZone: 'YOUR_TIMEZONE', // Replace with your desired time zone
              },
              attendees: [
                { email: email },
              ],
            };

            const request = gapi.client.calendar.events.insert({
              calendarId: 'primary',
              resource: event,
            });

            request.execute((event) => {
              console.log(event);
              window.open(event.htmlLink);
            });

            // Uncomment the following block to get events
            /*
            gapi.client.calendar.events.list({
              calendarId: 'primary',
              timeMin: (new Date()).toISOString(),
              showDeleted: false,
              singleEvents: true,
              maxResults: 10,
              orderBy: 'startTime',
            }).then((response) => {
              const events = response.result.items;
              console.log('EVENTS: ', events);
            });
            */
          });
        });
      }
    }
  };

  return (
    <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title text-center" id="exampleModalLabel">Hire Me</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <ScheduleMeeting
              borderRadius={10}
              primaryColor="#3f5b85"
              eventDurationInMinutes={30}
              availableTimeslots={availableTimeslots}
              onStartTimeSelect={setSelectedTime}
            />
            <button className="btn btn-primary mt-3" onClick={handleScheduleMeeting}>Schedule Meeting</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarModal;
