import React from "react";

export default class TeamPreview extends React.Component {
  render() {
    const {entry, widgetFor} = this.props;

    return <div class="center mb3 ph3">
    	<blockquote class="bg-grey-1 primary pa3 mb3 br1 b mw6 center">
        <h3 class="f3 b lh-title mb2">{ entry.getIn(["data", "name"])}</h3>
        <p>{ entry.getIn(["data", "email"])}</p>
        <h4>{ entry.getIn(["data", "title"])}</h4>
        <h4>{ entry.getIn(["data", "phone"])}</h4>
    	</blockquote>
    </div>;
  }
}
