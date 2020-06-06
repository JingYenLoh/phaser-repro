import React from 'react';
import logo from './logo.svg';
import Phaser from 'phaser';
import { IonPhaser } from '@ion-phaser/react';
import './App.css';

function App() {
  return (
    <IonPhaser game={{ width: "100%", height: "100%", type: Phaser.AUTO, scene: {} }} initialize={false} />
  );
}

export default App;
