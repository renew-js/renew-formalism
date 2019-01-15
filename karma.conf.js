module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: [ 'mocha', 'sinon-chai' ],
        files: [
            'test/**/*.spec.js',
            { pattern: 'src/**/*.js', included: false }
        ],
        exclude: [ ],
        preprocessors: {
            '**/*.spec.js': [ 'rollup' ]
        },
        rollupPreprocessor: {
            plugins: [ require('rollup-plugin-buble')() ],
            output: {
                format: 'iife',
                name: 'formalism',
                sourcemap: 'inline'
            }
        },
        customPreprocessors: {
            rollupBabel: {
                base: 'rollup',
                options: {
                    plugins: [
                        require('rollup-plugin-node-resolve')(),
                        require('rollup-plugin-babel')(),
                    ],
                }
            }
        },
        reporters: [ 'progress' ],
        coverageReporter: {
            reporters: [
                { type: 'lcov', subdir: '.' }
            ]
        },
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: [
            'Firefox',
            'FirefoxHeadless',
            'Chrome',
        ],
        customLaunchers: {
            FirefoxHeadless: {
                base: 'Firefox',
                flags: [ '-headless' ],
            },
        },
        singleRun: false,
        concurrency: Infinity,
    });
};
