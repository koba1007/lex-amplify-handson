import React, { Component } from 'react';
import Amplify from 'aws-amplify';
import { ChatBot, AmplifyTheme } from 'aws-amplify-react';

Amplify.configure({
  aws_project_region: 'ap-northeast-1',
  Auth: {
    identityPoolId: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    region: 'ap-northeast-1'
  },
  bots: {
    "XXXXXXX": {
      "name": "XXXXXXXXX",
      "alias": "$LATEST",
      "region": "ap-northeast-1",
    },
  }

});

// Imported default theme can be customized by overloading attributes
const myTheme = {
  ...AmplifyTheme,
  sectionHeader: {
    ...AmplifyTheme.sectionHeader,
    backgroundColor: '#ff6600'
  }
};

class App extends Component {

  handleComplete(err, confirmation) {
    if (err) {
      alert('Bot conversation failed')
      return;
    }

    alert('Success: ' + JSON.stringify(confirmation, null, 2));
    return 'ありがとうございました！他にご要望はありますか？';
  }

  render() {
    return (
      <div className="App">
        <ChatBot
          title="ChatBot"
          theme={myTheme}
          botName="XXXXXXXXXX"
          welcomeMessage="こんにちは! 何をご希望ですか？"
          onComplete={this.handleComplete.bind(this)}
          clearOnComplete={true}
          conversationModeOn={false}
        />
      </div>
    );
  }
}

export default App;