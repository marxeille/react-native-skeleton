const fs = require('fs');

const imageFileNames = () => {
  const array = fs
    .readdirSync('src/resources/images')
    .filter((file) => {
      return file.endsWith('.png');
    })
    .map((file) => {
      return file.replace('.png', '');
    });
  return Array.from(new Set(array));
};

const generate = () => {
  let properties = imageFileNames()
    .map((name) => {
      return `${name.replace(/-/g, '_')}: require('./resources/${name}.png')`;
    })
    .join(',\n  ');
  const string = `const images = {
  ${properties},
};\n
export default images;
`;
  fs.writeFileSync('src/resources/images/index.js', string, 'utf8');
};

generate();
