const typescript = require('@rollup/plugin-typescript');
const commonjs = require('@rollup/plugin-commonjs');
const external = require('rollup-plugin-peer-deps-external');
const autoExternal = require('rollup-plugin-auto-external');

const config = [
    {
        input: 'src/Chip.tsx',
        output: [
            {
                file: 'dist/Chip.js',
                format: 'cjs',
                exports: 'named',
                sourcemap: true
            },
            {
                file: 'dist/Chip.es.js',
                format: 'es',
                exports: 'named',
                sourcemap: true
            }
        ],
        plugins: [
            autoExternal(),
            external(),
            typescript(),
            commonjs(),
        ]
    }
];

module.exports = config;