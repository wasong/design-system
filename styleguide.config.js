const path = require('path')

module.exports = {
  title: 'Design System Boilerplate',
  styleguideComponents: {
    Wrapper: path.resolve(__dirname, 'src', 'App.js'),
  },
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.js')
    return `import ${name} from '@wasong/design-system/${name}'`
  },
  sections: [
    {
      name: 'Introduction',
      content: 'docs/introduction.md',
    },
    {
      name: 'Documentation',
      sections: [
        {
          name: 'Installation',
          content: 'docs/installation.md',
        },
        {
          name: 'Configuration',
          content: 'docs/configuration.md',
        },
        {
          name: 'Live Demo',
          external: true,
          href: 'http://example.com',
        },
      ],
    },
    {
      name: 'UI Components',
      components: 'src/**/[A-Z]*.js',
      exampleMode: 'expand',
      usageMode: 'expand',
    },
  ],
}
