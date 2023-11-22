import { GameManager } from './controllers/GameManager.js';
/// <reference types="jquery" />

$(function() {
  const gameManager = new GameManager();
  gameManager.init();

  
});