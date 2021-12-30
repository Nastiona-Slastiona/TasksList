const postcssConfig = {
    plugins: [
        'autoprefixer',
        'postcss-flexbugs-fixes'
    ]
};

if (process.env.NODE_ENV === 'production') {
    postcssConfig.plugins.cssnano = {
        preset: 'default'
    };
}

module.exports = postcssConfig;
