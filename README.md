Author - JC Hurst https://avatars1.githubusercontent.com/u/18730511?s=400&u=1e9ebda19d790107a1c2c207590b251c77cba20d&v=4

Created by JC Hurst

Github - https://github.com/jchurst
FreeCodeCamp - http://www.freecodecamp.com/jchurst
CodePen - http://codepen.io/jchurst/
LinkedIn - https://www.linkedin.com/in/jchurst
Website - http://hurstcreative.com
E-Mail - mailto:jchurstmail@gmail.com

FreeCodeCamp API: Timestamp Microservice

User stories:

1. I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016)
2. If it does, it returns both the Unix timestamp and the natural language form of that date.
3. If it does not contain a date or Unix timestamp, it returns null for those properties.

Example usage:

#url
https://timestamp-ms.herokuapp.com/December%2015,%202015
https://timestamp-ms.herokuapp.com/1450137600

Example output:

#json
{ "unix": 1450137600, "natural": "December 15, 2015" }
