
const v8 = require('v8');
/* tag = v8.cachedDataVersionTag();
console.log(tag); */

//getHeapStatisticsSpace()

stats = v8.getHeapSpaceStatistics();

var myList = [];

for (var i = 0; i < stats.length; i++){    
    var element = stats[i];
    
    myList.push({ "Space Name": element['space_name'], 
    "Space Size": element['space_size'], 
    "Used Space Size": element['space_used_size'], 
    "Space Available": element['space_available_size'], 
    "Physical Space Size":element['physical_space_size'] },  
    );
  }

  console.log(myList);