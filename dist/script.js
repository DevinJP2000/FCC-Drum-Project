import React from 'https://esm.sh/react@18.2.0';
import ReactDOM from 'https://esm.sh/react-dom@18.2.0';
import { useEffect, useState } from 'https://esm.sh/react@18.2.0';

const drumSet = [
{
  keyCode: 81,
  keyName: 'Q',
  name: 'Heater 1',
  sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
  altName: 'Chord 1',
  altSound: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3' },

{
  keyCode: 87,
  keyName: 'W',
  name: 'Heater 2',
  sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
  altName: 'Chord 2',
  altSound: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3' },

{
  keyCode: 69,
  keyName: 'E',
  name: 'Heater 3',
  sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
  altName: 'Chord 3',
  altSound: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3' },


{
  keyCode: 65,
  keyName: 'A',
  name: 'Heater 4',
  sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
  altName: 'Shaker',
  altSound: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3' },

{
  keyCode: 83,
  keyName: 'S',
  name: 'Clap',
  sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
  altName: 'Open HH',
  altSound: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3' },

{
  keyCode: 68,
  keyName: 'D',
  name: 'Open-HH',
  sound: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
  altName: 'Closed HH',
  altSound: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3' },

{
  keyCode: 90,
  keyName: 'Z',
  name: "Kick 'n Hat",
  sound: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
  altName: 'Punchy Kick',
  altSound: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3' },

{
  keyCode: 88,
  keyName: 'X',
  name: "Kick",
  sound: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
  altName: 'Side Stick',
  altSound: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3' },

{
  keyCode: 67,
  keyName: 'C',
  name: 'Closed HH',
  sound: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
  altName: 'Snare',
  altSound: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3' }];



function App() {

  const [soundName, setSoundName] = useState("Heater Kit");
  const [soundVar, setSoundVar] = useState("sound");
  const [soundNameVar, setSoundNameVar] = useState("name");
  const [bankSwitch, setBankSwitch] = useState(true);



  useEffect(() => {
    document.addEventListener('keydown', event => {
      playSound(event.key.toUpperCase());
    });
  }, []);

  function playSound(uniqueID) {
    const audio = document.getElementById(uniqueID);
    audio.currentTime = 0;
    audio.play();
    setSoundName(audio.getAttribute('data-name'));
  }

  function bankSwitcher() {
    if (bankSwitch) {
      setSoundVar("altSound");
      setSoundNameVar("altName");
      setBankSwitch(false);
      setSoundName("Heater Kit");
    } else
    {
      setSoundVar("sound");
      setSoundNameVar("name");
      setBankSwitch(true);
      setSoundName("Smooth Piano Kit");
    }
  }

  return /*#__PURE__*/(
    React.createElement("div", { id: "display" }, /*#__PURE__*/
    React.createElement("div", { id: "drum-pads" },

    drumSet.map(drumPad => /*#__PURE__*/React.createElement("div", {
      onClick: () => {
        playSound(drumPad.keyName);
      },
      className: "drum-pad",
      id: drumPad.keyCode },
    drumPad.keyName, /*#__PURE__*/
    React.createElement("audio", {
      src: drumPad[soundVar],
      className: "clip",
      id: drumPad.keyName,
      "data-name": drumPad[soundNameVar] })))), /*#__PURE__*/




    React.createElement("div", { id: "controls" }, /*#__PURE__*/
    React.createElement("div", { id: "soundName" }, soundName), /*#__PURE__*/
    React.createElement("div", { id: "bankSwitch>" }, /*#__PURE__*/
    React.createElement("label", { class: "switch" }, /*#__PURE__*/
    React.createElement("input", { type: "checkbox", onClick: () => {
        bankSwitcher();
      } }), /*#__PURE__*/
    React.createElement("span", { class: "slider" }))))));





}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('drum-machine'));