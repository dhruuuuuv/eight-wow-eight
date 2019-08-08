import * as React from 'react';
import { Kick } from '../engines/kick';
import { Transport } from 'tone';

interface Props { }

interface State { }

export class Instrument extends React.Component<Props, State> {
  private kick: Kick;
  private ctx: AudioContext;

  constructor(props: any) {
    super(props);
    this.ctx = new AudioContext;
    this.kick = new Kick(this.ctx)
    // this.tp = new Transport();


    Transport.bpm.value = 120;
    Transport.schedule(this.startLoop, '0')

    Transport.loop = true;
    Transport.loopEnd = '1m'
  }

  public startLoop = (time: number) => {
    // 120
    console.log('start loop ', time);
    this.kick.trigger(time);
    this.kick.trigger(time + 0.5);
    this.kick.trigger(time + 1);
    this.kick.trigger(time + 1.5);
  }

  public handleClick = () => {
    Transport.start();
  }

  render() {
    return (
      <button
        onClick={this.handleClick}
      >
        instrument
      </button>
    )
  }
}