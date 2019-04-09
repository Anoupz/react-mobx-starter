import { observer } from 'mobx-react';
import React, { Component } from 'react';

import { MainStore } from '../stores/mainStore';
import { typedInject } from '../stores/rootStore';

interface IProps {
  mainStore: MainStore;
}
@observer
class App extends Component<IProps, {}> {
  render() {
    return <div>Hallo {this.props.mainStore.name}</div>;
  }
}

export default typedInject('mainStore')(App);
