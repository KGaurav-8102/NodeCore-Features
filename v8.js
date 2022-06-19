
const v8 = require('v8');
/* tag = v8.cachedDataVersionTag();
console.log(tag); */

//getHeapStatisticsSpace()

/* stats = v8.getHeapSpaceStatistics();

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

  console.log(myList); */

  //v8.getHeapStatistics();

  /* stats = v8.getHeapStatistics();

  
console.log("Heap Stastistics are :");
  
console.log("total_heap_size:"+stats['total_heap_size']);
console.log("used_heap_size:"+stats['used_heap_size']);
console.log("heap_size_limit:"+stats['heap_size_limit']);
console.log("does_zap_garbage:"+stats['does_zap_garbage']); */

//v8.serialize

/* serialized_data = v8.serialize('abcdefg');
console.log("\nSerialized data is ");
console.log(serialized_data);
  
serialized_data = v8.serialize(58375693);
console.log("\nSerialized data is ");
console.log(serialized_data);
  
serialized_data = v8.serialize(73847.0234);
console.log("\nSerialized data is ");
console.log(serialized_data);
  
serialized_data = v8.serialize('\n');
console.log("\nSerialized data is ");
console.log(serialized_data); */


//v8.deserilaize

/* deserialized_data = v8.deserialize(v8.serialize('abcdefg'));
console.log("\nDeserialized data is ");
console.log(deserialized_data);
  
deserialized_data = v8.deserialize(v8.serialize(58375693));
console.log("\nDeserialized data is ");
console.log(deserialized_data);
  
deserialized_data = v8.deserialize(v8.serialize(73847.0234));
console.log("\nDeserialized data is ");
console.log(deserialized_data);
  
deserialized_data = v8.deserialize(v8.serialize('Geek'));
console.log("\nDeserialized data is ");
console.log(deserialized_data); */

//v8.serilaize.WriteHaeder()

/*const serializer = new v8.Serializer();
  
// Calling v8.serializer.writeHeader() 
console.log(serializer.releaseBuffer());
console.log(serializer.writeHeader());
console.log(serializer.releaseBuffer()); */

//v8.serializer.writevalue()


// Accessing v8 module
/*const serializer = new v8.Serializer();
  
// Calling v8.serializer.writeValue() 
console.log(serializer.releaseBuffer());
console.log(serializer.writeValue("geeksforgeeks"));
console.log(serializer.releaseBuffer());
console.log(serializer.writeValue(9314.94));
console.log(serializer.releaseBuffer());*/

/* const serializer=new v8.Serializer();
  
// Calling v8.serializer.releaseBuffer() 
console.log(serializer.releaseBuffer());
console.log(serializer.writeValue("geeksforgeeks"));
console.log(serializer.releaseBuffer());
console.log(serializer.writeValue(9314.94));
console.log(serializer.releaseBuffer());
  
// Appending one after another
console.log(serializer.writeValue("geeksforgeeks"));
console.log(serializer.writeValue(9314.94));
console.log(serializer.releaseBuffer()); */

//v8.serializer.writeUint32()

const serializer = new v8.Serializer();


// Calling v8.serializer.writeUint32() 
console.log(serializer.releaseBuffer());
serializer.writeUint32(29698);
console.log(serializer.releaseBuffer());
  
// Writing two 32 bits number one
// after another
console.log("writing two 32 bits "
    + "number one after another");
  
serializer.writeUint32(29698);
serializer.writeUint32(29698);
console.log(serializer.releaseBuffer());
  
console.log("reading after write");
  
// Calling v8.serializer.writeUint32() 
serializer.writeUint32(5783);
  
// Calling v8.deserializer.readUint32() 
const deserializer = new 
    v8.Deserializer(serializer.releaseBuffer());
console.log(deserializer.readUint32());