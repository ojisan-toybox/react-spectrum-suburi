# react-spectrum-suburi

react-spectrum の素振り

```json
{
  "test": /\.(png|css)$/,
  "type": "asset/resource"
}
```

ではなく、

```json
{
  "test": /\.css$/i,
  "use": ["style-loader", "css-loader"]
}
```

でうまく動いた。
