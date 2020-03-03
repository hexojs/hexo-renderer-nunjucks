# hexo-renderer-nunjucks

[![Build Status](https://travis-ci.com/hexojs/hexo-renderer-nunjucks.svg?branch=master)](https://travis-ci.com/hexojs/hexo-renderer-nunjucks)  [![NPM version](https://badge.fury.io/js/hexo-renderer-nunjucks.svg)](http://badge.fury.io/js/hexo-renderer-nunjucks) [![Coverage Status](https://img.shields.io/coveralls/hexojs/hexo-renderer-nunjucks.svg)](https://coveralls.io/r/hexojs/hexo-renderer-nunjucks?branch=master)

Add support for [Nunjucks] templates to [Hexo] websites.

All template files suffixed with `.njk` or `.j2` ([Jinja2]) will be converted
to HTML pages.

## Installation

**Note**: this module is installed by default since `hexo@5.x`.<br>
For other [Hexo] versions, run the following command in an Hexo project folder of yours.

``` bash
$ npm install hexo-renderer-nunjucks
```

## Development

### Testing

Tests and code coverage are generated when running the following command.

```bash
npm test
```

Pull Requests will be checked automatically with [Coveralls]. Their bot
will comment about the coverage change as a comment to the code change.

### Releasing a new version

A bug fix and non-breaking code release can be created with the following commands:

```bash
npm version patch
git push && git push --tags
```

Read [`npm version` documentation](https://docs.npmjs.com/cli/version)
to learn more about other companion commands,
such as `npm version major` (breaking change)
and `npm version minor` (features, new stuff), amongst others.

### Publishing on npm

This package is automatically published on npm as
[`hexo-renderer-nunjucks`][npm-pkg] for every new Git tag.

Two secrets environment variables need to be setup in [Travis CI Repo Settings](https://travis-ci.com/hexojs/hexo-renderer-nunjucks/settings) :

|                       | Description
| ---                   | ---
| `NPM_USER_EMAIL`      | Email of the npm user account with _write access_ to [`hexo-renderer-nunjucks`][npm-pkg].
| `NPM_API_KEY`         | API Token associated to the aforementioned user.


[Nunjucks]: https://mozilla.github.io/nunjucks/
[Jinja2]: https://palletsprojects.com/p/jinja/
[Hexo]: https://hexo.io/

[npm-pkg]: https://npmjs.com/hexo-renderer-nunjucks
[Coveralls]: https://coveralls.io/github/hexojs/hexo-renderer-nunjucks
