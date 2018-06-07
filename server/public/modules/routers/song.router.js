const express = require( 'express' );
const router = express.Router();
const app = angular.module( 'app', ['ngRoute'] );

// Get our connection to the database
const pool = require( '../pool.js');

songApp.config( function( $routeProvider ) {
    $routeProvider.when( '/',{
         templateUrl: 'views/home.html' })});
