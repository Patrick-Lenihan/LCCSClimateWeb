var firebaseConfig = {
    apiKey: "AIzaSyBoS0qvzZK_UzgucG27FYVwgPin58yBEpY",
    authDomain: "cs-projectforlccs2020.firebaseapp.com",
    databaseURL: "https://cs-projectforlccs2020.firebaseio.com",
    projectId: "cs-projectforlccs2020",
    storageBucket: "cs-projectforlccs2020.appspot.com",
    messagingSenderId: "217083520295",
    appId: "1:217083520295:web:84cbd5b64ed17d7f6a3502"
  };
  var yearList = []
var tempList = []
var baseList=[]
var temperatures={}
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var myDBConn = firebase.database();
myDBConn.ref("tempuratureList").on("value", function(snapshot){
// iterate throught the branch
snapshot.forEach(function(childSnapshot){
var childData=childSnapshot.val();
console.log(childData);

var myJSON = JSON.stringify(childData);
var myYear=parseInt(childData.Year);
var myTemp=parseFloat(childData.temp);

yearList.push(childData.year);
tempList.push(childData.temp);
baseList.push(tempList[0]);
temperatures[childData.Year] = childData.temp;
})//end of forEach

  });//end of snapshot
console.log(tempList)
function getTempChart(){
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: yearList,
        datasets: [{
            label: 'global tempuratures',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: tempList
        }]
    },
    // Configuration options go here
    options: {}
});
};
