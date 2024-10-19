# About Configuration
- `"plugins": ["plugins/markdown"]`: To add the MD file to the documentation. You can set the address of this file in the OPT section `"opts": { "readme": "./README.md" }`.
- `"recurseDepth": 10`: Compiler penetration depth to document files.
- `"source": { "include": ["src"] }`: Source files for documenting. Add or remove files using patterns `"includePattern": ".js$"` AND ` "excludePattern": "(node_modules/)|docs"`
- `"opts": { "destination": "./docs/jsdoc" }`: Compiler output.
- `"opts": { "tutorials": "./docs/jsdoc/tutorials" }`: Output of tutorials section.

### Bash Config Section
```bash
# Install npm package
npm install jsdoc

# Make necessarily directory
mkdir ./docs/jsdoc
mkdir ./docs/jsdoc/tutorials
touch 
```

### NPM Config Section
```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "jsdoc": "jsdoc -c jsdoc.json"

},
```

### Tutorial Config Section
- In the tutorial folder, any MD file will be created with the same name in the tutorial section.
- In tutorial section you can use `./docs/jsdoc/tutorials/tutorial.json` to change title of page. 