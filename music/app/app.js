'use strict';

/**
 * @ngdoc overview
 * @name music
 * @description
 * # Sangeetham
 *
 * Main module of the application.
 */
var app = angular
  .module('sangeetham', ['ui.router','angularSoundManager', 'oc.lazyLoad'])
  .constant('COLORS', {
    'default': '#e2e2e2',
    primary: '#09c',
    success: '#2ECC71',
    warning: '#ffc65d',
    danger: '#d96557',
    info: '#4cc3d9',
    white: 'white',
    dark: '#4C5064',
    border: '#e4e4e4',
    bodyBg: '#e0e8f2',
    textColor: '#6B6B6B',
  });
