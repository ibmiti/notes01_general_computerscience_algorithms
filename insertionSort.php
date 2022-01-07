<?php

php + mysql statements ( non eloquent / laravel )
// mysql statements
$sql = 'insert into toDos (todoTitle, toDoDescription) values ( 'test', 'testDescription');';

if mysqli_query($link, $sql)) {
  echo "<br>New record created successfully";
} else {
  echo " error occured";
}

if () {
} else {

}


// loops : any time we are looping we need a minimum ( or i = 0 OR 1; )

querying from table;

- select a,b from table : queries data from tables in columns => a,b from given table
- select * from table : queries all from given table
- select a,b from table where condition == selecting a,b columns from given table where given conditions are true and not false;
- select distinct a from table where condition == selecting rows which do not return duplicate data to results table.
- select a,b from table order by asc/desc == select columns: a,b from specified table and order the results in ascending or descending order.
- select a,b from table order by a LIMIT n OFFSET offset == select cols: a,b from table and display the results by this given range ( using limit as MAXVAL,)



Algorithms :

Binary Search :
  Features: [ fast_search ]
  KeyBehaviors : [ uses middle value as PIVOT = which speeds searching, due to searching for less values every time the pivot is placed between a new range of values ]
  KeyProperties : [ hasMiddleValue = 'acts as pivot' ];



function binarysearch() : int {

  return -1; // if search fails
}

recursive version of binary search :

function binarysearch(Array $givenarray, $givenstartvalue, $givenEndValue, $givensearchTerm) {
  if ($givenEndValue < $givenStartValue){ } elseif { return } else { return }
}

funtion binarysearch(Array $arr, $start)

// php interview questions :
https://www.toptal.com/php/interview-questions



data modeling :

what is data modeling? : it connects realworld data to a coded reality. some could
also say its a visualization step of the software/product development cycle.

  high-level view : process of representing data visually for later storage in a datawarehouse.

  The model : is the conceptualized form of the eventual data warehouse ( mysql, mariadb, other )
    further: 1. the model is consumed by the db.server so : db.server == model.db

 Datamodels.elements : [ diagrams, symbols, text ] == data in model and its relationships/connections
  1. these symbols and connections represent how the tables and its elements ( data within the columns, rows ) connect to eachother
  2. these datamodel.elements should represent real world quantifiable ( trackable/storable ) data. The
  3. the data should also be important to the functions of the business; e.g ( firstname, lastname, email, other )

micro services architecture:
1. microservices are software extensions, which can be applied singly or in multiples toward a singluar application or site.
2. api's are objects in which contain many functions vs microservices usually being a single function/process returned from a package/class
3. microservices architectures are the anti-monolithic structures. the microserviced application(s) is serviced by many different components, or sub apps
4. this leaves the application with a many-brained approach; but also highly dependent on the good-health of the other services.
5. Microserviced applications usually are communicating with many other lightweight mechanisms/processes ran by other apps/etc
6. view of a microservice architecture : [ user interface ] * parent * - connects to --> micro_servA, microServB, microServC --> communicates with possible many databases : db1, db2, db3

Benefits of Microservice :
1. independent components : the components can be deployed and updated independently
2. easier understanding : the applicaition/repo is broken down into bite sized components
3. Better Scalability : we can scale individual components versus the entire codebase
4. Diverse Tech stack : allows for newer technologies to be more easily ingested into the system.
5. non-breaking-errors : if one service breaks, not all services break; so the other lights stay on within the applicaition

Weaknesses of Microservices :
1. extra complexity
2. System distribution :
3. Cross-cutting concerns : some concerns which are not seemingly connected may affect another internal component/subsystem ( omg so many strings attached / spooky action at a distance )
4. testing : so many components to test omg.

Application's built with : Microservices vs. Monolithic type :

1. Weaknesses of a monolithic architecture :
  1. vagueness : as monolithic applications grow, their idiosynchrocies grow, therefore; and
                 they become harder to manage without proper tools designed for the task of governing monolith's
  2. tight coupling : the monolithic nature ( or the non-separateness ) of the monolithic-app makes it hard to make any changes that do not often break the whole thing.
  3. scalability : while you can scale, it becomes much harder to do so; this is because you cannot scale an independent component, you must scale the entire application.
      ergo ; monolith
  4. new-tech phobic : it is quite the task to update the technologies used by an monolithic application.

  summary/abstract : most of the problems surrounding monolithic apps spawn from the tight-coupled nature of its architecture;
                     to change one thing, is to change the entire thing. ( like what velocity or volume is to speed or area/radius == dependent/independent variables tightly coupled )

2. Strengths of Monolithic architecture'd application's :
  1.Less-Cross cutting concerns : which are concerns that cover/cross/concern the entire application
    such as : 1. logging 2. handling 3. caching 3. performance monitoring
  2. Easier debug experience : microservices being many, are harder to debug/test than a singly structured application.
     we only need to decouple where the application is breaking to know we have ridden all of the bugs
  3. simle to deploy : we just need to upload one dir, and the entire application should be ready to go.

WHICH SOFTWARE ARCHITECTURE FITS YOUR TEAM/COMPANY ?
1. small teams => monolithic architecture due to [ reduced complexities, less business logic ( potentially )]
