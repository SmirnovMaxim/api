const fs = require('fs');
const Converter = require('swagger2-postman2-converter');

function handleConversion(originalFileName, newFileName) {
  const swaggerObject = JSON.parse(fs.readFileSync(originalFileName, 'utf8'));
  const conversionResult = Converter.convert(swaggerObject);
  fs.writeFileSync(
    newFileName,
    JSON.stringify(conversionResult.collection, null, 2),
  );
  console.log('Converted ' + originalFileName + ' to ' + newFileName);
}

handleConversion('swagger-spec.json', 'postman.json');
