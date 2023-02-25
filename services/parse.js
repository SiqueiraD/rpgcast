import Parse from 'parse';

//checking if env is browser
if (typeof window !== "undefined") {
  Parse.initialize("APP_ID","JS_KEY");
  Parse.serverURL = 'https://parseapi.back4app.com/';
}