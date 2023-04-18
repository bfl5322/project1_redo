import { html } from 'lit';
import '../src/project1-redo.js';

export default {
  title: 'Project1Redo',
  component: 'project1-redo',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ header, backgroundColor }) {
  return html`
    <project1-redo
      style="--project1-redo-background-color: ${backgroundColor || 'white'}"
      .header=${header}
    >
    </project1-redo>
  `;
}

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
