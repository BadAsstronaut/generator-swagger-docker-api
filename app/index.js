'use strict';

const Generator = require('yeoman-generator');
const yosay = require('yosay');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.argument('appname', {
      type: String,
      required: true,
      desc: 'Name of the application'
    });

    this.option('ver', {
      type: String,
      required: false,
      description: 'Semver version to use on initialization',
      default: '1.0.0'
    });
  }

  initializing() {
    this.log(yosay(
      `Scaffolding the API for ${this.options.appname} @ version ${this.options.ver}!`
    ));

    this.log(this.options);
  }

  configuring() { }

  writing() {
    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json'),
      this.options
    );

    this.fs.copyTpl(
      this.templatePath('bin/www'),
      this.destinationPath('bin/www'),
      this.options
    );

    this.fs.copy(
      this.templatePath('*.js'),
      this.destinationPath()
    );

    this.fs.copy(
      this.templatePath('*.md'),
      this.destinationPath()
    );

    this.fs.copy(
      this.templatePath('.*'),
      this.destinationPath()
    );

    this.fs.copy(
      this.templatePath('controllers/**'),
      this.destinationPath('controllers')
    );

    this.fs.copy(
      this.templatePath('db/**'),
      this.destinationPath('db')
    );

    this.fs.copy(
      this.templatePath('handlers/**'),
      this.destinationPath('handlers')
    );

    this.fs.copy(
      this.templatePath('lib/**'),
      this.destinationPath('lib')
    );

    this.fs.copy(
      this.templatePath('migrations/**'),
      this.destinationPath('migrations')
    );

    this.fs.copy(
      this.templatePath('models/**'),
      this.destinationPath('models')
    );

    this.fs.copy(
      this.templatePath('serializers/**'),
      this.destinationPath('serializers')
    );

    this.fs.copy(
      this.templatePath('spec/**'),
      this.destinationPath('spec')
    );

    this.fs.copyTpl(
      this.templatePath('spec/spec.yaml'),
      this.destinationPath('spec/spec.yaml'),
      this.options
    );

    this.fs.copy(
      this.templatePath('test/**'),
      this.destinationPath('test')
    );
  }

  install() {
    this.npmInstall();
  }

  end() { }
}