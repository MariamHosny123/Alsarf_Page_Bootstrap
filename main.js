// // var dependencyObj= {
// // "FIELDS" :["Sector","Company","Location"],
// //    "VALUES":{
// //       " ":{},
// //       "Poultry Division":{
// //            "Wadi Poultry Parents":[
// //             "Wadi Poultry Parents - Natroun",
// //             "Wadi Poultry Parents Sadat",
// //             "HQ"
// //             ],
// //             "Wadi Poultry":[
// //             "Wadi Grandparents - Km 54",
// //             "Wadi Poultry - Km 49",
// //             "Wadi Poultry - Nubariyah",
// //             "Wadi Poultry - Toshka",
// //             "Wadi Poultry - KM 73",
// // 			"Wadi Hatcheries-Poultry Services Sadat",
// // 			"Wadi Grandparents - Sadat",
// //              "Wadi Hatcheries",
// //              "Poultry Services",
// //              "Sadat"
// //             ]
// //       },
// //       "Agri-Food Division":{
// //           "Wadi Food":[
// //             "Wadi Food - Wadi Natroun",
// //             "Wadi Food - KM 54",
// //             "Wadi Food - Sadat",
// //             "HQ"
// //           ] ,
// //         "Rula":[
// //           "Rula - Km 49",
// //           "Rula - Km 54",
// //           "Rula - Wadi Natroun"
// //         ],
// //         "Wadi Fish":[
// //           "Rayan",
// //           "HQ"
// //         ]
// //       },
// //       "Feed Nutrition Division":{
// //         "Wadi Feed":[
// //           "Wadi Feed - Nubariyah",
// //           "Wadi Feed - Sadat",
// //           "Tawseel",
// //           "LAF",
// //           "HQ"
// //         ],
// //         "Haditha For Export and Industry":[
// //           "Soya - Sadat",
// //           "HQ"
// //         ],
// //         "Wadi For Tabreed Industries":[
// //           "Tabreed - Sadat",
// //           "HQ"
// //         ]
// //       }
// //     }
// // };
// // $CS.setFieldDependency(dependencyObj); 




// // var dependencyObj= {
// //     'FIELDS' :['Country','City','Support Rep'],           
// //     'VALUES':{
// //      'India':{
// //         'Mumbai':['Ali Hassan','Neha Agarwal'],'Chennai':['Guru Prasath','Ramesh Kumar']}
// //   ,  'America':{
// //         'California':['Donald Miller','Lisa Turner'],         'Chicago':['Margaret Taylor','Ronald Lewis']        }
// //   ,  'Russia':{
// //   }
// //   ,  'China':{
// //   }
// //   ,  'England':{
// //   }
// //   }
// //   }
// //   ;
// //   $CS.setFieldDependency(dependencyObj);
// //   /* This method is used to create dependency among additional fields only. The format for dependeny object should be as follows: The order of dependent fields should be provided in FIELDS array from right to left i.e. fields in FIELDS array at second position should be dependent on field at first position. Also options in VALUES should be in array format for right most field whereas options in VALUES should  be in JSON Object format for all other fields. Provide correct letter case for field' label and option' label otherwise dependency will not work properly. Please refer above example for dependency object format.*/
  

// var dependencyObj= {
//     'FIELDS' :['SITE','WorkOrder_Multi_Fields_UDF_CHAR28'],           
//     'VALUES':{
//      'Soy Bean':['أ / عبد الحميد هارون -01068820620','أ / أحمد العدوي -01068820622'],   
//      'Rula - K49':['أ/عصام القاضي-01068847917'],
//      'Wadi Poultry - K49':['أ / مجدى مبارك -01068820560','أ / اسلام الشيخ -01203605554']      
              
// }
// }
// ;
//   $CS.setFieldDependency(dependencyObj); 
// console.log("sssssss");





// var dependencyObj= {
// "FIELDS" :["Site","Warehouse Contacts Details"],
//  'VALUES':{
//      'Soy Bean':['أ / عبد الحميد هارون -01068820620','أ / أحمد العدوي -01068820622'],   
//      'Rula - K49':['أ/عصام القاضي-01068847917'],
//      'Wadi Poultry - K49':['أ / مجدى مبارك -01068820560','أ / اسلام الشيخ -01203605554']      
              
// }
// }
// ;
// $CS.setFieldDependency(dependencyObj); 

// var dependencyObj= {
// "FIELDS" :["Site","Warehouse Contacts Details"],
//  'VALUES':{
//      'Soy Bean':['أ / عبد الحميد هارون -01068820620','أ / أحمد العدوي -01068820622'],   
//      'Rula - K49':['أ/عصام القاضي-01068847917'],
//      'Wadi Poultry - K49':['أ / مجدى مبارك -01068820560','أ / اسلام الشيخ -01203605554'],
//      'Tabreed - Sadat':['أ/مهاب نبيه -01023001839','أ/ أحمد حواس -01027104333','أ / سامى حافظ -01277926622','أ / إبراهيم أحمد -01029900584'],
//      'Rula - Natroun':['أ / حسن طرباى -01206201110','أ/ ضيف عوض -01022929476'],
//      'Wadi Poultry - Nubaria':['أ / أيمن العبد -01063498400','أ / محمد فؤاد-01273669982','أ / عبد الحميد محمد','أ / محمود الفار -01206200090'],
//      'K73':['أ / أحمد نور-01023455288','أ / باسم عبد الرحمن -01006529411','أ / محمود الفار -01206200090'],
//    '':[]
              
