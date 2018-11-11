export default class App extends React.Component {
  state = {
    payload: null
  };

  async componentDidMount() {
    const payload = await fetch("/api").then(res => res.text());

    this.setState({ payload });
  }

  componentDidUpdate() {
    setTimeout(() => this.componentDidMount(), 1000);
  }

  render() {
    const { payload } = this.state;
    return (
      <section>
        <h1>hot-module-replacement</h1>

        <pre>{payload}</pre>
      </section>
    );
  }
}
