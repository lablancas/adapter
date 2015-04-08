Package.describe({
    name: 'lablancas:webrtc-adapter',
    version: '0.0.1',
    // Brief, one-line summary of the package.
    summary: 'Shim to insulate apps from spec changes and prefix differences',
    // URL to the Git repository containing the source code for this package.
    git: 'https://github.com/lablancas/adapter',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function(api) {
    api.versionsFrom('1.1.0.1');
    api.addFiles('adapter.js', 'client');
    api.export('WebRTC');
});

Package.onTest(function(api) {
    api.use('tinytest');
    api.use('lablancas:webrtc-adapter');
    api.addFiles('adapter-tests.js', 'client');
});