// }
// }
// ;
// $CS.setFieldDependency(dependencyObj); 






// var dependencyObj= {
// "FIELDS" :["Site","Warehouse Contacts Details"],
//  'VALUES':{
//      'Soy Bean':['أ / عبد الحميد هارون -01068820620','أ / أحمد العدوي -01068820622'],   
//      'Rula - K49':['أ/عصام القاضي-01068847917'],
//      'Wadi Poultry - K49':['أ / مجدى مبارك -01068820560','أ / اسلام الشيخ -01203605554'],
//    'Tabreed - Sadat':['أ/مهاب نبيه -01023001839','أ/ أحمد حواس -01027104333','أ / سامى حافظ -01277926622','أ / إبراهيم أحمد -01029900584'],
//    'Rula - Natroun':['أ / حسن طرباى -01206201110','أ/ ضيف عوض -01022929476'],
//    'Wadi Poultry - Nubaria':['أ / أيمن العبد -01063498400','أ / محمد فؤاد-01273669982','أ / عبد الحميد محمد','أ / محمود الفار -01206200090'],
//    'K73':['أ / أحمد نور-01023455288','أ / باسم عبد الرحمن -01006529411','أ / محمود الفار -01206200090'],
//    'Wadi Food-Sadat':['أ / محمد فتحي -01068820619'],
//    'Wadi Hatcheries - Sadat':['أ/مهاب نبيه -01023001839','أ/ أحمد حواس -01027104333','أ / سامى حافظ -01277926622','أ / محمود الفار -01206200090'],
//    'Wadi Farms Toshka':['أ/مهاب نبيه -01023001839','أ/ أحمد حواس -01027104333','أ / سامى حافظ -01277926622','أ / محمود الفار -01206200090'],
//    '':[]
              
// }
// }
// ;
// $CS.setFieldDependency(dependencyObj); 













// var dependencyObj= {
// "FIELDS" :["Site","Warehouse Contacts Details"],
//  'VALUES':{
//      ' ':[], 
//      'Soy Bean':['أ / عبد الحميد هارون -01068820620','أ / أحمد العدوي -01068820622'],   
//      'Rula - K49':['أ/عصام القاضي-01068847917'],
//      'Wadi Poultry - K49':['أ / مجدى مبارك -01068820560','أ / اسلام الشيخ -01203605554'],
//    'Tabreed - Sadat':['أ/مهاب نبيه -01023001839','أ/ أحمد حواس -01027104333','أ / سامى حافظ -01277926622','أ / إبراهيم أحمد -01029900584'],
//    'Rula - Natroun':['أ / حسن طرباى -01206201110','أ/ ضيف عوض -01022929476'],
//    'Wadi Poultry - Nubaria':['أ / أيمن العبد -01063498400','أ / محمد فؤاد-01273669982','أ / عبد الحميد محمد','أ / محمود الفار -01206200090'],
//    'K73':['أ / أحمد نور-01023455288','أ / باسم عبد الرحمن -01006529411','أ / محمود الفار -01206200090'],
//    'Wadi Food-Sadat':['أ / محمد فتحي -01068820619'],
//    'Wadi Hatcheries - Sadat':['أ/مهاب نبيه -01023001839','أ/ أحمد حواس -01027104333','أ / سامى حافظ -01277926622','أ / محمود الفار -01206200090'],
//    'Wadi Farms Toshka':['أ/مهاب نبيه -01023001839','أ/ أحمد حواس -01027104333','أ / سامى حافظ -01277926622','أ / محمود الفار -01206200090'],
//    'Wadi Feed-Nubaria':['أ / علاء سلام -01280002864'],
//    'K54':['أ / أحمد الشرقاوى - 01067764453','أ / محمد عبد الله -01206201310','أ / إبراهيم فوزى -01222350230'],
//    'Slaughter':['أ / سعيد عبد الدايم -01000884400','د/ رياض-01206201070']
              
// }
// }
// ;
// $CS.setFieldDependency(dependencyObj); 











// $CS("Execution Date").on('change', function() {
//         // Get the entered date
//         var enteredDate = new Date($(this).val());
        
//         // Get the current date
//         var currentDate = new Date();

//         // Compare the entered date with the current date
//         if (enteredDate >= currentDate) {
//             // Enable fields if the entered date is greater than or equal to the current date
//             $CS('PO Number').prop('disabled', true);
//             $CS('PR Number').prop('disabled', true);
//             // Add more fields as needed
//         } else {
//            return true;

//         }
//     }); 




function myFunction() { 
  var navBar = document.getElementById('nav_second_row');  
    console.log(navBar);
    if(navBar.style.display == "flex") { // if is menuBox displayed, hide it
      navBar.style.display = "none";
    }
    else { // if is menuBox hidden, display it
      navBar.style.display = "flex";
    }
  }