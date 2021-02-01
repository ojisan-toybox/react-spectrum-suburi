import * as ReactDOM from "react-dom";
import {
  Provider,
  defaultTheme,
  Button,
  Grid,
  View,
} from "@adobe/react-spectrum";

ReactDOM.render(
  <Provider theme={defaultTheme}>
    <Button variant="cta" onPress={() => alert("Hey there!")}>
      Hello React Spectrum!
    </Button>
    <Grid
      areas={["header  header", "sidebar content", "footer  footer"]}
      columns={["1fr", "3fr"]}
      rows={["size-1000", "auto", "size-1000"]}
      height="size-6000"
      gap="size-100"
    >
      <View backgroundColor="celery-600" gridArea="header" />
      <View backgroundColor="blue-600" gridArea="sidebar" />
      <View backgroundColor="purple-600" gridArea="content" />
      <View backgroundColor="magenta-600" gridArea="footer" />
    </Grid>
  </Provider>,
  document.getElementById("root")
);
