// Immediately Invoked Function Expresssions (IIFE)

// Files having only Database Connections are required to be immediately invoked. 
// As soon as the Application starts, database connection get started
// Sometimes the variables in the function gets polluted with the Global scope , to avoid this, we create a new scope & immediately execute the function

// First parantheses for Function DEFINITION.
// Second Paranthese for its EXCECUTION.

//_____________ NAMED IIFE _________________________
(function chai() {          
    console.log(`DB Connected`);
})();   // Explicit semi-colon ;

// **********IIFE gets invoked but it doesn't know where to stop the context
// For this, JS has to end the scope or context by ;
// If ; not put, 2 IIFE cannot be executed Back-to-Back.

//** 2 IIFE saath me likhne k liye semi-colon lagate 1st IIFE k baad */

// chai();


/**
 * Global scope k pollution se problem hoti hai kayi baar,
 * So us global scope ke variables/declarations ke pollution ko hatane k liye IIFE use karte. 
 */


// ________ SIMPLE IIFE _____________
( (name) => {       // name = Expected Argument
    console.log(`DB Connected 2 ${name}`);
} )('pallavi')      // <= Expected Parameter