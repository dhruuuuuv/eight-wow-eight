import * as React from 'react';
import { Instrument } from './instrument';

interface Props { }

interface State { }

export class TransportComponent extends React.Component<Props, State> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1
          style={{
            color: 'black'
          }}
        >
          8-wow-8
        </h1>

        <Instrument />
      </div>
    )
  }
}