Brief Description:

Collab Drums is a music web app where users can create rooms and make drum patterns with others in real-time. Users can upload audio samples to cloud storage, click in when they want audio samples to play, and broadcast these changes to all users within that public or private room. 

<img width="1440" alt="Screen Shot 2022-01-11 at 11 02 45 AM" src="https://user-images.githubusercontent.com/6860113/149005398-959a4ee3-c44a-4d33-8855-016d8376dfad.png">


Why I built it:

Due to COVID, many musicians weren't able to collaborate physically. I wanted to create a solution that alowed them to do so virtually.  


About the tech stack:

Collab Drums is built using React, MongoDB to store room data, Express.js to create API server and processing of requests, Firebase Cloud Storage to store audio samples, and Sockets.io for client-to-server and server-to-client communication to broadcast changes to users within the same room.  


Features:

1) Create public and private rooms
2) Adjustable BPM tempo
3) Upload audio samples and store them in cloud storage
4) Broadcast when a user uploads a new audio sample or modifies the drum pattern

Future Features:

1) Export as wav file
2) Export as MIDI
3) Pitch audio samples
4) Adjust loudness of audio samples 

Demo:

<img width="1440" alt="Screen Shot 2022-01-11 at 11 02 58 AM" src="https://user-images.githubusercontent.com/6860113/149005444-1064a2fa-45ff-4a52-8366-4ddd6ea893ed.png">

<img width="1440" alt="Screen Shot 2022-01-11 at 11 03 18 AM" src="https://user-images.githubusercontent.com/6860113/149005471-8d3ef149-4a6d-46d6-959b-4ec090e5f7b9.png">

