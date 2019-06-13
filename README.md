# Typist

A really simple javascript utility for simulating human-like typing.




#### Usage

`typist(text, textHandler);`
Where text is whatever you want to be typed and handler is your function that modifies the value of the element that will display the text.

##### React example:

````
Class LandingPage extends React.Component {
  text =
    "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections";

  componentDidMount() {
    typist(this.text, this.handleChange);
  }

  state = {
    visible: ""
  };

  handleChange = visible => {
    this.setState({ visible });
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Header classes={classes} />

        <Typography> {this.state.visible}</Typography>
      </div>
    );
  }
}```
````
