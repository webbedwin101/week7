var express = require('express');
var mysql = require('mysql');
var ejs = require('ejs');
var bcrypt = require('bcrypt');
var uuid = require('uuid'); 

try {
    foo(); 
} catch (err) {
    console.log(err.message); 
}
//foo is not defined
finally {
    console.log("this is always executed!")
}

function fizz() {
    throw new Error('my error message'); 
}
//caught Error: my error message

function buzz() {
    try {
        fizz();
    } catch (err) {
        throw new Error(err); 
    }
}
//Uncaught Error: Error: my error message
// https://www.npmjs.com/package/uuid

