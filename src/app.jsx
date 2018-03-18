import React from 'react';

export default class App extends React.Component {
  render() {
    return (<div>
      <webview src="http://localhost:8080/" style={{ height: '800px' }} />
    </div>);
  }
}
