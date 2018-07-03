const { execSync } = require('child_process');
const prompt = require('prompt');

const schema = {
  properties: {
    // TODO this is for once we have RN boilerplate too.
    // platform: {
    //   description: 'native or web?',
    //   default: 'native',
    //   pattern: /^(native|web)$/,
    //   message: 'Enter "native" or "web".',
    // },
    name: {
      description: "Enter the component name, e.g. 'banner-alert'",
      pattern: /^[a-z-]+$/,
      message: 'Use snake case, e.g. "banner-alert".',
      required: true,
    },
  },
};

const snakeCaseToPascalCase = input => {
  const re = /(-\w)/g;
  const convert = matches => matches[1].toUpperCase();
  const camelCase = input.replace(re, convert);
  const pascalCase = camelCase[0].toUpperCase() + camelCase.slice(1);
  return pascalCase;
};

const doTheStuff = (err, { name }) => {
  const pascalCaseName = snakeCaseToPascalCase(name);

  const replaceInFiles = (oldWord, newWord) =>
    `LC_CTYPE=C; LANG=C; find packages/bpk-component-${name} -type f -exec sed -i "" "s/${oldWord}/${newWord}/g" {} +`;

  // Copy the boilerplate folder.
  execSync(
    `cp -R packages/bpk-component-boilerplate packages/bpk-component-${name}`,
  );

  // TODO should be able to do the removals as part of the copy (maybe use rsync?)

  // Remove node_modules.
  execSync(`rm -rf packages/bpk-component-${name}/node_modules`);

  // Remove snapshots.
  execSync(`rm -rf packages/bpk-component-${name}/src/__snapshots__`);

  // Remove lockfile.
  execSync(`rm -rf packages/bpk-component-${name}/package-lock.json`);

  // Rename files with 'Boilerplate'.
  // todo

  // Replace 'boilerplate' inside files (snake case).
  execSync(replaceInFiles('boilerplate', name));

  // Replace 'Boilerplate' inside files (pascal case).
  execSync(replaceInFiles('Boilerplate', pascalCaseName));

  // TODO could we get it to add the new component to storybook config too?
  // Maybe for now we can just say 'add the following line to <storybook config file>'.

  // TODO it should then tell users how to run tests, start storybook etc.
  console.log(`/packages/bpk-component-${name} has been created!`);
};

prompt.start();
prompt.get(schema, doTheStuff);
